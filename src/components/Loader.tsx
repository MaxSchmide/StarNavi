import React from "react";
import Spinner from "./Spinner";

type Props = {
  children: React.ReactNode;
  isLoading: boolean;
};

const Loader = ({ isLoading, children }: Props) => {
  if (isLoading) {
    return (
      <div className='flex items-center justify-center absolute top-10 left-1/2 -translate-x-1/2'>
        <Spinner size={10} />
      </div>
    );
  }

  return <>{children}</>;
};

export default Loader;
