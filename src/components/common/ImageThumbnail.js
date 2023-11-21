import React from "react";
import { ImageThumbnail } from "@emerson/dynamic-ui";

// eslint-disable-next-line no-unused-vars
const MsolImageThumbnail = (props) => {
  const ImageThumbnailProps = {
    data: [],
    label: "",
    labelClass: "",
    showLabel: "",
    isComparable: "",
    compareAll: "",
    dataSourceUrl: "",
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
