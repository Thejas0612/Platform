import React from "react";
import { ImagePopup } from "@emerson/dynamic-ui";
const ImagePopup = (props) => {
  const ImagePopupProps = {
    topLabel: "",
    imageLabel: "",
    foolable: "",
    src1: "",
    src2: ""
  };
  return (
    <>
      <ImagePopup {...ImagePopupProps} />
    </>
  );
};

export default ImagePopup;
