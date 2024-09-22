import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
  name: string;
  flag: string;
}
