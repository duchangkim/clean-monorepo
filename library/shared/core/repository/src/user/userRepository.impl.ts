import { User, UserRepository } from '@peterpan/shared-core-domain';
import { LocalStorageService } from '../common';
import { UserAPIService } from './userAPIService.interface';

export class UserRepositoryImplementation implements UserRepository {
  readonly ACCESS_TOKEN_KEY = 'react_example_access_token';

  private readonly localStorageService: LocalStorageService;

  private readonly UserAPIService: UserAPIService;

  constructor(localStorageService: LocalStorageService, UserAPIService: UserAPIService) {
    this.localStorageService = localStorageService;
    this.UserAPIService = UserAPIService;
  }

  authenticate(id: string, password: string): Promise<User> {
    return this.UserAPIService.authenticate(id, password);
  }

  getUserInformation(accessToken: string): Promise<User> {
    return this.UserAPIService.getUserInformation(accessToken);
  }

  updateUserName(accessToken: string, name: string): Promise<User> {
    return this.UserAPIService.updateUserName(accessToken, name);
  }

  storeAccessToken(token: string): void {
    this.localStorageService.set(this.ACCESS_TOKEN_KEY, token);
  }

  getAccessToken(): string {
    return this.localStorageService.get(this.ACCESS_TOKEN_KEY);
  }

  removeAccessToken(): void {
    this.localStorageService.remove(this.ACCESS_TOKEN_KEY);
  }
}
