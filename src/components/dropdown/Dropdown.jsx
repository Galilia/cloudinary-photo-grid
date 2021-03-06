import './Dropdown.scss';

const Dropdown = ({tag, img, assignTagToPhoto}) => {
  const {imgId, imgUrl} = img;
  const { id } = tag;

  return (
    <button
      type="button"
      className="dropdown-button-list-item btn-pointer"
      style={{ backgroundColor: `#${tag.color}` }}
      onClick={() => assignTagToPhoto({imgId, imgUrl, id})}
    >
      Tag {tag.header}
    </button>
  )
}

export {Dropdown};