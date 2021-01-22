import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PickList } from '../entity/picklist/picklist';


@Injectable()
export abstract class PickListService {
    abstract getCategory(): Observable<HttpResponse<PickList[]> | Observable<never>>;
    abstract getGender(): Observable<HttpResponse<PickList[]> | Observable<never>>;
}