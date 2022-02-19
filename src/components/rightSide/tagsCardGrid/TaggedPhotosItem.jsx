import "./TaggedPhotosItem.scss";

const TaggedPhotosItem = ({tag}) => {

  return (
    <div className="tagged-photos-item">
      <ul className="collection with-header">
        <li className="collection-header" style={{ backgroundColor: `#${tag.color}`}}><h5>Tag {tag.header}</h5></li>
        <li className="collection-item">
            {tag.photo.map((photo, index) => (
              <div className="tagged-photos-item-photoInfo">
                <img className="tagged-photos-item-img" src={photo.imgUrl} />
                <div className="right">Photo {photo.imgId}</div>
              </div>
            ))}
        </li>
      </ul>
    </div>
  )
}

export {TaggedPhotosItem};