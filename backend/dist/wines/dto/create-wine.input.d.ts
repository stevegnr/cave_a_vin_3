import { WineColorEnum } from 'src/enums/wine';
export declare class CreateWineInput {
    name: string;
    appellation: string;
    domain: string;
    region: string;
    year: number;
    color: WineColorEnum;
    price: number;
    biologic: boolean;
    bestAfter: number;
    bestBefore: number;
    quantity: number;
    countryId: number;
}
