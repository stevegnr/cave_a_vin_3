import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWineInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
