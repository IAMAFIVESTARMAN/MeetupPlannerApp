// "use client";
import "../../styles/globals.css";
// import { useEffect, useState } from "react";
import MeetupList from "../../components/meetups/MeetupList";

async function getMeetupsData() {
  try {
    const res = await fetch("http://localhost:3000/api/meetups", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch data for page");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export default async function Homepage() {
  const data = await getMeetupsData();

  const dt = data.map((item) => {
    return {
      id: item._id.toString(),
      title: item.title,
      image: item.image,
      address: item.address,
      description: item.description,
    };
  });

  return <MeetupList meetups={dt}></MeetupList>;
}

// export const getStaticProps = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const meetups = await res.json();
//   return { props: {} };
// };
