import { template } from "lodash";

/**
 *
 * @param oldJson {object}
 * @param environmentVariables { {name:string, value:string}}
 * @return {object}
 */
export function transformJson(oldJson, environmentVariables) {
  const oldJsonString = JSON.stringify(oldJson);
  const compiled = template(oldJsonString);
  const newJsonString = compiled(environmentVariables);
  return JSON.parse(newJsonString);
}