import { UserRepository } from '../userRepository.interface';
import { LogoutUseCase } from './interface/logout';

export class LogoutUseCaseImplementation implements LogoutUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute(): void {
    this.userRepository.removeAccessToken();
  }
}
