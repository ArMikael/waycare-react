import * as actionTypes from '../actions';

const initialState = {
  selectedImage: ''
};

const rootReducer = (state = initialState, action) => {
    if (action.type === actionTypes.SHOW_IMAGE) {
        return {
            ...state,
            selectedImage: action.selectedImage
        }
    }

    return state;
};

export default rootReducer;