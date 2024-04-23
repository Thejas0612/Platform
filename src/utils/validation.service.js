import { ERRORS } from './constants'

export const checkValidations = (field, value) => {
   if (field?.validations == null) {
      return;
   }
   const validations = field.validations;
   let error = ''
   Object.keys(validations).forEach(rule => {
      if (field.type === 'NUMBER_INPUT' && validations[rule]) {
         if (rule === 'minValue' && validations[rule] > value) {
            error = `${ERRORS.MINIMUM_VALUE} ${validations[rule]}`;
         } else if (rule === 'maxValue' && validations[rule] < value) {
            error = `${ERRORS.MAXIMUM_VALUE} ${validations[rule]}`;
         }
      }
   })
   return error
}

export const genericStepperValidation = (formFields, inputValues, stepperIndex) => {
   let value = inputValues;
   let errorCount = 0;
   let updatedStepperIndex = stepperIndex;
   const updatedValues = new Array(formFields.length);
   for (let i = 0; i < formFields.length; i++) {
      let field = { ...formFields[i] };
      if (field.visibled !== "hidden") {
         if (field.required && !value) {
            field.error = ERRORS.FIELD_REQUIRED;
            errorCount++;
         }
      }
      updatedValues[i] = field;
   }
   if (!errorCount) {
      //can handle to stepper increment in redux store for example
      updatedStepperIndex++;
   }
   //Can update the schema from the source
   return { updatedValues, updatedStepperIndex };
}

export const generateFields = (formFields) => {
   if (!formFields.length) {
      return [];
   }
   return formFields.map((field) => field);
}
