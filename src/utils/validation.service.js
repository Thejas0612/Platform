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
