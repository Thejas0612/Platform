import { useState } from "react";
import { CustomToggleButton, DynamicForm, SelectInput } from "@emerson/dynamic-ui";
import { ProcessPipingSchema } from "../../JsonSchema/FormSchemas/ProcessPipingSchema";
import { Fragment } from "react";
import { useEffect } from "react";
const ProcessPiping = (props) => {
  const { navSchema, setNavSchema, activeNav } = props;
  const [processPiping, setProcessPiping] = useState([]);
  useEffect(() => {
    setProcessPiping(ProcessPipingSchema);
    return () => {
      setProcessPiping(processPiping);
    };
  }, [ProcessPipingSchema]);
  const handleToggle = (value) => {
    console.log(value, "value", processPiping);
  };
  const handleChange = (itemData, name, keyName, selectedId) => {
    try {
      const getSelectedSchema = processPiping[keyName];
      const { label } = itemData;
      if (getSelectedSchema) getSelectedSchema.value = selectedId;
      const getNavItem = navSchema.find((item) => item.ne_id === activeNav);
      if (getNavItem) {
        const navSelections = { label: label, id: selectedId };
        getNavItem.badges.push(navSelections);
        getNavItem.selected = true;
        // if (badges.includes())
      }
      // console.log({ ...navSchema }, 31);
      const newOb = { ...processPiping, getSelectedSchema };
      // console.log(newOb, 33);
      setProcessPiping({ ...processPiping, getSelectedSchema });
      setNavSchema({ ...navSchema });

      // console.log(keyName, selectedId, getSelectedSchema, activeNav, getNavItem);
    } catch (error) {
      return null;
    }
  };
  return (
    <div style={{ paddingBottom: "30px" }}>
      {processPiping?.["toggleData"]?.data?.map((processType, index) => (
        <Fragment key={index}>
          <CustomToggleButton
            data={processType.data}
            defaultId={processType.defaultId}
            label={processType.label}
            onChange={(a, b, c, d) => {
              handleChange(a, b, c, d);
            }}
          />
        </Fragment>
      ))}
      <div style={{ width: "40%" }}>
        <SelectInput
          label={processPiping?.["Pipe Material"]?.label || ""}
          labelClass="app-content-label"
          name="Pipe Material"
          onChange={(a, b, c, d) => {
            handleChange(a, b, c, d);
          }}
          options={processPiping?.["Pipe Material"]?.options}
          placeholder="Pick One"
          value={
            processPiping?.["Pipe Material"]?.value >= -1 ? processPiping?.pipeMaterial?.value : 0
          }
        />
      </div>
      <div style={{ width: "40%" }}>
        <SelectInput
          label={processPiping?.["Pipe Schedule"]?.label || ""}
          labelClass="app-content-label"
          name="Nominal Pipe Size"
          // onChange={(a, b, c, d, r = { label: processPiping?.pipeSchedule?.label || "", schemaName: processPiping.pipeSchedule.name || "" }) => { handleChange(d, r) }}
          onChange={(a, b, c, d) => {
            handleChange(a, b, c, d);
          }}
          options={processPiping?.["Pipe Schedule"]?.options}
          placeholder={processPiping?.["Pipe Schedule"]?.badges?.[0] || "Pick One"}
          value={
            processPiping?.["Pipe Schedule"]?.value >= -1 ? processPiping?.pipeSchedule?.value : 0
          }
        />
      </div>
      <div style={{ width: "40%" }}>
        <DynamicForm
          dataSourceUrl=""
          handleChange={() => {}}
          handleKeyPress={function noRefCheck() {}}
          handleSubmit={function noRefCheck() {}}
          schema={processPiping?.formData?.data || []}
          updateData={function noRefCheck() {}}
          direction="column"
        />
      </div>
      <div style={{ width: "40%" }}>
        <SelectInput
          label={processPiping?.["Flow Direction"]?.label || ""}
          labelClass="app-content-label"
          name="Nominal Pipe Size"
          onChange={(a, b, c, d) => {
            handleChange(a, b, c, d);
          }}
          options={processPiping?.["Flow Direction"]?.options || []}
          value={
            processPiping?.["Flow Direction"]?.value >= -1 ? processPiping.flowDirection?.value : 0
          }
        />
      </div>
    </div>
  );
};

export default ProcessPiping;
