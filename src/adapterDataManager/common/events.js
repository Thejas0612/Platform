// To handle generic component specific event logic
import fetchData from "../fetch/initialApis";

const events = (type, setUpdateEvent) => {
  switch (type) {
    case "click":
      setUpdateEvent.updateClickEvent(true);
      console.log("Clicked!", setUpdateEvent);
      break;
    case "hover":
      console.log("Hovered!");
      break;
    case "submit":
      console.log("Submitted!");
      break;
    case "onchange":
      console.log("On change event", setUpdateEvent);
      break;
    case "fetch":
      fetchData("", "value")
      break;
    default:
      console.log("Unknown event!");
      break;
  }
};

export default events;
