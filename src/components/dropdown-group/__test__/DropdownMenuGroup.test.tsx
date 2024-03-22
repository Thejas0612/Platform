import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DropdownMenuGroup, { DropdownData } from '../DropdownMenuGroup';


describe('<DropdownMenuGroup />', () => {
  const options: DropdownData[] = [
    {
      id: '"high"',
      label: 'HIGH ACCURACY',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ]
    },
    {
      id: 'hygienic',
      label: 'HYGIENIC / SANITARY',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ]
    }
  ];

  

  it('When default state render 2 dropdowns ', ()=>{
    const onChangeMock = jest.fn();
    const {container} = render(
        <DropdownMenuGroup dropdownsData={options} onChange={onChangeMock} />
      );
      expect(container).toMatchSnapshot()
  })


  it('when selecting a high accuracy option, then check the high accuracy option', async() => {
    const onChangeMock = jest.fn();
    const {container} = render(
      <DropdownMenuGroup dropdownsData={options} onChange={onChangeMock} />
    );

    const dropdown = await screen.findAllByRole('combobox')
    const highDropdown = await dropdown[0]
    const hygienicDropdown = await dropdown[1]

    expect(highDropdown).toBeInTheDocument()
    expect(hygienicDropdown).toBeInTheDocument()

    fireEvent.mouseDown(highDropdown);
    const optionElement = await screen.findByText(options[0].options[0].label) 
    fireEvent.mouseDown(optionElement)
  
    expect(optionElement).toBeInTheDocument();
    expect(container).toMatchSnapshot()
    

  });
})