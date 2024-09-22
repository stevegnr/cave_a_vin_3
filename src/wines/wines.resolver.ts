import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WinesService } from './wines.service';
import { Wine } from './entities/wine.entity';
import { CreateWineInput } from './dto/create-wine.input';
import { UpdateWineInput } from './dto/update-wine.input';

@Resolver(() => Wine)
export class WinesResolver {
  constructor(private readonly winesService: WinesService) {}

  @Mutation(() => Wine)
  createWine(@Args('createWineInput') createWineInput: CreateWineInput) {
    return this.winesService.create(createWineInput);
  }

  @Query(() => [Wine], { name: 'wines' })
  findAll() {
    return this.winesService.findAll();
  }

  @Query(() => Wine, { name: 'wine' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.winesService.findOne(id);
  }

  @Mutation(() => Wine)
  updateWine(@Args('updateWineInput') updateWineInput: UpdateWineInput) {
    return this.winesService.update(updateWineInput.id, updateWineInput);
  }

  @Mutation(() => Wine)
  removeWine(@Args('id', { type: () => Int }) id: number) {
    return this.winesService.remove(id);
  }
}
