import React from "react";
import { TileOrThumbnail } from "@emerson/dynamic-ui";
const Layout = () => {
  const formSchema = [
    {
      id: 1,
      title: "Flow Meter",
      description:
        "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, Differential Pressure, Vortex, Magnetic, Ultrasonic, Turbine and positive displacement meters.",
      imgUrl:
        "https://www.emerson.com/resource/image/155810/portrait_ratio1x1/555/555/ec733c591b22f923adef9c25625f4585/B5316980A00E27C8F3B5BD5ACE3387B8/rosemount-3051s-dp-flow-transmitter-5-valves.jpg"
    },
    {
      id: 2,
      title: "Primary Element",
      description:
        "Rosemount patented primary element designs offer best-in-class performance for a wide range of applications",
      imgUrl: "https://webapp.emerson.com/rmtpa/resource/images/PrimaryElement.PNG"
    }
  ];
  return (
    <div>
      <TileOrThumbnail data={formSchema} />
    </div>
  );
};

export default Layout;
