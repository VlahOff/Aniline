export interface CoinsViewNewResponse {
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