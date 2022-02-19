import {AddTag} from "./add/AddTag";
import {TagList} from "./tagList/TagList";
import './TagsManager.scss';

const TagsManager = () => {

  return (
    <div className="tags-manager-container">
      <AddTag />
      <TagList />
    </div>
  )
}

export {TagsManager};