import {
  CardCheckboxGroup,
  CardCheckboxGroupProps
} from "../components/card-checkbox-group/CardCheckboxGroup";
import DropdownMenuGroup from "../components/dropdown-group/DropdownMenuGroup";
import { DropdownData } from "../components/dropdown-group/DropdownMenuGroup";
import { FunctionComponent, useState } from "react";

const CARD_CHECKBOX_GROUP_DATA: CardCheckboxGroupProps["data"] = [
  { id: "1", name: "1", title: "Coriolis", imageUrl: "https://placehold.co/150x150" },
  {
    id: "2",
    name: "2",
    title: "Differential Pressure Flow",
    imageUrl: "https://placehold.co/150x150", 
  },
  { id: "3", name: "3", title: "Magnetic", imageUrl: "https://placehold.co/150x150" },
  {
    id: "4",
    name: "4",
    title: "Vortex",
    imageUrl: "https://placehold.co/150x150",
    disabled: true,
    disabledTooltip: "This vertex technology is incompatible with your temperature range."
  },
  {
    id: "5",
    name: "5",
    title: "Density",
    imageUrl: "https://placehold.co/150x150"
  },
  { id: "6", name: "6", title: "Viscosity", imageUrl: "https://placehold.co/150x150" }
];


const dropdownData: DropdownData[] =  [
  { id: "high", label: "HIGH ACCURACY", options: [{ value: 'yes', label: 'Yes' },{ value: 'no', label: 'No' }]},
  { id: "hygienic", label: "HYGIENIC / SANITARY", options: [{ value: 'yes', label: 'Yes' },{ value: 'no', label: 'No' }]},
  { id: "certified", label: "SIL CERTIFIED", options: [{ value: 'yes', label: 'Yes' },{ value: 'no', label: 'No' }]}
];


export const Test: FunctionComponent = () => {
  const [selectedIds, setSelectedId] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({
    high: "",
    hygienic: "",
    certified: ""
  });

  const handleDropdownChange = (id: string, value: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <>
      <p style={{ marginLeft: '15px' }}>Filter By:</p>
      <DropdownMenuGroup dropdownsData={dropdownData} onChange={handleDropdownChange} />
      <h2>Normal</h2>
      <CardCheckboxGroup
        selectedIds={selectedIds}
        data={CARD_CHECKBOX_GROUP_DATA}
        onChange={(newSelectedId) => {
          setSelectedId(newSelectedId);
        }}
      />
      <div>selectedIds = {selectedIds.toSorted().join(", ")}</div>

      <h2>Error</h2>
      <CardCheckboxGroup
        data={CARD_CHECKBOX_GROUP_DATA.slice(0, 2)}
        error={"You must select 2 or more technologies to compare."}
      />
    </>
  );
};
