import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of, Subject } from 'rxjs';

export class ApiTableDataSource extends LocalDataSource {
    constructor(data?: any[]){
        super(data)
    }
    private total: number = 0;
    pageChangesSuject: Subject<number> = new Subject();
    setTotal(value: number){
        this.total = value;
    }
    count(): number {
        return this.total;
    }
    onPageChages():Observable<number>{
        return this.pageChangesSuject.asObservable();
    }
    setPage(page: number, doEmit?: boolean): LocalDataSource{
        this.pageChangesSuject.next(page);
        return super.setPage(page, doEmit);
    }
}