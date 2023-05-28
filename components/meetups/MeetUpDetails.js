// import { Fragment } from "react";
import styles from "./MeetUpDetails.module.css";
// import Image from "next/image";

const MeetUpDetails = function (props) {
  return (
    <section className={styles.details}>
      <img src={props.image} alt="image"></img>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetUpDetails;
