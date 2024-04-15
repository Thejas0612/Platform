import { WorkflowBuilder } from "./WorkflowBuilder";

/**
 * @typedef {import( "../../../../../components/shared/msol-tile-or-thumbnail/MsolTileOrThumbnail").MsolTileOrThumbnailProps} MsolTileOrThumbnailProps
 */

const TILE_THUMBNAIL_TYPE = "TILE_THUMBNAIL";

export class TileThumbnailFieldBuilder {
  /**
   * @type { (fieldProps: MsolTileOrThumbnailProps, value: string[]) => void}
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
   * @param onChangeHandler {(fieldProps: MsolTileOrThumbnailProps, value: string[]) => void}
   * @return {TileThumbnailFieldBuilder}
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
      return _.name === this.#fieldName && _.type === TILE_THUMBNAIL_TYPE;
    });

    if (field == null) {
      throw new Error(`Could not find field with '${this.#fieldName}' name and ${TILE_THUMBNAIL_TYPE} type.`);
    }

    field.defaultIds = field.value;

    this.#onChangeHandler && this.#onChangeHandler(field, field.value);
  }
}