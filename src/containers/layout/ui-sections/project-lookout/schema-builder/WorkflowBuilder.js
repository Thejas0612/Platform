import { ScreenBuilder } from "./ScreenBuilder";
import { produce } from "immer";

export class WorkflowBuilder {
  #screenBuilderByIndex = {};

  /**
   * @property {object}
   */
  #schema;

  /**
   * @param schema {object}
   */
  constructor(schema) {
    this.#schema = schema;
  }

  /**
   * Set new screen schema.
   * @param screenIndex {number}
   * @return {ScreenBuilder}
   */
  screen(screenIndex) {
    if (this.#screenBuilderByIndex[screenIndex] != null) {
      throw new Error(`Screen with screenIndex '${screenIndex}' is already exist.`);
    }

    const screenBuilder = new ScreenBuilder(this, screenIndex);
    this.#screenBuilderByIndex[screenIndex] = screenBuilder;
    return screenBuilder;
  }

  /**
   * @param screenIndex {number}
   * @param newScreenSchemas {object}
   * returns {object}
   */
  finalBuild(screenIndex, newScreenSchemas) {
    if (newScreenSchemas?.[0] == null) {
      throw new Error(`newScreenSchemas[${screenIndex}] not found.`);
    }

    // TODO: fix validator
    // notNullOrUndefined(this.#screenBuilder, `The 'screen' function must be called before 'build' function.`);

    const screenBuilder = this.#screenBuilderByIndex[screenIndex] ?? new ScreenBuilder(this, screenIndex);

    return produce(this.#schema, (schemaDraft) => {
      screenBuilder.finalBuild(schemaDraft, newScreenSchemas[0]);
    });
  }
}