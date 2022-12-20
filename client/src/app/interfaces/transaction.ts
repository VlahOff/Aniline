export interface Transaction {
  "coinId": string,
  "coinPrice": number,
  "quantity": number;
}

export interface TransactionDetailed {
  "coinId": string,
  "coinPrice": number,
  "quantity": number,

  'id': string,
  'symbol': string,
  'name': string,
  'image': string,
  'current_price': number,
  'price_change_24h': number,
  'price_change_percentage_24h': number
}