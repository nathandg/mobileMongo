import User from "../models/user.model";

class UserController {

  private users: User[] = [];

  public addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  public getUsers(): User[] {
    return this.users;
  }
}

export default UserController;