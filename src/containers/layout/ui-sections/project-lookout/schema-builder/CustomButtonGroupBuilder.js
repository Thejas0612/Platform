import { BaseFieldBuilder } from "./BaseFieldBuilder";
import { isEqual } from "lodash";

/**
 * @typedef {import( "./FieldFinder").FieldFinder} FieldFinder
 *
 * @typedef {{
 *   defaultIds: string[]
 *   label: string
 *   multiple: boolean
 *   options: CustomButtonGroupOption[]
 * }} CustomButtonGroup
 *
 * @typedef {{
 *   id: string
 *   label: string
 * }} CustomButtonGroupOption
 */
export class CustomButtonGroupBuilder extends BaseFieldBuilder {
  /**
   * @type { (fieldProps: CustomButtonGroup, value: string, fieldFinder: FieldFinder) => void}
   */
  #onChangeHandler;

  /**
   * @type {string}
   */
  #fieldName;

  /**
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
   * @param onChangeHandler {(field: CustomButtonGroup, value: string, fieldFinder: FieldFinder) => void}
   * @return {CustomButtonGroupBuilder}
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
    const newField = newFieldFinder.findCustomButtonGroup(screenIndex, this.#fieldName);
    const oldField = oldFieldFinder.findCustomButtonGroup(screenIndex, this.#fieldName);
    const hasChanged = !isEqual(newField.value, oldField.value);

    newField.defaultId = newField.value;

    hasChanged && this.#onChangeHandler && this.#onChangeHandler(newField, newField.value, newFieldFinder);
  }
}
