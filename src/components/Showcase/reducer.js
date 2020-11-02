import { GET_SHOWCASE_PROJECTS, SET_SHOWCASE_ID } from './constants';

const showcaseReducer = (state, action) => {
  switch (action.type) {
    case GET_SHOWCASE_PROJECTS:
      return {
        ...state,
        showcases: [
          {
            id: '1',
            assets: [],
          },
          {
            id: '2',
            assets: [],
          },
          {
            id: '3',
            assets: [],
          },
        ],
      };
    case SET_SHOWCASE_ID:
      return {
        ...state,
        showcaseId: action.showcaseId,
      };
    default:
      return state;
  }
};

export { showcaseReducer as default };
