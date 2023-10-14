import React, { lazy } from "react";

export const page = async (name: string) => {
  const DynamicComponent = await import(`./pages/${name}/page`);

  const Component = React.createFactory(DynamicComponent);

  return Component as unknown as React.CElement<unknown, React.Component<unknown, unknown, any>>;
};
