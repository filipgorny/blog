import Root from "@app/root";
import { Suspense } from "react";

export const AsyncPage = ({ component }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Root>
        <div>{component}</div>
      </Root>
    </Suspense>
  );
};
