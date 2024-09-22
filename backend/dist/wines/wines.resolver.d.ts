import { WinesService } from './wines.service';
import { Wine } from './entities/wine.entity';
import { CreateWineInput } from './dto/create-wine.input';
import { UpdateWineInput } from './dto/update-wine.input';
export declare class WinesResolver {
    private readonly winesService;
    constructor(winesService: WinesService);
    createWine(createWineInput: CreateWineInput): Promise<Wine>;
    findAll(): Promise<Wine[]>;
    findOne(id: number): Promise<Wine>;
    updateWine(updateWineInput: UpdateWineInput): Promise<Wine>;
    removeWine(id: number): Promise<Wine>;
}
