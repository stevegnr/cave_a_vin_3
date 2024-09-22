import { registerEnumType } from '@nestjs/graphql';

export enum WineColorEnum {
  red = 'red',
  white = 'white',
  pink = 'pink',
  sparkling = 'sparkling',
}

registerEnumType(WineColorEnum, { name: 'WineColorEnum' });
