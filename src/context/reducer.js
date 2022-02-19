import {setBg} from "../generator/colorGenerator";

const Reducer = (state, {type, payload}) => {
  switch (type) {
    case 'ADD_TAG': {
      const newTag = [...state.tags, {id: payload, header: payload, color: setBg(), photo: []}]
      return {
        ...state,
        tags: newTag
      }
    }

    case 'REMOVE_TAG':
      return {
        ...state,
        tags: state.tags.filter(el => el.id !== payload.id)
      }

    case 'SET_IMAGES':
      return {
        ...state,
        images: payload
      }

    case 'ASSIGN_TAG_TO_PHOTO':
      return {
        ...state,
        tags: state.tags.map( el => {
          if (el.id === payload.id) {
            const newPhoto = { imgId: payload.imgId, imgUrl: payload.imgUrl};
            const photoExists = el.photo.some(i => (i.imgId === newPhoto.imgId))

            if (photoExists) {
              return el;
            }

            return {
              ...el,
              photo: [...el.photo, newPhoto]
            }
          } else {
            return el;
          }
        })
      }

    default:
      return state;
  }
}

export {Reducer};