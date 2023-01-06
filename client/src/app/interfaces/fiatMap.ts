export interface FiatMapRes {
  id: number,
  name: string,
  sign: string,
  symbol: string;
}

export class FiatMap {
  constructor(
    public id: number,
    public name: string,
    public sign: string,
    public symbol: string
  ) { }
}