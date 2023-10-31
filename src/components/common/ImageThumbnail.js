import React from "react";
import { ImageThumbnail } from "@emerson/dynamic-ui";
function ImageThumbnail() {
  return (
    <>
      <ImageThumbnail
        data={
          [
            // {
            //   description: 'Delivering unparalleled, real-world performance and measurement stability and repeatability – time and time again.',
            //   id: 'Coriolis',
            //   imgUrl: 'https://www.emerson.com/resource/image/29288/landscape_ratio16x9/414/233/49aab8b224d4e09d9e8649a930dac953/PN/prod-flowmeasurement-coriolis-mmi-subcategory.jpg',
            //   title: 'Coriolis'
            // }
          ]
        }
        defaultIds={[""]}
        onCompare={() => {}}
        onSelect={function noRefCheck() {}}
      />
    </>
  );
}

export default ImageThumbnail;
