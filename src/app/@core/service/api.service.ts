import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  post<T>(path: string, body: Object = {}): Observable<HttpResponse<T> | Observable<never>> {
    return this.http.post<T>(`${environment.api_host}${path}`, JSON.stringify(body), { observe: 'response' })
      .pipe(catchError(this.formatErrors));
  }

  get<T>(path: string, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()): Observable<HttpResponse<T> | Observable<never>> {
    return this.http.get<T>(`${environment.api_host}${path}`, { observe: 'response', params, headers })
      .pipe(catchError(this.formatErrors));
  }

  getImageAsBlob(path: string, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()): Observable<HttpResponse<Blob> | Observable<never>> {
    return this.http.get<Blob>(`${environment.api_host}${path}`, { observe: 'response', params, headers, responseType: 'blob' as 'json' })
      .pipe(catchError(this.formatErrors));
  }

  downloadGet(path: string, body: Object = {}): Observable<HttpResponse<Blob> | Observable<never>> {
    return this.http.get<Blob>(`${environment.api_host}${path}`, { observe: 'response', responseType:'Blob' as 'json' })
      .pipe(catchError(this.formatErrors));
  }

  PostMultipart<T>(path:string, body: Object = {}){   
    return this.http.post<T>(`${environment.api_host}${path}`, body, {observe: 'response'})
    .pipe(catchError(this.formatErrors));
  }

  // postDemandeFormData<T>(path: string, body: Object = {}): Observable<HttpResponse<T> | Observable<never>> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'multipart/form-data',
  //     'Accept': 'multipart/form-data'
  //   });
  //   return this.http.post<T>(`${environment.api_host}${path}`, body, { observe: 'response', headers })
  //     .pipe(catchError(this.formatErrors));
  // }
}