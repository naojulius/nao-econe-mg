import { Status } from '../status/status';
export class AnnonceReq{
    status: Status;
    price_min: number;
    price_max: number;
    category: string;   
}