import { Country } from 'src/countries/entities/country.entity';
import { WineColorEnum } from 'src/enums/wine';
export declare class Wine {
    id: number;
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
    country?: Country;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
