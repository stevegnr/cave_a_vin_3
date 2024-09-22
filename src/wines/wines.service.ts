import { Injectable } from '@nestjs/common';
import { CreateWineInput } from './dto/create-wine.input';
import { UpdateWineInput } from './dto/update-wine.input';

@Injectable()
export class WinesService {
  create(createWineInput: CreateWineInput) {
    return 'This action adds a new wine';
  }

  findAll() {
    return `This action returns all wines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wine`;
  }

  update(id: number, updateWineInput: UpdateWineInput) {
    return `This action updates a #${id} wine`;
  }

  remove(id: number) {
    return `This action removes a #${id} wine`;
  }
}
