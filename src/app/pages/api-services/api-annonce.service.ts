import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/@core/service/api.service';
import { Vente } from 'src/app/@core/Entity/vente/vente';
import { environment } from 'src/environments/environment';;
import { Datatable } from 'src/app/@core/Entity/datatable/data-table';
import { GetTableDataParam } from 'src/app/@core/Entity/datatable/get-table-data-param';
import { VenteReq } from 'src/app/@core/entity/vente/vente-req';
import { AnnonceService } from 'src/app/@core/service/annonce.service';
import { Annonce } from 'src/app/@core/entity/annonce/annonce';
import { AnnonceReq } from 'src/app/@core/entity/annonce/annonce.req';



@Injectable()
export class ApiAnnonceService extends AnnonceService {
    getAll(getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Annonce[]>> | Observable<never>> {
        return this.apiService.post<Datatable<Array<Annonce>>>(environment.api_all_annonce, getTableDataParam).pipe(
            map((x: HttpResponse<Datatable<Array<Annonce>>>) => {
                if (false && x.status == 202) {
                    // this.toastrService.danger(x.body, "Erreur");
                    throw new Error(x.body.toString());
                }
                return x;
            }),

            catchError(error => {
                if (error instanceof (Error)) {
                    throw new Error(error.message);
                } else {
                    if (false) {
                        // this.toastrService.danger(error, "Erreur");
                    }
                    throw new Error(error);
                }
            })   
        );                 
    }
    getAnnoncesforUnAuthentified(showNotif: boolean, annonceReq: AnnonceReq): Observable<Observable<never> | HttpResponse<Annonce[]>> {
        return this.apiService.post<Annonce[]>(environment.api_get_unauthentified_annonce, annonceReq).pipe(
            map((x: HttpResponse<Annonce[]>) => {
                return this.handleResponse<Annonce[]>(showNotif, x);
            }),
            catchError(error => {
                return this.catchError(showNotif, error);
            })
        );
    }
    constructor(private apiService: ApiService) {
        super();
    }
    catchError(showErrorNotif: boolean, error: any): Observable<never> {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            if (showErrorNotif) {
                console.log(error, 'Erreur');
            }
            throw new Error(error);
        }
    }
    handleResponse<T>(showErrorNotif: boolean, response: any): HttpResponse<T> {
        if (showErrorNotif && response.status == 202) {
            console.log(response.body, 'Erreur');
            throw new Error(response.body.toString());
        }
        return response;
    }
}
