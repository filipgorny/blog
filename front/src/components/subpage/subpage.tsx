import Root from "@app/root";
import { Suspense } from "react";

interface SubPageProps {
  innerElement: React.ReactNode;
}

export const SubPage = (props: SubPageProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Root>
        <div>{props.innerElement}</div>
      </Root>
    </Suspense>
  );
};
