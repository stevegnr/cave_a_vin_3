import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';
export declare class CountriesService {
    private countriesRepository;
    constructor(countriesRepository: Repository<Country>);
    create(createCountryInput: CreateCountryInput): Promise<Country>;
    findAll(): Promise<Country[]>;
    findOne(id: number): Promise<Country>;
    update(id: number, updateCountryInput: UpdateCountryInput): Promise<Country>;
    remove(id: number): Promise<Country>;
}
