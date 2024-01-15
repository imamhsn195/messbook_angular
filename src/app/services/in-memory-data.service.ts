// in-memory-data.service.ts
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  transactions: any;
  users: any;
  createDb() {
    const transactions = [
      { id: 1, dateTime: new Date('2024-04-22'), description: 'Transaction 1', amount: 100.00, attachment: 'attachment1.jpg' },
      { id: 2, dateTime: new Date('2024-04-22'), description: 'Transaction 2', amount: 200.00, attachment: 'attachment2.jpg' },
      { id: 3, dateTime: new Date('2024-04-22'), description: 'Transaction 3', amount: 300.00, attachment: 'attachment3.jpg' }
    ];
    const users = [
      { id: 1, username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' },
      { id: 2, username: "jazzi", email: 'jazzi@gmail.com', phone: '45879645', password: '123', profile_picture: 'attachment3.jpg' },
      { id: 3, username: "jone", email: 'jone@gmail.com', phone: '89794654', password: '123', profile_picture: 'attachment3.jpg' },
      { id: 4, username: "farhaz", email: 'farhaz@gmail.com', phone: '745955845', password: '123', profile_picture: 'attachment3.jpg' },
    ];
    return { transactions, users };
  }
}