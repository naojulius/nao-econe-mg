import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Annonce } from '../entity/annonce/annonce';
import { AnnonceReq } from '../entity/annonce/annonce.req';
import { Datatable } from '../entity/datatable/data-table';
import { GetTableDataParam } from '../entity/datatable/get-table-data-param';
import { Vente } from '../entity/vente/vente';
import { VenteReq } from '../entity/vente/vente-req';


@Injectable()
export abstract class AnnonceService {
    abstract getAll(getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Array<Annonce>>> | Observable<never>>;
    abstract getAnnoncesforUnAuthentified(showNotif:boolean, annonceReq: AnnonceReq): Observable<HttpResponse<Annonce[]> | Observable<never>>;
}