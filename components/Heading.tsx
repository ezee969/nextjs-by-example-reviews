import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Heading = (props: Props) => {
  return (
    <h1 className={`font-bebas_neue pb-3 text-6xl font-bold text-slate-800`}>
      {props.children}
    </h1>
  );
};

export default Heading;
