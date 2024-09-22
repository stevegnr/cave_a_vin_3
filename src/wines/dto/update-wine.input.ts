import { CreateWineInput } from './create-wine.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWineInput extends PartialType(CreateWineInput) {
  @Field(() => Int)
  id: number;
}
