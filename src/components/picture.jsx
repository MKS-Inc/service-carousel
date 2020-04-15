import React from 'react'
import styled from 'styled-components'

const picture = (props) => {
  const styles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '600px',
    backgroundSize: 'cover'
  };

  return (
    <img src={props.url} style={styles} />
  );
}

export default picture