import {useContext} from "react";
import {TagContext} from "../../../context/context";
import {TaggedPhotosItem} from "./taggedPhotosItem";

const TaggedPhotos = () => {
  const {tags = []} = useContext(TagContext);

  return (
    <div className="tagged-photos">
      {
        tags.map((tag, index) => <TaggedPhotosItem key={index} tag={tag}/>)
      }
    </div>
  )
}

export {TaggedPhotos};