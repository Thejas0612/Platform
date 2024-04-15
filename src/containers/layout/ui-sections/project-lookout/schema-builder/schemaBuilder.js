import { WorkflowBuilder } from "./WorkflowBuilder";

/**
 * Updates schema using fluent interface design pattern.
 * @param oldSchema {object[]}
 * @return {WorkflowBuilder}
 */
export function schemaBuilder(oldSchema) {
  return new WorkflowBuilder(oldSchema);
}
