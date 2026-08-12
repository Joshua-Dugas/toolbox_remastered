import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  type: string = '';

  @Column()
  description: string = '';

  @Column()
  amount: number = 0;

  @Column()
  Account: string = '';
}
