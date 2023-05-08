import React from 'react';
import './AppTag.scss';

const AppTag = (props) => (
  <div className='AppTag'>
    <p className='tag'>{props.tag}</p>
  </div>
);


export default AppTag;
