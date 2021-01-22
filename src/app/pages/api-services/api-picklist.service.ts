
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/@core/service/api.service';
import { environment } from 'src/environments/environment';
import { PickListService } from 'src/app/@core/service/picklist.service';
import { PickList } from 'src/app/@core/entity/picklist/picklist';



@Injectable()
export class ApiPickListService extends PickListService {
    getCategory(): Observable<HttpResponse<PickList[]> | Observable<never>> {
        return this.apiService.get<Array<PickList>>(environment.get_pickList+ 'CATEGORY').pipe(
            map((x: HttpResponse<Array<PickList>>) => {
                return this.handleResponse<Array<PickList>>(false, x);
            }),
            catchError(error => {
                return this.catchError(false, error);
            })
        );
        
    }
    getGender(): Observable<HttpResponse<PickList[]> | Observable<never>> {
        throw new Error('Method not implemented.');
    }

    constructor(private apiService: ApiService) {
        super();
    }
    // getPickLIstById(showErrorNotif: boolean, id: string): Observable<HttpResponse<PickList> | Observable<never>> {
    //     throw new Error('Method not implemented.');
    // }
    // getPickLIstByGroupe(groupe: string): Observable<HttpResponse<PickList[]> | Observable<never>> {
    // let showErrorNotif: boolean = false;

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