
import { Images } from '../images/images';
import { User } from '../User/user';
import { PickList } from '../picklist/picklist';

export class  Vente{
    id: string | number;
    title: string;
    subTitle: string;
    reference: string;
    createdAt: Date;
    category: PickList;
    owner: User;
    marque: string;
    description: string;
    price: number;
    //followers: Array<FollowersReq>;
    images: Array<Images>;
    //quantity: Quantity;
}