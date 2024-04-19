export class SingleSelectFieldBuilder {
  // TODO: better type fieldProps.
  /**
   * @type { (fieldProps: {}, value: string[], fieldFinder: FieldFinder) => void}
   */
  #onChangeHandler;

  /**
   * @type {string}
   */
  #fieldName;

  /**
   * @type {WorkflowBuilder}
   */
  #workflowBuilder;

  /**
   *
   * @param fieldName {string}
   * @param workflowBuilder {WorkflowBuilder}
   * @param workflowBuilder {ScreenBuilder}
   */
  constructor(fieldName, workflowBuilder) {
    this.#fieldName = fieldName;
    this.#workflowBuilder = workflowBuilder;
  }

  /**
   *
   * @param onChangeHandler {(fieldProps: any, value: string[]) => void}
   * @return {SingleSelectFieldBuilder}
   */
  onChange(onChangeHandler) {
    if (this.onChangeHandler != null) {
      throw new Error("The 'onChange' function was called 2 or more times.");
    }

    this.#onChangeHandler = onChangeHandler;
    return this;
  }

  /**
   * @param screenIndex {number}
   * @return {ScreenBuilder}
   */
  screen(screenIndex) {
    return this.#workflowBuilder.screen(screenIndex);
  }

  /**
   * @param screenIndex {index}
   * @param newScreenSchema {object}
   * @return {object}
   */
  build(screenIndex, newScreenSchema) {
    return this.#workflowBuilder.finalBuild(screenIndex, newScreenSchema);
  }

  /**
   * @param screenIndex {number}
   * @param fieldFinder {FieldFinder}
   */
  finalBuild(screenIndex, fieldFinder) {
    const field = fieldFinder.findSingleSelect(screenIndex, this.#fieldName)

    field.defaultIds = field.value;

    this.#onChangeHandler && this.#onChangeHandler(field, field.value, fieldFinder);
  }
}