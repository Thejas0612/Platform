/**
 * @typedef {import( "../../../../../components/shared/msol-tile-or-thumbnail/MsolTileOrThumbnail").MsolTileOrThumbnailProps} MsolTileOrThumbnailProps
 * @typedef {import( "./FieldFinder").FieldFinder} FieldFinder
 */
import { BaseFieldBuilder } from "./BaseFieldBuilder";
import { isEqual } from "lodash";

export class TileThumbnailFieldBuilder extends BaseFieldBuilder {
  /**
   * @type { (fieldProps: MsolTileOrThumbnailProps, value: string[], fieldFinder: FieldFinder) => void}
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
   * @param onChangeHandler {(fieldProps: MsolTileOrThumbnailProps, value: string[]) => void}
   * @return {TileThumbnailFieldBuilder}
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
    const newField = newFieldFinder.findTileThumbnail(screenIndex, this.#fieldName);
    const oldField = oldFieldFinder.findTileThumbnail(screenIndex, this.#fieldName);
    const hasChanged = !isEqual(newField.value, oldField.value);

    newField.defaultIds = newField.value;

    hasChanged && this.#onChangeHandler && this.#onChangeHandler(newField, newField.value, newFieldFinder);
  }
}