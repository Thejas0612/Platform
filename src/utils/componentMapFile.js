import React from "react";
import { SelectInput, TextInput, TileOrThumbnail } from "@emerson/dynamic-ui-public";

const getMsolComponent = {
  TEXT_INPUT: <TextInput />,
  TILE_THUMBNAIL: (
    <TileOrThumbnail
      data={[
        {
          alertObj: {
            alertMsg: "Please select valid value",
            alertTitle: "",
            customErrorClass: "",
            primaryClass: "",
            severity: "success",
            showIcon: false,
            timeout: 100000
          },
          buttonLabel: "SHOW FULL SPECS",
          clickHandle: () => {},
          description:
            "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, Differential Pressure, Vortex, Magnetic, Ultrasonic, Turbine and positive displacement meters.",
          id: 1,
          imgUrl: "7bd555544cf68071bafa.png",
          showAlert: false,
          title: "Flow"
        },
        {
          alertObj: {
            alertMsg: "Please select valid value",
            alertTitle: "",
            customErrorClass: "",
            primaryClass: "",
            severity: "success",
            showIcon: false,
            timeout: 100000
          },
          buttonLabel: "SHOW FULL SPECS",
          clickHandle: function noRefCheck() {},
          description:
            "Our density & viscosity measurement devices offer unbeatable performance for applications in alcohol concentration, API gravity, specific gravity and more.",
          id: 2,
          imgUrl: "940becae8b116d587fbd.png",
          showAlert: false,
          title: "Density - Viscosity"
        }
      ]}
      defaultDirection="tile"
      defaultIds={[]}
      description="here is a toggle button"
      onChange={function noRefCheck() {}}
    />
  ),
  SINLGE_SELECT_INPUT: (
    <SelectInput
      label="Critical"
      labelClass="app-content-label"
      name="critical"
      onChange={() => {}}
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
  )
};

export { getMsolComponent };
