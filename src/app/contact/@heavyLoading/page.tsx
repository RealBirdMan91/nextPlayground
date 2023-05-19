import React from "react";
import PromiseComp from "@/components/PromiseComp";
function page() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <PromiseComp />
      <div>some other stuff</div>
    </div>
  );
}

export default page;
