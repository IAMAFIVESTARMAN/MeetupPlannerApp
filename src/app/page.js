// "use client";
import "../../styles/globals.css";
// import { useEffect, useState } from "react";
import MeetupList from "../../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

async function getData() {
  const client = await MongoClient.connect(
    MongoClient.connect(
      `Enter your database conntection string with database name meetups`
    )
  );
  const db = client.db();
  const meetUpsCollection = db.collection("meetups");
  const meetups = await meetUpsCollection.find().toArray();

  client.close();
  return meetups;
}

// const DUMMY = [
//   {
//     id: "m1",
//     title: "First Meet up",
//     image:
//       "https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
//     address: "Shaitan Gali420",
//     description: "First meet up yaro",
//   },
//   {
//     id: "m2",
//     title: "Second Meet up",
//     image:
//       "https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
//     address: "Shaitan Gali420",
//     description: "Second meet up yaro",
//   },
// ];

export default async function Homepage() {
  const data = await getData();

  const dt = data.map((item) => {
    return {
      id: item._id.toString(),
      title: item.title,
      image: item.image,
      address: item.address,
      description: item.description,
    };
  });

  // console.log(dt);

  return <MeetupList meetups={dt}></MeetupList>;
}

// export const getStaticProps = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const meetups = await res.json();
//   return { props: {} };
// };
