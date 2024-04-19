import { ERRORS } from './constants'

export const checkValidations = (field, inputFields, value) => {
   const validations = field?.validations || [];
   let error = false
   Object.keys(validations).forEach(rule => {
      switch (rule) {
         case 'required':
            if (validations[rule] && ['', undefined].includes(value)) {
               error = ERRORS.FIELD_REQUIRED
            }
            break;
         case 'minValue':
            if (validations[rule] && validations[rule] > value) {
               error = `${ERRORS.MINIMUM_VALUE} ${validations[rule]}`
            }
            break;
         case 'maxValue':
            if (validations[rule] && validations[rule] < value) {
               error = `${ERRORS.MAXIMUM_VALUE} ${validations[rule]}`
            }
            break;
         default:
            break
      }
   })
   return error
}
