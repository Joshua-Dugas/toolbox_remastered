import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type: string = '';

  @Column()
  description: string = '';

  @Column()
  amount: number = 0;

  @Column()
  account: string = '';
}
