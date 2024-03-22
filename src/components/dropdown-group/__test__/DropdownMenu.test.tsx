import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DropdownMenu, { Option } from '../DropdownMenu';

describe('DropdownMenu', () => {
  const options: Option[] = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  it('renders DropdownMenu correctly', async() => {
    const onChangeMock = jest.fn();
     render(
      <DropdownMenu id="dropdown" label="Dropdown" options={options} onChange={onChangeMock} />
    );
    const label = await screen.findByRole('combobox')
  });


it('renders DropdownMenu correctly with options', async () => {
  const onChangeMock = jest.fn();
  const {container} = render(
      <DropdownMenu id="dropdown" label="Dropdown" options={options} onChange={onChangeMock} />
    );
    const comboBox = screen.getByRole('combobox');
    fireEvent.mouseDown(comboBox);

    options.forEach(option => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot()
  });
  
});