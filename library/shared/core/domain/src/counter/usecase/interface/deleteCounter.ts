import { UseCase } from '../../../common/useCase';

export abstract class DeleteCounterUsecase implements UseCase<void> {
  abstract execute(counterId: string): void;
}
