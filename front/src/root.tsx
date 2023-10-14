import React from "react";

interface RootProps {
  children: React.ReactNode;
}

const Root = (props: RootProps) => {
  return <div>{props.children}</div>;
};

export default Root;
