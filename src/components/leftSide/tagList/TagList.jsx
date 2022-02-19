import {TagItem} from "./TagItem";
import {useContext} from "react";
import {TagContext} from "../../../context/context";
import "./TagList.scss";
import {Announce} from "../../announce/Announce";

const TagList = () => {
  const {tags = []} = useContext(TagContext);

  return (
    <div className="tag-list">
      <h5>Available tags:</h5>
      {
        tags.length === 0 && <Announce text="There are no tags"/>
      }
      {
        tags.map((tag, index) => (<TagItem key={index} tag={tag}/>))
      }
    </div>
  )
}

export {TagList};