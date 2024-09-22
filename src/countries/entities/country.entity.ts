import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Wine } from 'src/wines/entities/wine.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Country {
  // Propriétés
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  name: string;

  @Column()
  flag: string;

  // Relations
  // Vins
  @OneToMany(() => Wine, (wine) => wine.country /* , { nullable: true } */)
  wines?: Wine[];

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
