import {Dropdown} from "../../dropdown/Dropdown";
import {useContext, useEffect, useRef, useState} from "react";
import {TagContext} from "../../../context/context";
import "./PhotoItem.scss";
import {Announce} from "../../announce/Announce";

const PhotosItem = ({img}) => {
  const {tags = []} = useContext(TagContext);
  const [isListOpen, setListOpen] = useState(false);
  const {assignTagToPhoto} = useContext(TagContext);
  const ref = useRef(null);

  const toggleList = () => {
    setListOpen((prevState) => !prevState);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setListOpen(false);
    }, 1000);
  }

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return (
      <div className="card">
        <div className="card-image">
          <img className="activator" src={img.imgUrl} />
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4" >Photo {img.imgId}
            <button className="material-icons btn right" onClick={toggleList}>more_vert</button>
            {isListOpen &&
              <div role="list" className="photo-item-dropdown-list" ref={ref}>
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