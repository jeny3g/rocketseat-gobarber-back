import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '1933723a2c9279df9a4c13b1aa6b72bc',
    });

    await expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '1933723a2c9279df9a4c13b1aa6b72bc',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: '1933723a2c9279df9a4c13b1aa6b72bc',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
