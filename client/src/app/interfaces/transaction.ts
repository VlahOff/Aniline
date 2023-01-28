export interface Transaction {
  coinId: string,
  boughtPrice: number,
  quantity: number;
}

export class Transaction {
  constructor(
    public coinId: string,
    public boughtPrice: number,
    public quantity: number
  ) { }
}

export interface TransactionDetailed {
  coinId: string,
  boughtPrice: number,
  quantity: number,
  transactionId: string,
  value: number,
  pnlValue: number,
  pnlPercent: number,
  id: string,
  symbol: string,
  name: string,
  image: string,
  current_price: number,
  price_change_24h: number,
  price_change_percentage_24h: number;
}

// current_price * quantity - (coinPrice * quantity)) / (coinPrice * quantity) * 100