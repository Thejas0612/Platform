/**
 *  @typedef {import('./TileThumbnailFieldBuilder').TileThumbnailFieldBuilder} TileThumbnailFieldBuilder
 *  @typedef {import('./TableInputBuilder').TableInputBuilder} TableInputBuilder
 *  @typedef {import('./SingleSelectFieldBuilder').SingleSelectFieldBuilder} SingleSelectFieldBuilder
 */
export class BaseFieldBuilder {
  /**
   * @type {WorkflowBuilder}
   */
  #workflowBuilder;

  /**
   * @type {ScreenBuilder}
   */
  #screenBuilder;

  /**
   *
   * @param workflowBuilder {WorkflowBuilder}
   * @param screenBuilder {ScreenBuilder}
   */
  constructor(workflowBuilder, screenBuilder) {
    this.#workflowBuilder = workflowBuilder;
    this.#screenBuilder = screenBuilder
  }

  /**
   * @param screenIndex {number}
   * @return {ScreenBuilder}
   */
  screen(screenIndex) {
    return this.#workflowBuilder.screen(screenIndex);
  }

  /**
   * @param screenIndex {number}
   * @param newScreenSchema {object}
   * @return {object}
   */
  build(screenIndex, newScreenSchema) {
    return this.#workflowBuilder.finalBuild(screenIndex, newScreenSchema);
  }

  /**
   *
   * @param name {string}
   * @return {TileThumbnailFieldBuilder}
   */
  tileThumbnail(name) {
    return this.#screenBuilder.tileThumbnail(name);
  }

  /**
   *
   * @param name {string}
   * @return {TableInputBuilder}
   */
  tableInput(name) {
    return this.#screenBuilder.tableInput(name);
  }

  /**
   *
   * @param name {string}
   * @return {SingleSelectFieldBuilder}
   */
  singleSelect(name) {
    return this.#screenBuilder.singleSelect(name);
  }
}