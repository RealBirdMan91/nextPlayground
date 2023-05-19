import { NextResponse } from "next/server";

type Params = {
  params: {
    slug: string;
  };
};

export async function GET(req: Request, { params }: Params) {
  console.log(params);
  return NextResponse.json({ hello: "world" });
}
