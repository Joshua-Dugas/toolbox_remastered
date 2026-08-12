import { Controller, Get } from '@nestjs/common';

@Controller('expenses')
export class ExpenseController {
  @Get()
  getExpenses() {
    return;
  }
}
