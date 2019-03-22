const initialState = [];

const makePhotosBlock = (state = initialState, action) => {
    switch (action.type){
        case 'GET_PHOTOS_REQUEST':
            return [...state]
        case 'GET_PHOTOS_SUCCESS':
            return [...action.payload]
        // case 'OPENNING_FULL_PHOTO':
        //     const x = document.querySelectorAll('.photos-one');
        //     x.style.visibility = 'hidden';
        //     return [...state]
        default: return [...state];
    }
};

export default makePhotosBlock;