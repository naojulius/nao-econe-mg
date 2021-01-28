import { ContractEnum } from "../../Enumeration/contract-enum";
import { Status } from "../status/status";

export class JobReq{
    status: Status;
    jobPoste: string;
    jobContract: ContractEnum;
}