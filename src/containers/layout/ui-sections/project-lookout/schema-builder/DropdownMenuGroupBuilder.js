import { BaseFieldBuilder } from "./BaseFieldBuilder";
import { isEqual } from "lodash";

/**
 * @typedef {import( "./FieldFinder").FieldFinder} FieldFinder
 *
 * @typedef {{
 *   name: string
 * }} DropdownMenuGroup
 */
export class DropdownMenuGroupBuilder extends BaseFieldBuilder {
  /**
   * @type { (fieldProps: DropdownMenuGroup, value: string[], fieldFinder: FieldFinder) => void}
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
   * @param onChangeHandler {(fieldProps: DropdownMenuGroup, value: string, fieldFinder: FieldFinder) => void}
   * @return {DropdownMenuGroupBuilder}
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
    const newField = newFieldFinder.findDropdownMenuGroup(screenIndex, this.#fieldName);
    const oldField = oldFieldFinder.findDropdownMenuGroup(screenIndex, this.#fieldName);
    const hasChanged = !isEqual(newField.value, oldField.value);

    hasChanged && this.#onChangeHandler && this.#onChangeHandler(newField, newField.value, newFieldFinder);
  }
}