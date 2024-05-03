import { BaseFieldBuilder } from "./BaseFieldBuilder";
import { isEqual } from "lodash";

/**
 * @typedef {import( "./FieldFinder").FieldFinder} FieldFinder
 *
 * @typedef {{
 *   name: string
 * }} CardCheckboxGroup
 */
export class CardCheckboxGroupBuilder extends BaseFieldBuilder {
  /**
   * @type { (fieldProps: CardCheckboxGroup, value: string[], fieldFinder: FieldFinder) => void}
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
   * @param onChangeHandler {(fieldProps: CardCheckboxGroup, value: string, fieldFinder: FieldFinder) => void}
   * @return {CardCheckboxGroupBuilder}
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
    const newField = newFieldFinder.findCardCheckboxGroup(screenIndex, this.#fieldName);
    const oldField = oldFieldFinder.findCardCheckboxGroup(screenIndex, this.#fieldName);
    const hasChanged = !isEqual(newField.value, oldField.value);

    newField.selectedId = newField.value;

    hasChanged && this.#onChangeHandler && this.#onChangeHandler(newField, newField.value, newFieldFinder);
  }
}