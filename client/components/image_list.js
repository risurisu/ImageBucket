//  Create our image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

// Create our component
const ImageList = (props) => {
  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image =>
    <ImageDetail key={image.title} image={image} /> // passing image object from function as a prop to ImageDetail (parent to child) This property is called image
  );

    return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

//use curly braces to make access to a js variable inside jsx


// Export our component
export default ImageList;
