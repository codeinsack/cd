import React from 'react';

import Wrapper from './DiskStyled';

const Disk = ({
  author, genre, title, year, imageUrl, clicked
}) => (
  <Wrapper imageUrl={imageUrl}>
    <div onClick={clicked}>
      <h2>{title} ({year})</h2>
      <h4>{genre}</h4>
      <p>{author}</p>
    </div>
  </Wrapper>
);

export default Disk;
