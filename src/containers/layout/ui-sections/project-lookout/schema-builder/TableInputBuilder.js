export class TableInputBuilder {
  /**
   * @type { (fieldProps: MsolTileOrThumbnailProps, value: string[], fieldFinder: FieldFinder) => void}
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
   */
  constructor(fieldName, workflowBuilder) {
    this.#fieldName = fieldName;
    this.#workflowBuilder = workflowBuilder;
  }

  /**
   *
   // * @param onChangeHandler {(fieldProps: MsolTileOrThumbnailProps, value: string[]) => void}
   * @return {TableInputBuilder}
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
    const field = fieldFinder.findTableInput(screenIndex, this.#fieldName )

    this.#onChangeHandler && this.#onChangeHandler(field, field.value, fieldFinder);
  }
}