import { SelectInput, TextInput } from "@emerson/dynamic-ui-public";

const DynamicInput = ({ name, type, options, value, onChange, onCustomEvent }) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  const handleCustomEvent = () => {
    // Trigger the custom event
    onCustomEvent(name, value);
  };

  switch (type) {
    case "SELECT_INPUT":
      return (
        <SelectInput
          label="Critical"
          labelClass="app-content-label"
          name="critical"
          onChange={handleChange}
          options={[
            {
              greyedOut: true,
              label: "Option-1",
              title: "Yestitle",
              value: "1"
            },
            {
              greyedOut: false,
              label: "Option-2",
              title: "Yestitle",
              value: "2"
            },
            {
              greyedOut: false,
              isDisabled: true,
              label: "Option-3",
              title: "Yestitle",
              value: "3"
            },
            {
              greyedOut: true,
              label: "Option-4",
              title: "Notitle",
              value: "4"
            }
          ]}
          placeholder="PLEASE SELECT"
          value="-1"
          warningMsg=""
        />
      );
    case "select":
      return (
        <select value={value || ""} onChange={handleChange} onBlur={handleCustomEvent}>
          <option value="">Select {name}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    default:
      return (
        <TextInput
          alertObj={{
            alertMsg: "Please select valid value",
            alertTitle: "",
            customErrorClass: "",
            isVisible: false,
            primaryClass: "",
            severity: "success",
            showIcon: false,
            timeout: 100000
          }}
          label="User Name"
          onBlur={() => {}}
          onChange={function noRefCheck() {}}
          onKeyPress={function noRefCheck() {}}
          showAlert
        />
      );
  }
};

export default DynamicInput;
