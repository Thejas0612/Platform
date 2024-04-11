import { ERRORS } from './constants'

export const checkValidations = (validations, value, name) => {
    let error = ''
    Object.keys(validations).forEach(rule => {
       switch (rule) {
         case 'required':
            if(validations[rule] && ['', undefined].includes(value)) {
                error = ERRORS.FIELD_REQUIRED
            }
            break;
         case 'minValue':
             if (validations[rule] && validations[rule] > value) {
                error = ERRORS.MINIMUM_VALUE
             }
             break;
         case 'maxValue':
             if (validations[rule] && validations[rule] < value) {
                error = ERRORS.MAXIMUM_VALUE
             }
             break;
         default:
             break
       }
    })
    return error
 }
