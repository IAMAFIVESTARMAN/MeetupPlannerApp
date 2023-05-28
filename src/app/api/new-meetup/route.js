import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// export async function GET(request) {
//   //

//   const { searchParams } = new URL(request.url);
//   const obj = Object.fromEntries(searchParams.entries());

//   //   const name = searchParams.get("name");
//   //   const instrument = searchParams.get("instrument");
//   //   return NextResponse.json({ name: name, instrument: instrument });
//   return NextResponse.json(obj);
// }

// export async function POST(request) {
//   const data = await request.json();

//   console.log(data);

//   const { name, email, message } = data;
//   return NextResponse.json({ name, email, message });
// }

// export async function POST() {
//   const client =await MongoClient.connect(
//     "mongodb+srv://jeff:jeff@clusterbeta.f7vjhfq.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db=client.db()
//   const meetUpsCollection=db.collection('meetups')
//   meetUpsCollection.insertOne()
//   return NextResponse.json({ test: "it works" });
// }

export async function POST(request) {
  const data = await request.json();

  //   const { title, image, address, description } = data;

  const client = await MongoClient.connect(
    `Enter your database conntection string with database name meetups`
  );
  const db = client.db();
  const meetUpsCollection = db.collection("meetups");
  const result = await meetUpsCollection.insertOne(data);
  // console.log(result);
  client.close();

  return NextResponse.json({ message: "Data Added" });
}
