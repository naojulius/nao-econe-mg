import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/@core/service/api.service';
import { VenteService } from 'src/app/@core/service/vente.service';
import { Vente } from 'src/app/@core/Entity/vente/vente';
import { Images } from 'src/app/@core/Entity/images/images';
import { User } from 'src/app/@core/Entity/User/user';
import { environment } from 'src/environments/environment';;
import { Datatable } from 'src/app/@core/Entity/datatable/data-table';
import { GetTableDataParam } from 'src/app/@core/Entity/datatable/get-table-data-param';
import { VenteReq } from 'src/app/@core/entity/vente/vente-req';
import { ToastrService } from 'ngx-toastr';



@Injectable()
 export class ApiVenteService extends VenteService {
    newVente(vente: FormData): Observable<HttpResponse<any> | Observable<never>> {
        return this.apiService.PostMultipart<boolean>(environment.api_new_vente, vente).pipe(
            map((x: HttpResponse<boolean>) => {
                return this.handleResponse<string>(true, x);
            }),
            catchError(error => {               
                return this.catchError(true, error);
            })
        );
    }
    getVentesforUnAuthentified(showNotif: boolean, venteReq: VenteReq): Observable<Observable<never> | HttpResponse<Vente[]>> {
        return this.apiService.post<Vente[]>(environment.api_get_unauthentified_vente, venteReq).pipe(
            map((x: HttpResponse<Vente[]>) => {
                return this.handleResponse<Vente[]>(showNotif, x);
            }),
            catchError(error => {               
                return this.catchError(showNotif, error);
            })
        );
    }
    constructor(private apiService: ApiService, private toastrService: ToastrService) {
        super();
    }
    getAll(getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Vente[]>> | Observable<never>> {
            return this.apiService.post<Datatable<Array<Vente>>>(environment.api_all_vente, getTableDataParam).pipe(
            map((x: HttpResponse<Datatable<Array<Vente>>>) => {
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
