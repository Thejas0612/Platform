import React from "react";
import { ImageCard } from "@emerson/dynamic-ui";
const ImageCard = () => {
  const ImageCardProps = {
    label: "",
    showLabel:"",
    labelClass:"",
    imageStyle: {
      width: "50%"
    },
    src: "",
    name:"",
    alt:"",
    wrapperClass:""
  };
  return (
    <>
      <ImageCard showLabel {...ImageCardProps} />
    </>
  );
};

export default ImageCard;
