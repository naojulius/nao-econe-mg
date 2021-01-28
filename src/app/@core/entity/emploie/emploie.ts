import { ContractEnum } from "../../Enumeration/contract-enum";
import { StateEnum } from "../../enumeration/state-enum";
import { User } from "../User/user";
import { EmploieMission } from "./emploie-mission";
import { EmploieProfil } from "./emploie-profil";


export class Emploie{
    id: string | number;
    poste: string;
    description: string;
    salary: number;
    society: string;
    contract: ContractEnum;
    date: Date;
    societyDescription: string;
    mission: Array<EmploieMission>;
    profil: Array<EmploieProfil>;
    owner: User;
    followers: Array<User>;
    Status: StateEnum; 
    isHeart: Boolean; 
}