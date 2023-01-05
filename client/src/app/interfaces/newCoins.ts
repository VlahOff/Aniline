export interface NewCoinsResponse {
  id: string,
  name: string,
  symbol: string,
  total_supply: number,
  last_updated: Date | string,
  price: number,
  volume_24h: number,
  volume_change_24h: number,
  percent_change_1h: number,
  percent_change_24h: number,
  percent_change_7d: number,
  image: string;
}

export class NewCoin {
  constructor(
    public id: string,
    public name: string,
    public symbol: string,
    public total_supply: number,
    public last_updated: Date | string,
    public price: number,
    public volume_24h: number,
    public volume_change_24h: number,
    public percent_change_1h: number,
    public percent_change_24h: number,
    public percent_change_7d: number,
    public image: string
  ) { }
}