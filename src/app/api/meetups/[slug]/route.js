import { NextResponse } from "next/server";

import connect from "../../../../../utils/db";
import Meetups from "@/models/Meetups";
// }

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    await connect();

    const meetup = await Meetups.findById(slug);
    //fetch

    return NextResponse.json(JSON.parse(JSON.stringify(meetup)), {
      message: "Data fetched",
    });
  } catch {
    return NextResponse.json({ message: "Database Error" });
  }
};
