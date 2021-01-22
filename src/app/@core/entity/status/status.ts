import { StateEnum } from "../../enumeration/state-enum";


export class Status{
    id: string | number;
    isPayed: boolean;
    isExpired: boolean;
    text: StateEnum;
}