import React from 'react';
import DropdownMenu from './DropdownMenu';
import { Option } from './DropdownMenu';



export interface DropdownData {
  id: string;
  label: string;
  options: Option[];
}

interface DropdownMenuGroupProps {
  dropdownsData: DropdownData[];
  onChange: (id: string, value: string) => void;
  
}

const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> = ({ dropdownsData, onChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {dropdownsData.map((dropdown) => (
        <div key={dropdown.id}  style={{
            flex: '1 1 200px', 
            minWidth: '100px', 
            maxWidth: '350px', 
            margin: '15px', 
          }}>
          <DropdownMenu
            id={dropdown.id}
            label={dropdown.label}
            onChange={onChange}
            options={dropdown.options}
          />
        </div>
      ))}
    </div>
  );
};

export default DropdownMenuGroup;


