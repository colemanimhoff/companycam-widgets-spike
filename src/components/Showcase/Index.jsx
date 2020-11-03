import React from 'react';
import PropTypes from 'prop-types';

import { showcaseProjects } from './fixtures';

const Index = ({ showcaseId }) => {
  if (!showcaseId) {
    throw new Error('Missing showcaseId');
  }

  return (
    <div>
      <p>Hello from the showcase widget!</p>
      {showcaseProjects.map((showcaseProject) => (
        // render your fixture data here
        <div key={showcaseProject.id} />
      ))}
    </div>
  );
};

Index.propTypes = {
  showcaseId: PropTypes.string.isRequired,
};

export default Index;
