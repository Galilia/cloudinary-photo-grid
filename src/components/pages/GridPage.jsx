import {TagsManager} from "../leftSide/TagsManager";
import {PhotosList} from "../rightSide/photosCardGrid/PhotosList";
import {TaggedPhotos} from "../rightSide/tagsCardGrid/TaggedPhotos";
import {useContext, useEffect} from "react";
import {TagContext} from "../../context/context";
import './GridPage.scss';

const GridPage = () => {
  const {setImages} = useContext(TagContext);

  useEffect(() => {
    setImages(
      [{
        imgId: 1,
        imgUrl: 'https://picsum.photos/200/150?random=1'
      },
      {
        imgId: 2,
        imgUrl: 'https://picsum.photos/200/150?random=2'
      },
      {
        imgId: 3,
        imgUrl: 'https://picsum.photos/200/150?random=3'
      },
      ])
  }, [])

  return (
    <div className='grid-page'>
      <div className="grid-page-left-container">
        <TagsManager />
      </div>
      <div className="grid-page-right-container">
        <PhotosList />
        <TaggedPhotos />
      </div>
    </div>
  )
}

export { GridPage };