import { NextResponse } from "next/server";

import connect from "../../../../utils/db";
import Meetups from "@/models/Meetups";
// }

export const GET = async (request) => {
  try {
    await connect();

    const meetups = await Meetups.find();

    //fetch

    return NextResponse.json(JSON.parse(JSON.stringify(meetups)), {
      message: "Data fetched",
    });
  } catch {
    return NextResponse.json({ message: "Database Error" });
  }
};
