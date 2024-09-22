import { Injectable } from '@nestjs/common';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { Country } from './entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { checkIfEntityExists } from 'src/utils/entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
  ) {}

  create(createCountryInput: CreateCountryInput) {
    const country: Country =
      this.countriesRepository.create(createCountryInput);

    return this.countriesRepository.save(country);
  }

  findAll() {
    return this.countriesRepository.find();
  }

  findOne(id: number) {
    return checkIfEntityExists(this.countriesRepository, id);
  }

  async update(id: number, updateCountryInput: UpdateCountryInput) {
    await checkIfEntityExists(this.countriesRepository, id);

    await this.countriesRepository.update(id, updateCountryInput);

    const updatedCountry: Country = await this.countriesRepository.findOneBy({
      id,
    });

    return this.countriesRepository.save(updatedCountry);
  }

  async remove(id: number) {
    const country: Country = await checkIfEntityExists(
      this.countriesRepository,
      id,
    );
    this.countriesRepository.softDelete(id);

    return country;
  }
}
