export interface TopHundredResponse {
  id: string,
  name: string,
  symbol: string,
  total_supply: number | null,
  last_updated: Date | string;
  current_price: number,
  market_cap: number,
  price_change_24h: number,
  price_change_percentage_24h: number,
  price_change_percentage_1h_in_currency: number,
  price_change_percentage_24h_in_currency: number,
  price_change_percentage_7d_in_currency: number,
  image: string,
}

export class TopHundred {
  constructor(
    public id: string,
    public name: string,
    public symbol: string,
    public total_supply: number | null,
    public last_updated: Date | string,
    public current_price: number,
    public market_cap: number,
    public price_change_24h: number,
    public price_change_percentage_24h: number,
    public price_change_percentage_1h_in_currency: number,
    public price_change_percentage_24h_in_currency: number,
    public price_change_percentage_7d_in_currency: number,
    public image: string,
  ) { }
}