import React from 'react';

import Wrapper from './DiskStyled';

const Disk = ({
  author, category, genre, title, year,
}) => (
  <Wrapper>
    <p><span>{category}</span></p>
    <h2>{title} ({year})</h2>
    <h4>{genre}</h4>
    <p>{author}</p>
  </Wrapper>
);

export default Disk;
