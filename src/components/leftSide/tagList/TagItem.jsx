import {useContext} from "react";
import {TagContext} from "../../../context/context";

const TagItem = ({tag}) => {
  const {removeTag} = useContext(TagContext);

  return (
    <ul className="collection with-header">
      <li className="collection-item" style={{ backgroundColor: `#${tag.color}`}}>
        <div>Tag {tag.header}
          <div className="secondary-content btn-pointer">
            <i className="material-icons" onClick={() => removeTag(tag.id)}>delete</i>
          </div>
        </div>
      </li>
    </ul>
  )
}

export {TagItem};