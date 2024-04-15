import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { FormHelperText, Stack } from "@mui/material";
import { MsolTitleOrThumbnailItem, MsolTitleOrThumbnailItemProps } from "./MsolTitleOrThumbnailItem";
import { MsolComponentHighlighter } from "../../msol-component-highlighter/MsolComponentHighlighter";

export interface MsolTileOrThumbnailItem extends Omit<MsolTitleOrThumbnailItemProps, "checked" | "onChange" | "showError"> {
  id: string;
}

export interface MsolTileOrThumbnailProps {
  required?: boolean;
  options?: MsolTileOrThumbnailItem[];
  data?: MsolTileOrThumbnailItem[];
  defaultIds?: string[];
  error?: string;
  onChange?: (event: MouseEvent, type?: string, name?: string, value?: string[] | string) => void;
  othAttr?: { type: string };
  name: string;
  hideCheckboxes?: boolean;
  singleSelect?:boolean;
}

export const MsolTileOrThumbnail: FC<MsolTileOrThumbnailProps> = ({
                                                                  required = false,
                                                                  data,
                                                                  options,
                                                                  defaultIds = [],
                                                                  error = "",
                                                                  onChange = () => {
                                                                  },
                                                                  othAttr,
                                                                  name,
                                                                  hideCheckboxes = false,
                                                                  singleSelect = false
                                                                }) => {
  // TODO: This is temporary to support backwards compatibility. This will be removed in the future.
  const dataOverride = data ? data : options;
  if (dataOverride == null) {
    throw Error("`data` property is required.");
  }

  const errorText = error.trim();
  const [value, setValue] = useState(defaultIds);
  const [singleSelectValue , setSingleSelectValue] = useState("transmitter");

  return <MsolComponentHighlighter>
    <>
      <Stack spacing={4}>
        {
          dataOverride.map(item => {
            const checked = value.includes(item.id);
            const selectedSingleSelect = (singleSelectValue === item.id) ? true : false;
            
            const handleChange: MouseEventHandler<HTMLDivElement> = (event) => {
              
              if(singleSelect){
                const newSelected = !selectedSingleSelect;
                const newValue = newSelected ? item.id : null;
                setSingleSelectValue(newValue);
                onChange(event, othAttr?.type, name, newValue);
              } else {
                const newChecked = !checked;
                const newValue = newChecked ? [...value, item.id] : value.filter(id => id !== item.id);
                setValue(newValue);
                onChange(event, othAttr?.type, name, newValue);
              }
            };
            
            return <MsolTitleOrThumbnailItem key={item.id}
                                             onChange={handleChange}
                                             checked={singleSelect ? selectedSingleSelect : checked}
                                             hideCheckbox={hideCheckboxes}
                                             showError={error !== ""}
                                             {...item} />;
          })
        }
      </Stack>
      {
        !errorText || <FormHelperText error={true}>{errorText}</FormHelperText>
      }
    </>
  </MsolComponentHighlighter>;
};