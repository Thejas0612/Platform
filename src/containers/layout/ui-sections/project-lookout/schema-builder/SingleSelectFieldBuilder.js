import { BaseFieldBuilder } from "./BaseFieldBuilder";
import { isEqual } from "lodash";

/**
 * @typedef {import( "./FieldFinder").FieldFinder} FieldFinder
 *
 * @typedef {{
 *   label: string
 *   labelClass: string
 *   name: string
 *   options: SingleSelectOption[]
 *   placeholder: string
 *   warningMsg: string
 * }} SingleSelect
 *
 * @typedef {{
 *   greyedOut: boolean
 *   label: string
 *   title: string
 *   value: string
 *   isDisabled?: boolean
 * }} SingleSelectOption
 */
export class SingleSelectFieldBuilder extends BaseFieldBuilder {
  /**
   * @type { (fieldProps: SingleSelect, value: string[], fieldFinder: FieldFinder) => void}
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
    super(workflowBuilder, screenBuilder);

    this.#fieldName = fieldName;
  }

  /**
   *
   * @param onChangeHandler {(fieldProps: SingleSelect, value: string, fieldFinder: FieldFinder) => void}
   * @return {SingleSelectFieldBuilder}
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
    const newField = newFieldFinder.findSingleSelect(screenIndex, this.#fieldName);
    const oldField = oldFieldFinder.findSingleSelect(screenIndex, this.#fieldName);
    const hasChanged = !isEqual(newField.value, oldField.value);

    newField.defaultIds = newField.value;

    hasChanged && this.#onChangeHandler && this.#onChangeHandler(newField, newField.value, newFieldFinder);
  }
}