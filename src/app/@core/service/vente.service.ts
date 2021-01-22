import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Datatable } from '../entity/datatable/data-table';
import { GetTableDataParam } from '../entity/datatable/get-table-data-param';
import { Vente } from '../entity/vente/vente';
import { VenteReq } from '../entity/vente/vente-req';


@Injectable()
export abstract class VenteService {
    abstract getAll(getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Array<Vente>>> | Observable<never>>;
    abstract getVentesforUnAuthentified(showNotif:boolean, venteReq: VenteReq): Observable<HttpResponse<Vente[]> | Observable<never>>;
}