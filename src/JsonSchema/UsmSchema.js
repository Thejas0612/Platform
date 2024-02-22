const headerSchema = {
  data: [
    {
      list: [
        "Operations Management Software",
        "Automation & Control Software",
        "Advanced Industry Software"
      ],
      title: "Automation"
    },
    {
      list: [
        "Heating & Air Conditioning",
        "Refrigeration & Cold Chain",
        "Professional Tools and Vacuums",
        "Construction & Plumbing Tools"
      ],
      title: "Commercial"
    }
  ],
  title: "Product Advisor",
  userInfo: {
    name: "Demo User"
  },
  logo: "https://www.emerson.com/resource/blob/emerson-logo-compressed--data-5576584.png"
};
const CustomTopSchema = {
  data: [
    {
      labelClass: "page-heading",
      labelStyle: {
        marginBottom: "8px",
        marginTop: "8px",
        fontSize: "32px",
        fontWeight: "440"
      },
      name: "",
      order: 1,
      type: "LABEL_TEXT",
      value: "Sizing and Selection"
    },
    {
      labelClass: "ddl-typography--paragraph",
      labelStyle: {
        marginBottom: "8px",
        marginTop: "8px",
        fontSize: "18px",
        fontWeight: "200"
      },
      name: "",
      order: 2,
      type: "LABEL_TEXT",
      value:
        "Enter all of your flow application data below. Check the input summary to the right, and click Configure when all required input fields have been completed."
    }
    // {
    //   data: [
    //     {
    //       text: "Automation Solutions",
    //       url: "/",
    //     },
    //     {
    //       text: "Engineering Tools",
    //       url: "/",
    //     },
    //     {
    //       text: "Technology Advisor",
    //       url: "/",
    //     },
    //     {
    //       text: "Level Measurement",
    //       url: "/",
    //     },
    //   ],
    //   labelClass: "ddl-typography--paragraph",
    //   labelStyle: {},
    //   name: "",
    //   order: 3,
    //   type: "BREAD_CRUMBS",
    //   value: "Level Measurement",
    // },
  ]
};

const NavigationSchema = {
  data: [
    {
      badges: [],
      label: "Technology Type",
      enabled: true,
      selected: true,
      name: "fpa_TechnologyType",
      ne_id: 221,
      np_id: 7,
      sn_id: 4347,
      step_order: 1,
      bu_code: "FLOW_PA_NEW",
      element_label: "Technology Type",
      gui_type_code: "TEXT",
      attribute_code_json: "N/A",
      html_field_name: "fpa_TechnologyType"
    },
    {
      label: "Instrument Type",
      enabled: true,
      selected: false,
      name: "fpa_InstrumentType",
      sn_id: 4347,
      ne_id: 222,
      bu_code: "FLOW_PA_NEW",
      np_id: 8,
      element_label: "Instrument Type",
      step_order: 2,
      gui_type_code: "TEXT",
      attribute_code_json: "N/A",
      badges: [],
      html_field_name: "fpa_InstrumentType"
    },
    {
      badges: [],
      label: "Sizing Name",
      enabled: true,
      selected: false,
      name: "fpa_SizingName",
      sn_id: 4347,
      ne_id: 223,
      bu_code: "FLOW_PA_NEW",
      np_id: 8,
      element_label: "Sizing Name",
      step_order: 2,
      gui_type_code: "TEXT",
      attribute_code_json: "N/A",
      html_field_name: "fpa_SizingName"
    },
    {
      badges: [],
      label: "Process Piping",
      enabled: true,
      selected: false,
      name: "fpa_ProcessPiping",
      sn_id: 4347,
      ne_id: 224,
      bu_code: "FLOW_PA_NEW",
      np_id: 8,
      element_label: "Process Piping",
      step_order: 2,
      gui_type_code: "TEXT",
      attribute_code_json: "N/A",
      html_field_name: "fpa_ProcessPiping"
    }
  ]
};

const StepperSchema = {
  data: [
    {
      label: "Step1",
      ne_id: 221,
      url: "/"
    },
    {
      label: "Step2",
      ne_id: 222,
      url: "/"
    },
    {
      label: "Step3",
      ne_id: 223,
      url: "/"
    },
    {
      label: "Step4",
      ne_id: 224,
      url: "/"
    }
  ]
};

const TileSchema = {
  data: [
    {
      id: 221,
      title: "DP Flow",
      description:
        "Innovative products enhance your flow measurement capabilities by expanding on time-tested and proven technology.",
      imgUrl:
        "https://www.emerson.com/resource/image/155810/portrait_ratio1x1/555/555/ec733c591b22f923adef9c25625f4585/B5316980A00E27C8F3B5BD5ACE3387B8/rosemount-3051s-dp-flow-transmitter-5-valves.jpg",
      buttonLabel: "SHOW FULL SPECS",
      clickHandle: (id) => {
        // console.log(id);
      }
    }
  ]
};
export { headerSchema, CustomTopSchema, NavigationSchema, StepperSchema, TileSchema };
