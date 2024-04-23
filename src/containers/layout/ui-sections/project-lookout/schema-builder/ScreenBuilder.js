import { TileThumbnailFieldBuilder } from "./TileThumbnailFieldBuilder";
import { SingleSelectFieldBuilder } from "./SingleSelectFieldBuilder";
import { TableInputBuilder } from "./TableInputBuilder";
import { CustomButtonGroupBuilder } from "./CustomButtonGroupBuilder";
import { FieldFinder } from "./FieldFinder";
import { cloneDeep } from "lodash";

export class ScreenBuilder {
  /**
   * @type {TileThumbnailFieldBuilder[]}
   */
  #tileThumbnailBuilders = [];

  /**
   * @type {SingleSelectFieldBuilder[]}
   */
  #singleSelectBuilders = [];

  /**
   * @type {CustomButtonGroupBuilder[]}
   */
  #customButtonGroupBuilders = [];

  /**
   * @type {TableInputBuilder[]}
   */
  #tableInputBuilders = [];

  /**
   * @type {WorkflowBuilder}
   */
  #workflowBuilder;

  /**
   * @type {number}
   */
  #screenIndex;

  /**
   *
   * @param schemaBuilder {WorkflowBuilder}
   * @param screenIndex {number}
   */
  constructor(schemaBuilder, screenIndex) {
    this.#workflowBuilder = schemaBuilder;
    this.#screenIndex = screenIndex;
  }

  /**
   *
   * @param name {string}
   * @return {TileThumbnailFieldBuilder}
   */
  tileThumbnail(name) {
    const tileThumbnailBuilder = new TileThumbnailFieldBuilder(name, this.#workflowBuilder, this);
    this.#tileThumbnailBuilders.push(tileThumbnailBuilder);
    return tileThumbnailBuilder;
  }

  /**
   *
   * @param name {string}
   * @return {CustomButtonGroupBuilder}
   */
  customButtonGroup(name) {
    const customButtonGroupBuilder = new CustomButtonGroupBuilder(name, this.#workflowBuilder, this);
    this.#customButtonGroupBuilders.push(customButtonGroupBuilder);
    return customButtonGroupBuilder;
  }

  /**
   *
   * @param name {string}
   * @return {TableInputBuilder}
   */
  tableInput(name) {
    const tableInputBuilder = new TableInputBuilder(name, this.#workflowBuilder, this);
    this.#tableInputBuilders.push(tableInputBuilder);
    return tableInputBuilder;
  }

  /**
   *
   * @param name {string}
   * @return {SingleSelectFieldBuilder}
   */
  singleSelect(name) {
    const singleSelectBuilder = new SingleSelectFieldBuilder(name, this.#workflowBuilder, this);
    this.#singleSelectBuilders.push(singleSelectBuilder);
    return singleSelectBuilder;
  }

  /**
   *
   * @param schemaWorkflow {any}
   * @param screenSchemaNew {object}
   * @return {void}
   */
  finalBuild(schemaWorkflow, screenSchemaNew) {
    if (schemaWorkflow[0].componentProps.schema[this.#screenIndex] == null) {
      throw new Error(`Could not find screen with '${this.#screenIndex}' index.`);
    }

    // TODO: create old field finder.
    // const screenSchemaOldClone = cloneDeep(schemaWorkflow);
    // const oldFieldFinder = new FieldFinder(screenSchemaOldClone)

    // new
    schemaWorkflow[0].componentProps.schema[this.#screenIndex] = cloneDeep(screenSchemaNew);
    const newFieldFinder = new FieldFinder(schemaWorkflow);

    this.#tileThumbnailBuilders.forEach((tileThumbnailBuilder) => {
      tileThumbnailBuilder.finalBuild(this.#screenIndex, newFieldFinder);
    });

    this.#customButtonGroupBuilders.forEach((customButtonGroupBuilder) => {
      customButtonGroupBuilder.finalBuild(this.#screenIndex, newFieldFinder);
    });

    this.#singleSelectBuilders.forEach((singleSelectBuilder) => {
      singleSelectBuilder.finalBuild(this.#screenIndex, newFieldFinder);
    });

    this.#tableInputBuilders.forEach((tableInputBuilder) => {
      tableInputBuilder.finalBuild(this.#screenIndex, newFieldFinder);
    });
  }
}
