import {useContext} from "react";
import {TagContext} from "../../../context/context";
import {TaggedPhotosItem} from "./TaggedPhotosItem";
import {Announce} from "../../announce/Announce";

const TaggedPhotos = () => {
  const {tags = []} = useContext(TagContext);

  return (
    <div className="tagged-photos">
      {tags.length ?
        <>
          { tags.map((tag, index) => <TaggedPhotosItem key={index} tag={tag}/>) }
        </> : <Announce text="There are no tags"/>
      }
    </div>
  )
}

export {TaggedPhotos};