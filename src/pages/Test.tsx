import { CardCheckboxGroup, CardCheckboxGroupProps } from "../components/card-checkbox-group/CardCheckboxGroup";
import { FC, useState } from "react";
import { FilterButton } from "../components/filter-button/FilterButton";
import { Box, Paper, Stack } from "@mui/material";
import { Dropdown, DropdownMenuGroup } from "../components/dropdown-menu-group/DropdownMenuGroup";
import { BlockCheckboxGroup, BlockCheckboxGroupRow } from "../components/block-checkbox-group/BlockCheckboxGroup";

const DROPDOWNS: Dropdown[] = [
  {
    id: "APPROVALS",
    placeholder: "APPROVALS",
    options: [{
      label: "Class 1 Division 1",
      title: "Class 1 Division 1",
      value: "CLASS_1_DIVISION_1"
    },
      {
        label: "Class 1 Division 2",
        title: "Class 1 Division 2",
        value: "CLASS_1_DIVISION_2"
      },
      {
        label: "Zone 1",
        title: "Zone 1",
        value: "ZONE_1"
      },
      {
        label: "Zone 2",
        title: "Zone 2",
        value: "ZONE_2"
      }
    ]
  },

  {
    id: "OPERATING_TEMPERATURE",
    placeholder: "OPERATING TEMPERATURE",
    options: [
      {
        label: "Greater Than 400 F (204 C)",
        title: "Greater Than 400 F (204 C)",
        value: "GREATER_THAN_400_F"
      }, {
        label: "Less Than 400 F (204 C)",
        title: "Less Than 400 F (204 C)",
        value: "LESS_THAN_400_F"
      }
    ]
  },

  {
    id: "OPERATING_PRESSURE",
    placeholder: "OPERATING PRESSURE",
    options: [
      {
        label: "Greater Than 1960psi (135 bar)",
        title: "Greater Than 1960psi (135 bar)",
        value: "GREATER_THAN_1960-PSI"
      }, {
        label: "Less Than 1960psi (135 bar)",
        title: "Less Than 1960psi (135 bar)",
        value: "LESS_THAN_1960_PSI"
      }
    ]
  }
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


export const Test: FC = () => {
  const [showDropdownMenuGroup, setShowDropdownMenuGroup] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] }>({
    APPROVALS: [],
    OPERATING_TEMPERATURE: [],
    OPERATING_PRESSURE: []})
  const [cardCheckboxGroupSelectedId, setCardCheckboxGroupSelectedId] = useState<string | undefined>();
  const [cardCheckboxGroupCompareIds, setCardCheckboxGroupCompareIds] = useState<string[]>([]);
  const [blockCheckboxGroupSelectedIds, setBlockCheckboxGroupSelectedIds] = useState<string[]>([]);

  const handleDropdownChange = (id: string, value: string[]) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return <>
    <h2>Dropdown Menu Group</h2>
    <Paper elevation={4} sx={{ padding: "1rem" }}>
      <>
        <Stack direction="row-reverse">
          <FilterButton
            label="Filters"
            onClick={() => {
              setShowDropdownMenuGroup(!showDropdownMenuGroup);
            }}
          />
        </Stack>

        {showDropdownMenuGroup && <DropdownMenuGroup dropdowns={DROPDOWNS}
                                                     onChange={handleDropdownChange} />}

        <Box sx={{ paddingTop: 2 }}>
          <>
            {
              Object.keys(selectedOptions).map((key) => {
                return <div key={key}>{key.toLowerCase()} = {selectedOptions[key].toSorted().join(", ")}</div>;
              })
            }
          </>
        </Box>
      </>
    </Paper>

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