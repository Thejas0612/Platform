import { transformJson } from "../transformJson";

describe("transformJson", () => {
  it("when JSON contains environment variables, then replace all environment variables with actual values", () => {
    const environmentVariables = {
      VITE_API_URL: "http://localhost:5000"
    };

    const oldJson = {
      fields: [
        {
          name: "line-size",
          dataSourceUrl: "<%= VITE_API_URL %>/api/lookout/get_line_size?measurement_type=Flow"
        },
        {
          name: "pipe-schedule",
          dataSourceUrl: "<%= VITE_API_URL %}//api/lookout/get_pipe_schedule"
        }
      ]
    };

    const newJson = transformJson(oldJson, environmentVariables);

    expect(newJson).toMatchSnapshot();
  });

});

