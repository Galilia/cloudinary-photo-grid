import {useContext, useState} from "react";
import {TagContext} from "../../../context/context";

const AddTag = () => {
  const [inputValue, setInputValue] = useState('');
  const {addTag} = useContext(TagContext);

  return (
    <div className="add-tag">
      <input
        id="tag_name"
        placeholder="add tag name"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
      <button className="btn" onClick={() => addTag(inputValue)}>Add Tag</button>
    </div>
  )
}

export {AddTag};