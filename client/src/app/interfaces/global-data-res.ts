export interface GlobalDataResponse {
  total_market_cap: number,
  market_cap_change_percentage_24h_usd: number,
  trading_volume: number,
  btc_dominance: number | undefined,
  number_of_coins: number;
}

export class GlobalData {
  constructor(
    public total_market_cap: number,
    public market_cap_change_percentage_24h_usd: number,
    public trading_volume: number,
    public btc_dominance: number,
    public number_of_coins: number
  ) { }
}