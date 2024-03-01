import React from 'react';
import { CustomTop } from "@emerson/dynamic-ui";
//import CustomTopSchema from './../../JsonSchema/CustomTopSchema'

const CustomTopSection = () => {
  const CustomTopSchema = {
    data: [
      {
        labelClass: 'page-heading',
        labelStyle: {
          marginBottom: '8px',
          marginTop: '8px'
        },
        name: '',
        order: 1,
        type: 'LABEL_TEXT',
        value: 'Sizing and Selection'
      },
      {
        labelClass: 'ddl-typography--paragraph',
        labelStyle: {
          paddingBottom: "40px"
        },
        name: '',
        order: 2,
        type: 'LABEL_TEXT',
        value: 'Enter all of your flow application data below. Check the input summary to the right, and click Configure when all required input fields have been completed.'
      },
      {
        data: [
          {
            text: 'Automation Solutions',
            url: '/'
          },
          {
            text: 'Engineering Tools',
            url: '/'
          },
          {
            text: 'Technology Advisor',
            url: '/'
          },
          {
            text: 'Level Measurement',
            url: '/'
          }
        ],
        labelClass: 'ddl-typography--paragraph',
        labelStyle: {},
        name: '',
        order: 3,
        type: 'BREAD_CRUMBS',
        value: 'Level Measurement'
      }
    ]
  }
  return (
    <>
      <CustomTop {...CustomTopSchema} />
    </>
  );
};

export default CustomTopSection;