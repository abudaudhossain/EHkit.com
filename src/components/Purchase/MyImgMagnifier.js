import React from 'react';
import {
    SideBySideMagnifier
} from "react-image-magnifiers";


const MyImgMagnifier = ({img}) => {

    return (
        <div>
            <SideBySideMagnifier
                imageSrc={img}
                imageAlt="Example"
                largeImageSrc={img}
                alwaysInPlace={true}
                fillAvailableSpace={false}
                
            />

        </div>
    );
};

export default MyImgMagnifier;