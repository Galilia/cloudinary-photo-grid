import {Dropdown} from "../../dropdown/dropdown";
import {useContext, useState} from "react";
import {TagContext} from "../../../context/context";

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
              <div role="list" className="dropdown-list">
                {
                  tags.length === 0 ? <h6>There is no tags</h6> :
                    <>
                      {tags.map((tag, index) => <Dropdown key={index} tag={tag} img={img} assignTagToPhoto={assignTagToPhoto}/>)}
                    </>
                }
              </div>


            }
          </span>
        </div>
      </div>
  )
}

export {PhotosItem};