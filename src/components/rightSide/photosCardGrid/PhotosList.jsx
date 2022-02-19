import {PhotosItem} from "./PhotoItem";
import {useContext} from "react";
import {TagContext} from "../../../context/context";

const PhotosList = () => {
  const {images = []} = useContext(TagContext);

  return (
    <div className="photos-list">
      {
        images.map((img, index) => <PhotosItem key={index} img={img}/>)
      }
    </div>
  )
}

export {PhotosList};