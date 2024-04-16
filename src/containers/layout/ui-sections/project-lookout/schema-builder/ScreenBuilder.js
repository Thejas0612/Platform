import { TileThumbnailFieldBuilder } from "./TileThumbnailFieldBuilder";
// import { WorkflowBuilder } from "./WorkflowBuilder";
import { SingleSelectFieldBuilder } from "./SingleSelectFieldBuilder";
import { TableInputBuilder } from "./TableInputBuilder";

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
  tableInput(name){
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

    schemaWorkflow[0].componentProps.schema[this.#screenIndex] = screenSchemaNew;

    this.#tileThumbnailBuilders.forEach((tileThumbnailBuilder) => {
      tileThumbnailBuilder.finalBuild(screenSchemaNew);
    });

    this.#singleSelectBuilders.forEach((singleSelectBuilder) => {
      singleSelectBuilder.finalBuild(screenSchemaNew)
    });

    this.#tableInputBuilders.forEach((tableInputBuilder) => {
      tableInputBuilder.finalBuild(screenSchemaNew)
    });
  }
}