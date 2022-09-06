export const COUNTER_IDENTIFIER = {
  CreateCounterUsecase: Symbol.for('createCounterUsecase'),
  DeleteCounterUsecase: Symbol.for('deleteCounterUsecase'),
  GetAllCountersUsecase: Symbol.for('getAllCountersUsecase'),
  FilterCountersByLabelUsecase: Symbol.for('filterCountersUsecase'),
  IncrementCounterUsecase: Symbol.for('incrementCounterUsecase'),
  DecrementCounterUsecase: Symbol.for('decrementCounterUsecase'),
  UpdateIncrementAmountUsecase: Symbol.for('updateIncrementAmountUsecase'),
  UpdateDecrementAmountUsecase: Symbol.for('updateDecrementAmountUsecase'),
  AssignCounterLabelUsecase: Symbol.for('assignCounterLabelUsecase'),
};
