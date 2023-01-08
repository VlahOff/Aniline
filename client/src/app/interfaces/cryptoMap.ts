export interface CryptoMapRes {
  id: number,
  name: string,
  slug: string,
  symbol: string,
}

export class CryptoMap {
  constructor(
    public id: number,
    public name: string,
    public slug: string,
    public symbol: string,
  ) { }
}