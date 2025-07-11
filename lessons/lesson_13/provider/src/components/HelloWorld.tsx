import React from 'react';

type Props = {
  x: number;
}

const HelloWorld: React.FC<Props> = (props: Props) => {
  const { x } = props;
  return (
    <div>
      Hello World
      { x }
    </div>
  );
};

export default HelloWorld;
