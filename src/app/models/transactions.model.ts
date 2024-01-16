export interface Transaction {
    id: number;
    dateTime: Date;
    description: string;
    amount: number;
    attachment?: string; // Optional
  }