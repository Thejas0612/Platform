import { CardCheckboxGroup, CardCheckboxGroupProps } from "../components/card-checkbox-group/CardCheckboxGroup";
import { FunctionComponent, useState } from "react";
import {TechnologyTypeFilter} from "../components/technology-type-filter/TechnologyTypeFilter";
import { Paper } from "@mui/material";
import DropdownMenuGroup, { DropdownData } from "../components/dropdown-group/DropdownMenuGroup";

const dropdownData: DropdownData[] = [
  { id: "high", label: "HIGH ACCURACY", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
  {
    id: "hygienic",
    label: "HYGIENIC / SANITARY",
    options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]
  },
  { id: "certified", label: "SIL CERTIFIED", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] }
];

const CARD_CHECKBOX_GROUP_DATA: CardCheckboxGroupProps["data"] = [
  { id: "1", name: "1", title: "Coriolis", imageUrl: "flow__coriolis-product.png" },
  { id: "2", name: "2", title: "Differential Pressure Flow", imageUrl: "https://placehold.co/150x150" },
  { id: "3", name: "3", title: "Magnetic", imageUrl: "flow__magnetic-product.png" },
  {
    id: "4",
    name: "4",
    title: "Vortex",
    imageUrl: "flow__vortex-product.jpg",
    disabled: true,
    disabledTooltip: "This vertex technology is incompatible with your temperature range."
  },
  {
    id: "5",
    name: "5", title: "Density", imageUrl: "flow__density-product.png"
  },
  { id: "6", name: "6", title: "Viscosity", imageUrl: "https://placehold.co/150x150" }
];

export const Test: FunctionComponent = () => {
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
  const technologyTypeFilterSortOptions =[
    { label: "RECOMMENDED", value: "recommended"},
  ]
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>("2");
  return <>
    <h2>Dropdown Menu Group</h2>
    <Paper elevation={4} sx={{ padding: "1rem" }}>
      <p style={{ marginLeft: "15px" }}>Filter By:</p>
      <DropdownMenuGroup dropdownsData={dropdownData} onChange={handleDropdownChange} />
    </Paper>
    <h2>Technology Type Filter</h2>
    <TechnologyTypeFilter
      sortOptions={technologyTypeFilterSortOptions}
      onClose={(sortByValue)=> {console.log(sortByValue)}}
    />

    <h2>Card Checkbox Group</h2>
    <Paper elevation={4} sx={{ padding: "1rem" }}>
      <h3>Normal</h3>
      <CardCheckboxGroup selectedId={selectedId} comparedIds={comparedIds} data={CARD_CHECKBOX_GROUP_DATA}
                         onChange={(newComparedIds, newSelectedId) => {
                           setComparedIds(newComparedIds);
                           setSelectedId(newSelectedId);
                         }} />
      <div>comparedIds = {comparedIds.toSorted().join(", ")}</div>
      <div>selectedId = {selectedId}</div>
      <h3>Error</h3>
      <CardCheckboxGroup
        data={CARD_CHECKBOX_GROUP_DATA.slice(0, 2)}
        error={"You must select 2 or more technologies to compare."}
      />
    </Paper>
  </>;

};