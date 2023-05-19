import React, { Suspense } from "react";
import PromiseComp from "@/components/PromiseComp";

function Pricing() {
  return (
    <div>
      <h1>pricing</h1>
      <Suspense fallback={<h1>Loading......</h1>}>
        {/* @ts-expect-error Server Component */}
        <PromiseComp />
      </Suspense>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam
        ad quae? Vel accusamus facere voluptatum architecto quasi commodi
        impedit aperiam! Veniam ad doloribus reprehenderit quaerat optio
        architecto id cum?
      </p>
    </div>
  );
}

export default Pricing;
