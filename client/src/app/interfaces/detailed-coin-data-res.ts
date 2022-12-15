export interface DetailedCoinDataResponse {
  id: string,
  symbol: string,
  name: string,
  image: {
    small: string,
    thumb: string,
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
  last_updated: Date;
}