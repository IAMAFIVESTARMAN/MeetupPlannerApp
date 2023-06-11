import Meetups from "@/models/Meetups";
import { NextResponse } from "next/server";
import connect from "../../../../utils/db";

export async function POST(request) {
  try {
    const data = await request.json();

    // const { title, image, address, description } = data;
    // const meetups = await Meetups.find();
    const res = await Meetups.create(data);

    //fetch

    return NextResponse.json(res, {
      message: "Data Added",
    });
  } catch {
    return NextResponse.json({ message: "Data Type Error" });
  }
}
