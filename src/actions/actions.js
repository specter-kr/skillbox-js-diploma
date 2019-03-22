import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "",
  secret: ""
});

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';

export function getPhotos(mount){
    return dispatch => {
        unsplash.photos.listPhotos(1, mount, "latest")
        .then(toJson)
        .then(json => {
            // Your code
            console.log(json);
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: json,
            })
        });
    }
}

export const openningFullPhoto = (id) => {
    return {
        type: 'OPENNING_FULL_PHOTO',
        id
    }
}