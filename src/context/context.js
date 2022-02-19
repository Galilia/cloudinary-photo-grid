import {createContext, useReducer} from 'react';
import {Reducer as reducer} from './reducer';

export const TagContext = createContext();

const initialState = {
  tags: [],
  images: [],
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.removeTag = (itemId) => {
    dispatch({type: 'REMOVE_TAG', payload: {id: itemId}})
  }

  value.addTag = (tagName) => {
    dispatch({type: 'ADD_TAG', payload: tagName})
  }

  value.setImages = (image) => {
    dispatch({type: 'SET_IMAGES', payload: image})
  }

  value.assignTagToPhoto = (item) => {
    dispatch({type: 'ASSIGN_TAG_TO_PHOTO', payload: item})
  }

  value.untagPhoto = (item) => {
    dispatch({type: 'UNTAG_PHOTO', payload: item})
  }


  return <TagContext.Provider value={value}>{children}</TagContext.Provider>
}