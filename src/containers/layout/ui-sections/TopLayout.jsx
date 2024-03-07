import { CustomTop } from "../../../components/dynamic-ui/uiComponentsConfig";

export default function TopLayout() {
  return (
    <div>
      <CustomTop
        data={[
          {
            labelClass: 'ddl-typography--h3',
            order: 1,
            type: 'LABEL_TEXT',
            value: 'Sizing & Selection'
          },
          {
            labelClass: 'ddl-typography--paragraph',
            order: 2,
            type: 'LABEL_TEXT',
            value: 'Please select from the option below to best describe your application requirements. These selection will aid in instrumentation selection throughout the module'
          }
        ]}
      />
    </div>
  );
}
