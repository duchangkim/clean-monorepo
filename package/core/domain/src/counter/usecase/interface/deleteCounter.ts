import { Usecase } from 'package/core/domain/src/common/usecase';

export abstract class DeleteCounterUsecase implements Usecase<void> {
  abstract execute(counterId: string): void;
}
