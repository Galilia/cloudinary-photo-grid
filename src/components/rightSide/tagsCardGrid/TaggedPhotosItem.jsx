import "./TaggedPhotosItem.scss";
import {useContext} from "react";
import {TagContext} from "../../../context/context";

const TaggedPhotosItem = ({tag}) => {
  const {untagPhoto} = useContext(TagContext);
  const {id} = tag;

  return (
    <div className="tagged-photos-item">
      <ul className="collection with-header">
        <li className="collection-header" style={{ backgroundColor: `#${tag.color}`}}><h5>Tag {tag.header}</h5></li>
        <li className="collection-item">
            {tag.photo.map(({imgId, imgUrl}, index) => (
              <div className="tagged-photos-item-photoInfo">
                <img className="tagged-photos-item-img" src={imgUrl} />
                <div className="right">Photo {imgId}</div>
                <i className="material-icons btn-pointer" onClick={() => untagPhoto({id, imgId})}>delete</i>
              </div>
            ))}
        </li>
      </ul>
    </div>
  )
}

export {TaggedPhotosItem};