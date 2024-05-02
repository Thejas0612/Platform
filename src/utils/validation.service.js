import { ERRORS } from './constants'

export const checkValidations = (field, value) => {
   if (!field?.validations || Object.keys(field.validations).length === 0) {
      return;
   }
   const validations = field.validations;
   let error = ''
   Object.keys(validations).forEach(rule => {
      if (field.type === 'NUMBER_INPUT' && validations[rule]) {
         if (typeof validations[rule] !== 'number') {
            throw new Error(`Invalid value for ${rule}. Expected a number.`);
         }
         if (rule === 'minValue' && validations[rule] > value) {
            error = `${ERRORS.MINIMUM_VALUE} ${validations[rule]}`;
         } else if (rule === 'maxValue' && validations[rule] < value) {
            error = `${ERRORS.MAXIMUM_VALUE} ${validations[rule]}`;
         }
      }
   })
   return error
}

export const checkVisibility = (input, visibilityRules, inputFields) => {
   let visible = true;
   if (input.visibility === undefined) {
      return true;
   }
   if (typeof input.visibility !== 'object') {
      return !!input.visibility;
   }
   visibilityRules.map(rule => {
      const targetField = inputFields.find(field => field.id === rule.id);
      if (typeof targetField?.value === 'object') {
         const value = targetField?.value[targetField?.name];
         if (value !== rule.value || !rule.value.includes(value)) {
            visible = false;
         }
      } else {
         const targetValue = targetField.value || targetField.defaultId;
         if (targetValue !== rule.value || !rule.value.includes(targetValue)) {
            visible = false;
         }
      }
   })
   return visible;
}

export const generateFields = (formFields) => {
   if (!formFields.length) {
      return [];
   }
   return formFields.map((field) => {
      const { visibility, value } = field;
      const newItem = { ...field };
      newItem.hide = checkVisibility(newItem, visibility, formFields) ? false : true;
      return newItem;
   });
}