"use client";

import "../../../styles/globals.css";
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

// export const metadata = {
//   title: "Next.js Meetups",
// };

export default function NewMeetUpPage() {
  // throw new Error("uh ho fucked it");
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("http://localhost:3000/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
    });

    const dt = await response.json();
    console.log(dt);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}
