// in-memory-data.service.ts
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  transactions: any;
  users: any;
  messbooks: any;
  createDb() {
    const users = [
      { id: 1, username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' },
      { id: 2, username: "jazzi", email: 'jazzi@gmail.com', phone: '45879645', password: '123', profile_picture: 'attachment3.jpg' },
      { id: 3, username: "jone", email: 'jone@gmail.com', phone: '89794654', password: '123', profile_picture: 'attachment3.jpg' },
      { id: 4, username: "farhaz", email: 'farhaz@gmail.com', phone: '745955845', password: '123', profile_picture: 'attachment3.jpg' },
    ];
    const transactions = [
      { id: 1, dateTime: new Date('2024-04-22'), description: 'Transaction 1', amount: 100.00, attachment: 'attachment1.jpg' },
      { id: 2, dateTime: new Date('2024-04-23'), description: 'Transaction 2', amount: 200.00, attachment: 'attachment2.jpg' },
      { id: 3, dateTime: new Date('2024-04-24'), description: 'Transaction 3', amount: 300.00, attachment: 'attachment3.jpg' }
    ];
    const messbooks = [
      { id: 1, title: 'Mess 1', startDate: new Date('2024-04-22'), endDate: new Date('2024-05-23'), attachment: 'attachment3.jpg', status: true },
      { id: 2, title: 'Mess 2', startDate: new Date('2024-05-22'), endDate: new Date('2024-06-23'), attachment: 'attachment3.jpg', status: true },
      { id: 3, title: 'Mess 3', startDate: new Date('2024-06-22'), endDate: new Date('2024-07-22'), attachment: 'attachment3.jpg', status: true },
      { id: 4, title: 'Mess 4', startDate: new Date('2024-07-22'), endDate: new Date('2024-08-22'), attachment: 'attachment3.jpg', status: true },
      { id: 5, title: 'Mess 5', startDate: new Date('2024-08-22'), endDate: new Date('2024-09-22'), attachment: 'attachment3.jpg', status: true },
    ];
    const messbookMembers = [
      { 
        id: 1, 
        messbook: { id: 1, title: 'Mess 1', startDate: new Date('2024-04-22'), endDate: new Date('2024-05-23'), attachment: 'attachment3.jpg', status: true }, 
        members:  [
          { id: 1, username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' },
          { id: 3, username: "jone", email: 'jone@gmail.com', phone: '89794654', password: '123', profile_picture: 'attachment3.jpg' },
        ], 
        invidedBy:  { id: 1, username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' }, 
        isAccepted: true 
      },
      { id: 2, 
        messbook: { id: 1, title: 'Mess 1', startDate: new Date('2024-04-22'), endDate: new Date('2024-05-23'), attachment: 'attachment3.jpg', status: true }, 
        members:  [
          { id: 2, username: "jazzi", email: 'jazzi@gmail.com', phone: '45879645', password: '123', profile_picture: 'attachment3.jpg' },
          { id: 1, username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' }
        ], 
        invidedBy: { id: 1, username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' }, 
        isAccepted: false 
      },
      { id: 3, 
        messbook: { id: 1, title: 'Mess 1', startDate: new Date('2024-04-22'), endDate: new Date('2024-05-23'), attachment: 'attachment3.jpg', status: true }, 
        members: [
          { id: 3, username: "jone", email: 'jone@gmail.com', phone: '89794654', password: '123', profile_picture: 'attachment3.jpg' },
          { id: 1, username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' },
        ], 
        invidedBy: { id: 1, username: "imam", email: 'imam@gmail.com', phone: '123456789', password: '123', profile_picture: 'attachment3.jpg' }, 
        isAccepted: true 
      }
    ];
    return { transactions, users, 'mess-books' : messbooks, 'mess-members' : messbookMembers };
  }
}