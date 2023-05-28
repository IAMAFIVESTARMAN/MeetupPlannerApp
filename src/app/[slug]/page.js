// "use client";
// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";

// "use client";

// import { useSearchParams } from "next/navigation";

import MeetUpDetails from "../../../components/meetups/MeetUpDetails";
import { MongoClient, ObjectId } from "mongodb";

async function getData(meetupid) {
  // const { searchParams } = new URL(request.url);
  // console.log(searchParams);
  // console.log(typeof meetupid, meetupid);

  const client = await MongoClient.connect(
    `Enter your database conntection string with database name meetups`
  );
  const db = client.db();
  const meetUpsCollection = db.collection("meetups");

  const meetups = await meetUpsCollection.findOne({
    _id: new ObjectId(meetupid),
  });

  // console.log(meetups);

  client.close();
  return {
    id: meetups._id.toString(),
    title: meetups.title,
    image: meetups.image,
    address: meetups.address,
    description: meetups.description,
  };
}

export default async function Page({ params }) {
  // console.log(typeof params.slug, params.slug);
  const data = await getData(params.slug);

  // const dt = data.map((item) => {
  //   return {
  //     id: item._id.toString(),
  //     title: item.title,
  //     image: item.image,
  //     address: item.address,
  //     description: item.description,
  //   };
  // });

  // console.log(dt.map((item) => console.log(item)));

  // console.log(data);

  // console.log(data);

  return (
    <MeetUpDetails
      address={data.address}
      title={data.title}
      description={data.description}
      image={data.image}
    ></MeetUpDetails>
  );
}
