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
  defaultIds?: string[] | string | null;
  error?: string;
  onChange?: (event: MouseEvent, type?: string, name?: string, value?: string[] | string | null) => void;
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

  return <MsolComponentHighlighter>
    <>
      <Stack spacing={4}>
        {
          dataOverride.map(item => {
            let checked: boolean;
            if(singleSelect){
              checked = (value === item.id) ? true : false;
            } else {
              checked = value && value.includes(item.id) ? true : false
            }

            const handleChange: MouseEventHandler<HTMLDivElement> = (event) => {
                const newChecked : boolean = !checked;
                let newValue;
                if(singleSelect) {
                  newValue = newChecked ? item.id : null;
                } else {
                  newValue = newChecked ? [...value as string[], item.id] : (value as string[]).filter(id => id !== item.id);
                }
                setValue(newValue);
                onChange(event, othAttr?.type, name, newValue);
            };
            
            return <MsolTitleOrThumbnailItem key={item.id}
                                             onChange={handleChange}
                                             checked={checked}
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