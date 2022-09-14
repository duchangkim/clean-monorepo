import { UseCase } from '../../../common/useCase';

export abstract class LogoutUseCase implements UseCase<void> {
  abstract execute(): void;
}
