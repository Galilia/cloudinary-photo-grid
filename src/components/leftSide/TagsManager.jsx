import {AddTag} from "./add/addTag";
import {TagList} from "./tagList/tagList";

const TagsManager = () => {

  return (
    <div className="tags-manager-container">
      <AddTag />
      <TagList />
    </div>
  )
}

export {TagsManager};