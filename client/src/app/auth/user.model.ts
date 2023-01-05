export class User {
  constructor(
    public email: string,
    public username: string,
    public userId: string,
    private accessToken: string,
    private expiresIn: Date
  ) { }

  get token() {
    if (!this.expiresIn || new Date > this.expiresIn) {
      return null;
    }
    return this.accessToken;
  }
}