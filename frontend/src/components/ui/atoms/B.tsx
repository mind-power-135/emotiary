import React from 'react';

interface Props {
  children: React.ReactNode;
}

const B: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <b style={{fontWeight: 'bold'}}>{children}</b>
  )
}

export default B;
