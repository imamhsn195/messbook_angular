// in-memory-data.service.ts
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  transactions: any;
  createDb() {
    const transactions = [
      { id: 1, dateTime: new Date('2024-04-22'), description: 'Transaction 1', amount: 100.00, attachment: 'attachment1.jpg' },
      { id: 2, dateTime: new Date('2024-04-22'), description: 'Transaction 2', amount: 200.00, attachment: 'attachment2.jpg' },
      { id: 3, dateTime: new Date('2024-04-22'), description: 'Transaction 3', amount: 300.00, attachment: 'attachment3.jpg' }
    ];
    return { transactions };
  }
}