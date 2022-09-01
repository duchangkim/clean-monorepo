import { Usecase } from '@domain/common/usecase';

export abstract class DeleteCounterUsecase implements Usecase<void> {
  abstract execute(counterId: string): void;
}
