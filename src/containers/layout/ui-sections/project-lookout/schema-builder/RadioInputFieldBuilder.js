import { BaseFieldBuilder } from "./BaseFieldBuilder";

/**
 * @typedef {import( "./FieldFinder").FieldFinder} FieldFinder
 *
 * @typedef {{
 *   name: string
 * }} RadioSelect
 */
export class RadioInputFieldBuilder extends BaseFieldBuilder {
  /**
   * @type { (fieldProps: RadioSelect, value: string[], fieldFinder: FieldFinder) => void}
   */
  #onChangeHandler;

  /**
   * @type {string}
   */
  #fieldName;

  /**
   *
   * @param fieldName {string}
   * @param workflowBuilder {WorkflowBuilder}
   * @param screenBuilder {ScreenBuilder}
   */
  constructor(fieldName, workflowBuilder, screenBuilder) {
    super(workflowBuilder, screenBuilder)

    this.#fieldName = fieldName;
  }

  /**
   *
   * @param onChangeHandler {(fieldProps: RadioSelect, value: string, fieldFinder: FieldFinder) => void}
   * @return {RadioInputFieldBuilder}
   */
  onChange(onChangeHandler) {
    if (this.#onChangeHandler != null) {
      throw new Error("The 'onChange' function was called 2 or more times.");
    }

    this.#onChangeHandler = onChangeHandler;
    return this;
  }

  /**
   * @param screenIndex {number}
   * @param fieldFinder {FieldFinder}
   */
  finalBuild(screenIndex, fieldFinder) {
    const field = fieldFinder.findRadioSelect(screenIndex, this.#fieldName)

    this.#onChangeHandler && this.#onChangeHandler(field, field.value, fieldFinder);
  }
}