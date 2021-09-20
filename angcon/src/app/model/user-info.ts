export class UserInfo {
    userID: number;
  username: string;
  password: string;
  email: string;

  constructor(userID: number, username: string, password: string, email: string) {
    this.userID = userID
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
