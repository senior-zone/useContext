import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="layer-container">{children}</div>;
};

export default Container;
