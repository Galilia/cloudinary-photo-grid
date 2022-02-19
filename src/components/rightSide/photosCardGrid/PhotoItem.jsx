import {Dropdown} from "../../dropdown/Dropdown";
import {useContext, useState} from "react";
import {TagContext} from "../../../context/context";
import "./PhotoItem.scss";
import {Announce} from "../../announce/Announce";

const PhotosItem = ({img}) => {
  const {tags = []} = useContext(TagContext);
  const [isListOpen, setListOpen] = useState(false);
  const {assignTagToPhoto} = useContext(TagContext);

  const toggleList = () => {
    setListOpen((prevState) => !prevState);
  };

  return (
      <div className="card">
        <div className="card-image">
          <img className="activator" src={img.imgUrl} />
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">Photo {img.imgId}
            <button className="material-icons btn right" onClick={toggleList}>more_vert</button>
            {isListOpen &&
              <div role="list" className="photo-item-dropdown-list">
                {
                  tags.length ?
                    <>
                      {tags.map((tag, index) => <Dropdown key={index} tag={tag} img={img} assignTagToPhoto={assignTagToPhoto}/>)}
                    </> : <Announce text="There are no tags"/>
                }
              </div>
            }
          </span>
        </div>
      </div>
  )
}

export {PhotosItem};