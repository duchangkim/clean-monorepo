import { Usecase } from 'package/core/domain/src/common/usecase';
import { Counter } from 'package/core/domain/src/counter/entity/counter.entity';

export abstract class UpdateDecrementAmountUsecase implements Usecase<void> {
  abstract execute(updatedCounter: Counter): void;
}
