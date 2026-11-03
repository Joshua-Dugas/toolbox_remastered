import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './Entities/Expenses';
import { ExpenseController } from './Controllers/ExpenseController';
import { ExpenseService } from './Services/ExpenseService';
//DO NOT FORGET TO REGISTER YOUR CONTROLLERS AND SERVICES FOOL
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'data.db',
      entities: [Expense],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Expense]),
  ],
  controllers: [AppController, ExpenseController],
  providers: [AppService, ExpenseService],
})
export class AppModule {}
