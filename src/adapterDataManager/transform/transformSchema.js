// for each individual components

export const transformSchema = (componentType, data) => {
    // component type -> Navigation menu / header
    // data ->
    const componentProps = {
        "label": "",
        "enabled": "",
        "selected": "",
        "name": "",
        "ne_id": "",
        "np_id": "",
        "sn_id": "",
        "step_order": 1,
        "bu_code": "",
        "gui_type_code": "",
        "attribute_code_json": "",
        "html_field_name": "",
        "badges": []
    }; // keys for rendering 
    return componentProps;
}