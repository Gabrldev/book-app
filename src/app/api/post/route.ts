import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { PostValidator } from "@/lib/validators/post";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session) return NextResponse.json("Unauthorized", { status: 401 });

    // parse the body
    const body = await req.json();
    
    const { text,imageUrl} = PostValidator.parse(body);    

    // create the post
    const post = await db.post.create({
      data: {
        text: text as string,
        image: imageUrl as string,
        authorId: session.user.id,
      }})

    // return the post

    return NextResponse.json(post, { status: 201 })

;
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
