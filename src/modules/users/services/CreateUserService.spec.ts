import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '1933723a2c9279df9a4c13b1aa6b72bc',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '1933723a2c9279df9a4c13b1aa6b72bc',
    });

    expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: '1933723a2c9279df9a4c13b1aa6b72bc',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
