import React from "react";
import { PrismaClient } from "@prisma/client";

const getPrismaData = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.user.findMany();
  return data;
};

async function Home() {
  const data = await getPrismaData();
  return (
    <div>
      <h1>home marketing</h1>
      {data.map((user) => (
        <div key={user.id}>
          {user.id}
          {user.name}
          {user.email}
        </div>
      ))}
    </div>
  );
}

export default Home;
