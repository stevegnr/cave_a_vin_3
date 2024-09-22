import { Injectable } from '@nestjs/common';
import { CreateWineInput } from './dto/create-wine.input';
import { UpdateWineInput } from './dto/update-wine.input';
import { Wine } from './entities/wine.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { checkIfEntityExists } from 'src/utils/entity';

@Injectable()
export class WinesService {
  constructor(
    @InjectRepository(Wine)
    private winesRepository: Repository<Wine>,
  ) {}

  create(createWineInput: CreateWineInput) {
    const wine: Wine = this.winesRepository.create(createWineInput);

    return this.winesRepository.save(wine);
  }

  findAll() {
    return this.winesRepository.find();
  }

  findOne(id: number) {
    return checkIfEntityExists(this.winesRepository, id);
  }

  async update(id: number, updateWineInput: UpdateWineInput) {
    await checkIfEntityExists(this.winesRepository, id);

    await this.winesRepository.update(id, updateWineInput);

    const updatedWine: Wine = await this.winesRepository.findOneBy({ id });

    return this.winesRepository.save(updatedWine);
  }

  async remove(id: number) {
    const wine: Wine = await checkIfEntityExists(this.winesRepository, id);
    this.winesRepository.softDelete(id);

    return wine;
  }
}
