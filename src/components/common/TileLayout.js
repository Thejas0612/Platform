import React from "react";
import TileOrThumbnail from "./TileOrThumbnail";

const TileLayout = (props) => {
  const TileLayoutProps = {
    data: [],
    defaultDirection: "",
    defaultIds: [],
    description: "",
    onChange: () => {},
    dataSource: ""
  };

  return (
    <>
      <TileOrThumbnail {...TileLayoutProps} />
    </>
  );
};

export default TileLayout;
