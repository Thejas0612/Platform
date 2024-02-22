import { PaStepper } from "@emerson/dynamic-ui";
import { StepperSchema } from "../../JsonSchema/UsmSchema";
const Stepper = (props) => {
  const { navSchema, setNavSchema, setActiveNav } = props;
  const { data } = StepperSchema;
  const handleChange = (id) => {
    // console.log(id, "stepper id");
    const updatedSchema = navSchema.map((navItem) => {
      const item = navItem;
      if (item.ne_id === id) {
        item.selected = !item.selected;
      } else if (!item?.badges?.length) {
        item.selected = false;
      }
      return item;
    });
    setNavSchema(updatedSchema);
    // console.log(id);
    setActiveNav(id);
    // console.log("updatedSchema", updatedSchema);
  };

  return (
    <>
      <PaStepper data={data} onChange={(eventData, id) => handleChange(eventData, id)} />
    </>
  );
};

export default Stepper;
