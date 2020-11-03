import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ showcaseId }) => {
  if (!showcaseId) {
    throw new Error('Missing showcaseId');
  }

  return (
    <div>
      <p>Hello from the showcase widget!</p>
    </div>
  );
};

Index.propTypes = {
  showcaseId: PropTypes.string.isRequired,
};

export default Index;
