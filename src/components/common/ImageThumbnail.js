import React from "react";
import { ImageThumbnail } from "@emerson/dynamic-ui";
const ImageThumbnail = (props) => {
  const ImageThumbnailProps = {
    data: [],
    label:"",
    labelClass:"",
    showLabel:"",
    isComparable:"",
    compareAll:"",
    dataSourceUrl:"",
    defaultIds: "",
    onCompare: () => {},
    onSelect: () => {}
  };
  return (
    <>
      <ImageThumbnail {...ImageThumbnailProps} />
    </>
  );
};

export default ImageThumbnail;
