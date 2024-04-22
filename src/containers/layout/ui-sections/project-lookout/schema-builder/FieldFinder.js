import { notNullOrUndefined } from "../../../../../utils/assert";
import { FIELD_TYPE } from "./FieldType";

export class FieldFinder {
  /**
   * [{screenIndex: number}]: [{fieldName}]: object
   */
  #screensByIndex;

  constructor(workflowSchema) {
    this.#screensByIndex = this.#hashScreensByIndex(workflowSchema);
  }

  /**
   *
   * @param screenIndex {number}
   * @param fieldType {string}
   * @param fieldName {string}
   * @return {object}
   */
  find(screenIndex, fieldType, fieldName) {
    const fieldByName = this.#screensByIndex[screenIndex];
    notNullOrUndefined(fieldByName, `Could not find '${screenIndex}' screen.`);
    const field = fieldByName[fieldName];
    notNullOrUndefined(field, `Could not find field with '${fieldName}' on '${screenIndex}' screen.`);

    if (field.type !== fieldType) {
      throw new Error(`The field type did not match. Expected '${field.type}' field type but actual field type is '${fieldType}'.`);
    }

    return field;
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findLabelText(screenIndex, fieldName){
    return this.find(screenIndex, FIELD_TYPE.LABEL_TEXT, fieldName)
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findSingleSelect(screenIndex, fieldName){
    return this.find(screenIndex, FIELD_TYPE.SINGLE_SELECT, fieldName)
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findTableInput(screenIndex, fieldName){
    return this.find(screenIndex, FIELD_TYPE.TABLE_INPUT, fieldName)
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findTileThumbnail(screenIndex,fieldName){
    return this.find(screenIndex, FIELD_TYPE.TILE_THUMBNAIL, fieldName)
  }

  /**
   *
   * @param workflowSchema
   * @return {{screenIndex: number}: {fieldName: string}: object}
   */
  #hashScreensByIndex(workflowSchema) {
    const screensByIndex = {};
    workflowSchema[0].componentProps.schema.forEach((screenSchema, screenIndex) => {
      screensByIndex[screenIndex] = this.#hashFieldsBySchema(screenSchema);
    });

    return screensByIndex;
  }

  /**
   * @param screenSchema
   * @return {[{fieldName}]: object}
   */
  #hashFieldsBySchema(screenSchema) {
    const fieldsByName = {};
    screenSchema.fields.forEach((field) => {
      fieldsByName[field.name] = field;
    });

    return fieldsByName;
  }
}