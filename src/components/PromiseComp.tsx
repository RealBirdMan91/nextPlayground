import React from "react";

const delay = (): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("some contact data");
    }, 5000);
  });

const getData = async () => {
  const data = await delay();
  return data;
};

async function PromiseComp() {
  const data = await getData();

  return <div>{data}</div>;
}

export default PromiseComp;
