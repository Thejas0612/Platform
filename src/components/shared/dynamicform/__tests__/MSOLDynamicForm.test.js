import React from 'react';
import { render } from '@testing-library/react';
import MsolDynamicForm from '../index';

// Your schema
const schema = [
  {
    group: "Project Owner Details",
    fields: [
      {
        id: "email",
        type: "TEXT_INPUT",
        name: "email",
        label: "Email",
        title: "Email",
        error: "",
        inputclass: "",
        labelClass: "app-content-label",
        value: "Default Value",
        column: "6",
      },
    ]
  }]

describe('MsolDynamicForm', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<MsolDynamicForm schema={schema} />);
    console.log(getByText);
    expect(getByText('Project Owner Details')).toBeInTheDocument()});
});