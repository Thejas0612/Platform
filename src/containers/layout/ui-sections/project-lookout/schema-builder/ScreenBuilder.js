import { TileThumbnailFieldBuilder } from "./TileThumbnailFieldBuilder";
import { SingleSelectFieldBuilder } from "./SingleSelectFieldBuilder";
import { TableInputBuilder } from "./TableInputBuilder";
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
    const tileThumbnailBuilder = new TileThumbnailFieldBuilder(name, this.#workflowBuilder);
    this.#tileThumbnailBuilders.push(tileThumbnailBuilder);
    return tileThumbnailBuilder;
  }

  /**
   *
   * @param name {string}
   * @return {TableInputBuilder}
   */
  tableInput(name) {
    const tableInputBuilder = new TableInputBuilder(name, this.#workflowBuilder);
    this.#tableInputBuilders.push(tableInputBuilder);
    return tableInputBuilder;
  }

  /**
   *
   * @param name {string}
   * @return {SingleSelectFieldBuilder}
   */
  singleSelect(name) {
    const singleSelectBuilder = new SingleSelectFieldBuilder(name, this.#workflowBuilder);
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

    schemaWorkflow[0].componentProps.schema[this.#screenIndex] = cloneDeep(screenSchemaNew);

    const fieldFinder = new FieldFinder(schemaWorkflow);

    this.#tileThumbnailBuilders.forEach((tileThumbnailBuilder) => {
      tileThumbnailBuilder.finalBuild(this.#screenIndex, fieldFinder);
    });

    this.#singleSelectBuilders.forEach((singleSelectBuilder) => {
      singleSelectBuilder.finalBuild(this.#screenIndex, fieldFinder);
    });

    this.#tableInputBuilders.forEach((tableInputBuilder) => {
      tableInputBuilder.finalBuild(this.#screenIndex, fieldFinder);
    });
  }
}