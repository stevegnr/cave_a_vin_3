import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Country } from 'src/countries/entities/country.entity';
import { WineColorEnum } from 'src/enums/wine';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Wine {
  // Propriétés
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  name: string;

  @Column()
  appellation: string;

  @Column()
  domain: string;

  @Column()
  region: string;

  @Column()
  year: number;

  @Column()
  color: WineColorEnum;

  @Column()
  price: number;

  @Column()
  biologic: boolean;

  @Column()
  bestAfter: number;

  @Column()
  bestBefore: number;

  @Column()
  quantity: number;

  // Relations

  // Pays
  @ManyToOne(() => Country, (country) => country.wines)
  country?: Country;

  // user:User

  // Timestamp
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Field({ description: 'Date de création' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  @Field({ description: 'Date de mise à jour' })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
