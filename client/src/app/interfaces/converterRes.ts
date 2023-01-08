export interface ConverterResponse {
  "id": number;
  "symbol": string,
  "name": string,
  "amount": number,
  "last_updated": Date,
  "quote": {
    [to: string]: {
      "price": number,
      "last_updated": Date;
    };
  };
}