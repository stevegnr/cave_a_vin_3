import { CreateWineInput } from './dto/create-wine.input';
import { UpdateWineInput } from './dto/update-wine.input';
import { Wine } from './entities/wine.entity';
import { Repository } from 'typeorm';
export declare class WinesService {
    private winesRepository;
    constructor(winesRepository: Repository<Wine>);
    create(createWineInput: CreateWineInput): Promise<Wine>;
    findAll(): Promise<Wine[]>;
    findOne(id: number): Promise<Wine>;
    update(id: number, updateWineInput: UpdateWineInput): Promise<Wine>;
    remove(id: number): Promise<Wine>;
}
