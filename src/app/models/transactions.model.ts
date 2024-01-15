export interface Transaction {
    id: number;
    dateTime: Date;
    description: String;
    amount: Number;
    attachment?: String; // Optional
  }