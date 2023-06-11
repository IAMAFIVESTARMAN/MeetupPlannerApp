import MeetUpDetails from "../../../components/meetups/MeetUpDetails";

async function getMeetupData(meetupid) {
  const res = await fetch(`http://localhost:3000/api/meetups/${meetupid}`, {
    cache: "no-store",
  });

  console.log(meetupid);

  if (!res.ok) {
    throw new Error("failed to fetch data for slug");
  }

  return res.json();
}

export default async function Page({ params }) {
  // console.log(typeof params.slug, params.slug);
  const data = await getMeetupData(params.slug);

  return (
    <MeetUpDetails
      address={data.address}
      title={data.title}
      description={data.description}
      image={data.image}
    ></MeetUpDetails>
  );
}
