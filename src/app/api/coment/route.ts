import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session)
      return NextResponse.json({ error: "Not authorized" }, { status: 401 });

    const body = await req.json();

    const { text, postId } = body;

    const comment = await db.comment.create({
      data: {
        text,
        postId,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
