import { CountriesService } from './countries.service';
import { Country } from './entities/country.entity';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
export declare class CountriesResolver {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    createCountry(createCountryInput: CreateCountryInput): Promise<Country>;
    findAll(): Promise<Country[]>;
    findOne(id: number): Promise<Country>;
    updateCountry(updateCountryInput: UpdateCountryInput): Promise<Country>;
    removeCountry(id: number): Promise<Country>;
}
