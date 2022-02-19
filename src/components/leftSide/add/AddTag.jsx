import {useContext, useState} from "react";
import {TagContext} from "../../../context/context";
import './AddTag.scss';
import {Announce} from "../../announce/Announce";

const AddTag = () => {
  const [inputValue, setInputValue] = useState('');
  const {tags = [] ,addTag} = useContext(TagContext);
  const headerExists = tags.some(i => (i.id === inputValue));

  const addTagHandler = () => {
    if (inputValue === '' || headerExists) {
      return
    }

    addTag(inputValue);
  }

  return (
    <div className="add-tag">
      <div className="add-tag-error-info">
        {(inputValue === "") && <Announce text="Input is empty"/> }
        {headerExists && <Announce text="Name already exist"/> }
      </div>
      <input
        id="tag_name"
        placeholder="add tag name"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
      <button className="btn" onClick={addTagHandler}>Add Tag</button>
    </div>
  )
}

export {AddTag};