export interface ChartData {
  time: number,
  price: number;
}

export interface DetailedCoinDataResponse {
  id: string,
  symbol: string,
  name: string,
  image: {
    thumb: string,
    small: string,
    large: string;
  },
  current_price: number,
  market_cap: number,
  total_volume: number,
  high_24h: number,
  low_24h: number,
  price_change_24h: number,
  price_change_percentage_24h: number,
  market_cap_change_24h: number,
  market_cap_change_percentage_24h: number,
  circulating_supply: number,
  total_supply: number,
  max_supply: number,
  ath: number,
  ath_change_percentage: number,
  ath_date: Date,
  atl: number,
  atl_change_percentage: number,
  atl_date: Date,
  last_updated: Date,
  chartData: ChartData[];
}

export class DetailedCoinData {
  constructor(
    public id: string,
    public symbol: string,
    public name: string,
    public image: string,
    public current_price: number,
    public market_cap: number,
    public total_volume: number,
    public high_24h: number,
    public low_24h: number,
    public price_change_24h: number,
    public price_change_percentage_24h: number,
    public market_cap_change_24h: number,
    public market_cap_change_percentage_24h: number,
    public circulating_supply: number,
    public total_supply: number,
    public max_supply: number,
    public ath: number,
    public ath_change_percentage: number,
    public ath_date: Date,
    public atl: number,
    public atl_change_percentage: number,
    public atl_date: Date,
    public last_updated: Date
  ) { }
}