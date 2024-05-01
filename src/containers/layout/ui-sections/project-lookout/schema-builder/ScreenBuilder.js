import { TileThumbnailFieldBuilder } from "./TileThumbnailFieldBuilder";
import { SingleSelectFieldBuilder } from "./SingleSelectFieldBuilder";
import { TableInputBuilder } from "./TableInputBuilder";
import { CustomButtonGroupBuilder } from "./CustomButtonGroupBuilder";
import { FieldFinder } from "./FieldFinder";
import { cloneDeep } from "lodash";
import { RadioInputFieldBuilder } from "./RadioInputFieldBuilder";

export class ScreenBuilder {
  /**
   * @type {BaseFieldBuilder[]}
   */
  #fieldBuilders = [];

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
    this.#fieldBuilders.push(tileThumbnailBuilder);
    return tileThumbnailBuilder;
  }

  /**
   *
   * @param name {string}
   * @return {CustomButtonGroupBuilder}
   */
  customButtonGroup(name) {
    const customButtonGroupBuilder = new CustomButtonGroupBuilder(name, this.#workflowBuilder, this);
    this.#fieldBuilders.push(customButtonGroupBuilder);
    return customButtonGroupBuilder;
  }

  /**
   *
   * @param name {string}
   * @return {TableInputBuilder}
   */
  tableInput(name) {
    const tableInputBuilder = new TableInputBuilder(name, this.#workflowBuilder, this);
    this.#fieldBuilders.push(tableInputBuilder);
    return tableInputBuilder;
  }

  /**
   *
   * @param name {string}
   * @return {SingleSelectFieldBuilder}
   */
  singleSelect(name) {
    const singleSelectBuilder = new SingleSelectFieldBuilder(name, this.#workflowBuilder, this);
    this.#fieldBuilders.push(singleSelectBuilder);
    return singleSelectBuilder;
  }

  /**
   *
   * @param name {string}
   * @return {SingleSelectFieldBuilder}
   */
  radioInput(name){
    const radioInputFieldBuilder = new RadioInputFieldBuilder(name, this.#workflowBuilder, this);
    this.#fieldBuilders.push(radioInputFieldBuilder);
    return radioInputFieldBuilder;
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

    const screenSchemaOldClone = cloneDeep(schemaWorkflow);
    const oldFieldFinder = new FieldFinder(screenSchemaOldClone)

    schemaWorkflow[0].componentProps.schema[this.#screenIndex] = cloneDeep(screenSchemaNew);
    const newFieldFinder = new FieldFinder(schemaWorkflow);

    this.#fieldBuilders.forEach((fieldBuilder) => {
      fieldBuilder.finalBuild(this.#screenIndex, newFieldFinder, oldFieldFinder);
    });
  }
}
