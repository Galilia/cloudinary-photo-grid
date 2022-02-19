import {TagItem} from "./tagItem";
import {useContext} from "react";
import {TagContext} from "../../../context/context";

const TagList = () => {
  const {tags = []} = useContext(TagContext);

  return (
    <div className="tag-list">
      <h5>Available tags:</h5>
      {
        tags.length === 0 && <h6>-----There is no tags----</h6>
      }
      {
        tags.map((tag, index) => (<TagItem key={index} tag={tag}/>))
      }
    </div>
  )
}

export {TagList};