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

export const navigate = (formFields) => {
   let errorCount = 0;
   const updatedValues = formFields.map(field => {
      if (field.visibled !== "hidden") {
         if (field.required && !field.value) {
            field.error = ERRORS.FIELD_REQUIRED;
            errorCount++;
         }
      }
      return field;
   });
   return { updatedValues, errorCount };
}

export const generateFields = (formFields) => {
   if (!formFields.length) {
      return [];
   }
   return formFields
}
