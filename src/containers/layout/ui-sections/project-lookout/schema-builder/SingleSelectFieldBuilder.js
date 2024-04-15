import { WorkflowBuilder } from "./WorkflowBuilder";

const SINGLE_SELECT_TYPE = "SINGLE_SELECT";

export class SingleSelectFieldBuilder {
  /**
   * @type { (fieldProps: {}, value: string[]) => void}
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
   * @param screen {any}
   */
  finalBuild(screen) {
    const field = screen.fields.find((_) => {
      return _.name === this.#fieldName && _.type === SINGLE_SELECT_TYPE;
    });

    if (field == null) {
      throw new Error(`Could not find field with '${this.#fieldName}' name and ${SINGLE_SELECT_TYPE} type.`);
    }

    field.defaultIds = field.value;

    this.#onChangeHandler && this.#onChangeHandler(field, field.value);
  }
}