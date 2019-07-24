import { ActionType } from './newTestImageActions';

export const fetchImageStart = () => ({
  type: ActionType.FETCH_IMAGE_START,
});

export const fetchImageSuccess = image => ({
  type: ActionType.FETCH_IMAGE_SUCCESS,
  payload: {
    image,
  },
});

export const fetchImageError = error => ({
  type: ActionType.FETCH_IMAGE_ERROR,
  payload: {
    error,
  },
});
