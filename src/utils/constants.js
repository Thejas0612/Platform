const LEFT = "LEFT";
const TOP = "TOP";
const TEN_THOUSAND_PLACE_DECIMAL_MATCHER = /^[-+]?[0-9]{0,6}(\.[0-9]{0,4})?$/
const ERRORS = {
    FIELD_REQUIRED : 'This field is required',
    MINIMUM_VALUE : 'should be greater than or equal to',
    MAXIMUM_VALUE : 'should be less than or equal to',
}

export { TOP, LEFT , TEN_THOUSAND_PLACE_DECIMAL_MATCHER, ERRORS };
