import { CustomTop } from "../../../components/dynamic-ui/uiComponentsConfig";

export default function TopLayout() {
  return (
    <div>
      <CustomTop
        data={[
          {
            labelClass: 'ddl-typography--h3',
            labelStyle: {
              marginBottom: '8px',
              marginTop: '8px',
              fontSize: '25px'
            },
            name: '',
            order: 1,
            type: 'LABEL_TEXT',
            value: 'Sizing & Selection'
          },
          {
            labelClass: 'ddl-typography--paragraph',
            labelStyle: {},
            name: '',
            order: 2,
            type: 'LABEL_TEXT',
            value: 'Please select from the option below to best describe your application requirements.These selection will aid in instrumentation selection throughout the module'
          }
        ]}
      />
    </div>
  );
}
