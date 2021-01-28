import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/@core/service/api.service';
import { EmploieService } from 'src/app/@core/service/emploie.service';
import { Datatable } from 'src/app/@core/entity/datatable/data-table';
import { GetTableDataParam } from 'src/app/@core/entity/datatable/get-table-data-param';
import { Emploie } from 'src/app/@core/entity/emploie/emploie';
import { Vente } from 'src/app/@core/entity/vente/vente';
import { VenteReq } from 'src/app/@core/entity/vente/vente-req';
import { environment } from 'src/environments/environment';
import { JobReq } from 'src/app/@core/entity/emploie/emploie-req';



@Injectable()
 export class ApiEmploieService extends EmploieService {
    getAll(getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Emploie[]>> | Observable<never>> {
        return this.apiService.post<Datatable<Array<Emploie>>>(environment.api_all_job, getTableDataParam).pipe(
        map((x: HttpResponse<Datatable<Array<Emploie>>>) => {
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
    getVentesforUnAuthentified(showNotif: boolean, jobReq: JobReq): Observable<Observable<never> | HttpResponse<Emploie[]>> {
        return this.apiService.post<Emploie[]>(environment.api_get_unauthentified_job, jobReq).pipe(
            map((x: HttpResponse<Emploie[]>) => {
                return this.handleResponse<Emploie[]>(showNotif, x);
            }),
            catchError(error => {               
                return this.catchError(showNotif, error);
            })
        );
    }
    // getVentesforUnAuthentified(showNotif: boolean, venteReq: VenteReq): Observable<Observable<never> | HttpResponse<Vente[]>> {
    //     return this.apiService.post<Vente[]>(environment.api_get_unauthentified_vente, venteReq).pipe(
    //         map((x: HttpResponse<Vente[]>) => {
    //             return this.handleResponse<Vente[]>(showNotif, x);
    //         }),
    //         catchError(error => {               
    //             return this.catchError(showNotif, error);
    //         })
    //     );
    // }
    constructor(private apiService: ApiService) {
        super();
    }
    // getAll(getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Vente[]>> | Observable<never>> {
    //         
    // }

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
