import { notNullOrUndefined } from "../../../../../utils/assert";
import { FIELD_TYPE } from "./FieldType";
import { keyBy } from "lodash";

/**
 * @typedef { { [screenIndex: number]: { [fieldName: string]: object } } } ScreenByIndex
 */
export class FieldFinder {
  /**
   * @type {ScreenByIndex}
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
    notNullOrUndefined(
      field,
      `Could not find field with '${fieldName}' on '${screenIndex}' screen.`
    );

    if (field.type !== fieldType) {
      throw new Error(
        `The field type did not match. Expected '${field.type}' field type but actual field type is '${fieldType}'.`
      );
    }

    return field;
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findLabelText(screenIndex, fieldName) {
    return this.find(screenIndex, FIELD_TYPE.LABEL_TEXT, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {SingleSelect}
   */
  findSingleSelect(screenIndex, fieldName) {
    return this.find(screenIndex, FIELD_TYPE.SINGLE_SELECT, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findTableInput(screenIndex, fieldName) {
    return this.find(screenIndex, FIELD_TYPE.TABLE_INPUT, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findCustomButtonGroup(screenIndex, fieldName) {
    return this.find(screenIndex, FIELD_TYPE.CUSTOM_BUTTON_GROUP, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findTileThumbnail(screenIndex, fieldName) {
    return this.find(screenIndex, FIELD_TYPE.TILE_THUMBNAIL, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findRadioSelect(screenIndex, fieldName) {
    return this.find(screenIndex, FIELD_TYPE.RADIO_SELECT, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {TEXT_INPUT}
   */
  findTextInput(screenIndex, fieldName) {
    return this.find(screenIndex, FIELD_TYPE.TEXT_INPUT, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {RADIO_INPUT}
   */
  findRadioInput(screenIndex, fieldName) {
    return this.find(screenIndex, FIELD_TYPE.RADIO_INPUT, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findFilterButton(screenIndex, fieldName){
    return this.find(screenIndex, FIELD_TYPE.FILTER_BUTTON, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findDropdownMenuGroup(screenIndex, fieldName){
    return this.find(screenIndex, FIELD_TYPE.DROPDOWN_MENU_GROUP, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @param fieldName {string}
   * @return {*}
   */
  findCardCheckboxGroup(screenIndex, fieldName){
    return this.find(screenIndex, FIELD_TYPE.CARD_CHECKBOX_GROUP, fieldName);
  }

  /**
   * @param screenIndex {number}
   * @return {*}
   */
  findAllByScreen(screenIndex) {
    return this.#screensByIndex[screenIndex];
  }

  /**
   *
   * @param workflowSchema
   * @return {ScreenByIndex}
   */
  #hashScreensByIndex(workflowSchema) {
    const screensByIndex = {};
    workflowSchema[0].componentProps.schema.forEach((screenSchema, screenIndex) => {
      screensByIndex[screenIndex] = this.#hashFieldsByName(screenSchema);
    });

    return screensByIndex;
  }

  #hashFieldsByName(screenSchema) {
    return keyBy(screenSchema.fields, (field) => {
      return field.name;
    });
  }
}
