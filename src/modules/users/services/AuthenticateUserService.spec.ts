import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '1933723a2c9279df9a4c13b1aa6b72bc',
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@gmail.com',
      password: '1933723a2c9279df9a4c13b1aa6b72bc',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
});
