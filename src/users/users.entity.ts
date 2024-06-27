import {
  Entity,
  Column,
  AfterRemove,
  AfterUpdate,
  PrimaryGeneratedColumn,
} from 'typeorm';

 @Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
