import { CardCheckboxGroup, CardCheckboxGroupProps } from "../components/card-checkbox-group/CardCheckboxGroup";
import { FunctionComponent, useState } from "react";
import {TechnologyTypeFilter} from "../components/technology-type-filter/TechnologyTypeFilter";
import { Paper } from "@mui/material";
import DropdownMenuGroup, { DropdownData } from "../components/dropdown-group/DropdownMenuGroup";
import { BlockCheckboxGroup, BlockCheckboxGroupRow } from "../components/block-checkbox-group/BlockCheckboxGroup";

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


const BLOCK_CHECKBOX_GROUP_DATA: BlockCheckboxGroupRow[] = [
  {
    id: "1",
    title: "Flow",
    description: "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, differential pressure, vortex, magnetic, ultrasonic, turbine and positive displacement meters.",
    imgUrl: "https://emerson-cdn.azurewebsites.net/7bd555544cf68071bafa.png"
  },
  {
    id: "2",
    title: "Density",
    description: "Our density measurement devices offer reliable performance for applications such as concentration, API, Brix, and more.",
    imgUrl: "https://emerson-cdn.azurewebsites.net/940becae8b116d587fbd.png",
    disabled: true
  },
  {
    id: "3",
    title: "Viscosity",
    description: "Our inline viscosity meter offers accurate, repeatable measurement in industries such as refining, chemical, life sciences, and more.",
    imgUrl: "https://emerson-cdn.azurewebsites.net/940becae8b116d587fbd.png"
  }
];


export const Test: FunctionComponent = () => {
  const [cardCheckboxGroupSelectedId, setCardCheckboxGroupSelectedId] = useState<string | undefined>();
  const [cardCheckboxGroupCompareIds, setCardCheckboxGroupCompareIds] = useState<string[]>([]);
  const [blockCheckboxGroupSelectedIds, setBlockCheckboxGroupSelectedIds] = useState<string[]>([]);
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
      <DropdownMenuGroup dropdownsData={dropdownData}
                         onChange={handleDropdownChange} />
    </Paper>
    <h2>Technology Type Filter</h2>
    <TechnologyTypeFilter
      sortOptions={technologyTypeFilterSortOptions}
      onClose={(sortByValue)=> {console.log(sortByValue)}}
    />

    <h2>Card Checkbox Group</h2>
    <Paper elevation={4} sx={{ padding: "1rem" }}>
      <h3>Normal</h3>
      <CardCheckboxGroup selectedId={cardCheckboxGroupSelectedId} comparedIds={cardCheckboxGroupCompareIds} data={CARD_CHECKBOX_GROUP_DATA}
                         onChange={(newComparedIds, newSelectedId) => {
                           setCardCheckboxGroupCompareIds(newComparedIds);
                           setCardCheckboxGroupSelectedId(newSelectedId);
                         }} />
      <div>comparedIds = {cardCheckboxGroupCompareIds.toSorted().join(", ")}</div>
      <div>selectedId = {cardCheckboxGroupSelectedId}</div>
      <h3>Error</h3>
      <CardCheckboxGroup
        data={CARD_CHECKBOX_GROUP_DATA.slice(0, 2)}
        error={"You must select 2 or more technologies to compare."}
      />
    </Paper>


    <h2>Block Checkbox Group</h2>
    <Paper elevation={4} sx={{ padding: "1rem" }}>
      <h3>Normal</h3>
      <BlockCheckboxGroup
        data={BLOCK_CHECKBOX_GROUP_DATA}
        selectedIds={blockCheckboxGroupSelectedIds}
        onChange={(selectedIds) => {
          setBlockCheckboxGroupSelectedIds(selectedIds);
        }}
      />
      <div>selectedIds = {blockCheckboxGroupSelectedIds.toSorted().join(", ")}</div>

      <h3>Error</h3>
      <BlockCheckboxGroup
        data={BLOCK_CHECKBOX_GROUP_DATA}
        error={"Required"}
        selectedIds={[]} />
    </Paper>
  </>;

};