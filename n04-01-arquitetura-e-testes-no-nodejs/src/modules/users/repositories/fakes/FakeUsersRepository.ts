import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';

import { uuid } from 'uuidv4';
import User from '../../infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findAllProviders({
    except_user_id,
  }: IFindAllProvidersDTO): Promise<User[]> {
    /*
    // código da aula, vou deixar o meu por enquanto...
    let { users } = this;

    if (except_user_id) {
      users = this.users.filter(user => user.id !== except_user_id);
    }

    return users;
    */

    if (!except_user_id) {
      // acho que nem precisa dessa guard
      return this.users;
    }

    return this.users.filter(user => user.id !== except_user_id);
  }

  public async findById(id: string): Promise<User | undefined> {
    const foundUser = this.users.find(user => user.id === id);

    return foundUser;
  }

  public async findbyEmail(email: string): Promise<User | undefined> {
    const foundUser = this.users.find(user => user.email === email);

    return foundUser;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const foundIndex = this.users.findIndex(
      findUser => findUser.id === user.id,
    );

    this.users[foundIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
