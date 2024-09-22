import { InputType } from '@nestjs/graphql';
import { WineColorEnum } from 'src/enums/wine';

@InputType()
export class CreateWineInput {
  name: string;
  appellation: string;
  domain: string;
  region: string;
  year: number;
  color: WineColorEnum;
  price: number;
  biologic: boolean;
  bestAfter: number;
  bestBefore: number;
  quantity: number;
}
