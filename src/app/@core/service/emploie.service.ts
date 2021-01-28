import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Datatable } from '../entity/datatable/data-table';
import { GetTableDataParam } from '../entity/datatable/get-table-data-param';
import { Emploie } from '../entity/emploie/emploie';
import { JobReq } from '../entity/emploie/emploie-req';


@Injectable()
export abstract class EmploieService {
    abstract getAll(getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Array<Emploie>>> | Observable<never>>;
    abstract getVentesforUnAuthentified(showNotif:boolean, jobReq: JobReq): Observable<HttpResponse<Emploie[]> | Observable<never>>;
}