import { BaseFieldBuilder } from "./BaseFieldBuilder";
import { isEqual } from "lodash";

/**
 * @typedef {import( "./FieldFinder").FieldFinder} FieldFinder
 *
 * @typedef {{
 *   data: TableInputData[][]
 *   label: string
 *   value: Value
 * }} TableInput
 *
 * @typedef {{
 *   align?: string
 *   label: string
 *   name: string
 *   textStyles?: TableInputDataTextStyles
 *   type: string
 *   required?: boolean
 *   options?: TableInputDataOption[]
 * }} TableInputData
 *
 * @typedef {{
 *   fontSize: string
 * }} TableInputDataTextStyles
 *
 * @typedef {{
 *   label: string
 *   value: string
 * }} TableInputDataOption
 */
export class TableInputBuilder extends BaseFieldBuilder {
  /**
   * @type { (fieldProps: TableInput, value: string[], fieldFinder: FieldFinder) => void}
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
   * @param onChangeHandler {(fieldProps: TableInput, value: { [key: string]: string | number}) => void}
   * @return {TableInputBuilder}
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
   * @param newFieldFinder {FieldFinder}
   * @param oldFieldFinder {FieldFinder}
   */
  finalBuild(screenIndex, newFieldFinder, oldFieldFinder) {
    const newField = newFieldFinder.findTableInput(screenIndex, this.#fieldName);
    const oldField = oldFieldFinder.findTableInput(screenIndex, this.#fieldName);
    const hasChanged = !isEqual(newField.value, oldField.value);

    hasChanged && this.#onChangeHandler && this.#onChangeHandler(newField, newField.value, newFieldFinder);
  }
}