import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from '../Entities/Expenses';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepo: Repository<Expense>,
  ) {}

  findAll(): Promise<Expense[]> {
    return this.expenseRepo.find();
  }

  findRecord(id: number): Promise<Expense | null> {
    return this.expenseRepo.findOneBy({ id });
  }

  create(data: Partial<Expense>): Promise<Expense> {
    const expense = this.expenseRepo.create(data);
    return this.expenseRepo.save(expense);
  }

  async update(id: number, data: Partial<Expense>): Promise<Expense | null> {
    await this.expenseRepo.update(id, data);
    return this.findRecord(id);
  }

  async delete(id: number): Promise<void> {
    await this.expenseRepo.delete(id);
  }
}
