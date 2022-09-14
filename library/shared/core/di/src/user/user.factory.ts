import {
  GetUserInformationImplementation,
  GetUserInformationUseCase,
  LoginUseCase,
  LoginUseCaseImplementation,
  LogoutUseCase,
  LogoutUseCaseImplementation,
  UpdateUserNameImplementation,
  UpdateUserNameUseCase,
  UserRepository,
} from '@peterpan/shared-core-domain';
import { LocalStorageService, UserAPIService, UserRepositoryImplementation } from '@peterpan/shared-core-repository';

export class UserFactory {
  private readonly userRepository: UserRepository;

  private readonly localStorageService: LocalStorageService;

  private readonly userAPIService: UserAPIService;

  constructor(localStorageService: LocalStorageService, userAPIService: UserAPIService) {
    this.localStorageService = localStorageService;
    this.userAPIService = userAPIService;

    this.userRepository = new UserRepositoryImplementation(this.localStorageService, this.userAPIService);
  }

  getLoginUseCase(): LoginUseCase {
    return new LoginUseCaseImplementation(this.userRepository);
  }

  getGetUserInformationUseCase(): GetUserInformationUseCase {
    return new GetUserInformationImplementation(this.userRepository);
  }

  getUpdateUserNameUseCase(): UpdateUserNameUseCase {
    return new UpdateUserNameImplementation(this.userRepository);
  }

  getLogoutUseCase(): LogoutUseCase {
    return new LogoutUseCaseImplementation(this.userRepository);
  }
}
