import React, { FC } from 'react';

interface SimpleComponentProps {
  msg: string;
}
const Sample: FC<SimpleComponentProps> = ({ msg }) => {
  return <div>{msg}</div>;
};

export default Sample;
