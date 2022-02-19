import {PhotosManager} from "./photos/photosManager";
import {TagsManager} from "./tags/tagsManager";
import {PhotosList} from "./photos/photosList";

const GridPage = () => {

  return (
    <div className='grid-page'>
      <div className="grid-page-left-container">
        <TagsManager />
      </div>
      <div className="grid-page-right-container">
        <PhotosList />
        <PhotosManager />
      </div>
    </div>
  )
}

export { GridPage };