const initialState = {
  selectedImage: ''
};

const rootReducer = (state = initialState, action) => {
    if (action.type === "SHOW_IMAGE") {
        console.log('SHOW_IMAGE', action.selectedImage);

        return {
            ...state,
            selectedImage: action.selectedImage
        }
    }

    return state;
};

export default rootReducer;