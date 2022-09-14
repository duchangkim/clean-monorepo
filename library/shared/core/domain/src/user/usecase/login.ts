import { LoginCommand } from '../command/loginCommand';
import { User } from '../entity/user.entity';
import { UserRepository } from '../userRepository.interface';
import { LoginUseCase } from './interface/login';

export class LoginUseCaseImpl implements LoginUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(command: LoginCommand): Promise<User> {
    const user = await this.userRepository.authenticate(command.id, command.password);
    this.userRepository.storeAccessToken(user.accessToken);

    return user;
  }
}
