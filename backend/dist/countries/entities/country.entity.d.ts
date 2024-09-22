import { Wine } from 'src/wines/entities/wine.entity';
export declare class Country {
    id: number;
    name: string;
    flag: string;
    wines?: Wine[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
