
import { Images } from '../images/images';
import { PickList } from '../picklist/picklist';
import { Status } from '../status/status';
import { User } from '../User/user';


export class  Annonce{
    id: string | number;
    title: string;
    reference: string;
    createdAt: Date;
    category: PickList;
    owner: User;
    marque: string;
    description: string;
    price: number;
    followers: Array<User>;
    images: Array<Images>;
    status: Status
}