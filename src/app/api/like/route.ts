import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const sesssion = await getAuthSession();

    if (!sesssion) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const like = await db.likes.create({
      data: {
        authorId: sesssion.user.id,
        postId: body.postId,
      },
    });

    return NextResponse.json(like);
  } catch (error) {
    return NextResponse.json({ error: "error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const sesssion = await getAuthSession();

    if (!sesssion) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const like = await db.likes.deleteMany({
      where: {
        authorId: sesssion.user.id,
        postId: body.postId,
      },
    });

    return NextResponse.json(like);
  } catch (error: any) {
    return NextResponse.json({ error: "error" }, { status: 500 });
  }
}
