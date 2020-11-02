import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  initialState,
  SET_SHOWCASE_ID,
  GET_SHOWCASE_PROJECTS,
} from './constants';
import showcaseReducer from './reducer';

const Index = ({ showcaseId }) => {
  if (!showcaseId) {
    throw new Error('Missing showcaseId');
  }
  const [state, dispatch] = useReducer(showcaseReducer, initialState);

  useEffect(() => {
    dispatch({
      type: SET_SHOWCASE_ID,
      showcaseId,
    });
    dispatch({
      type: GET_SHOWCASE_PROJECTS,
      showcaseId,
    });
  }, []);

  return (
    <>
      <pre>{JSON.stringify(state, undefined, 2)}</pre>
    </>
  );
};

Index.propTypes = {
  showcaseId: PropTypes.string.isRequired,
};

export default Index;
