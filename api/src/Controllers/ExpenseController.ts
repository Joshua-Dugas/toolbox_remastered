import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { ExpenseService } from '../Services/ExpenseService';
import { Expense } from '../Entities/Expenses';
//import { Logger } from 'tslog';

//const log = new Logger({ minLevel: "DEBUG" });

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @Get(':id')
  async findRecord(@Param('id', ParseIntPipe) id: number) {
    const expense = await this.expenseService.findRecord(id);
    if (!expense) throw new NotFoundException(`Expense #${id} not found`);
    return expense;
  }

  @Post()
  create(@Body() body: Partial<Expense>) {
    return this.expenseService.create(body);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() body: Partial<Expense>) {
    const updated = await this.expenseService.update(id, body);
    if (!updated) throw new NotFoundException(`Expense #${id} not found`);
    return updated;
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.expenseService.delete(id);
    return { deleted: true };
  }
}
