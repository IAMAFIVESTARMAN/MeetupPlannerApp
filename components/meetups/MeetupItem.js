"use client";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function MeetupItem(props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // console.log(props);

  function showDetailsHandler() {
    // console.log("working");
    router.push("/" + props.id);
    // console.log(pathname, searchParams, router);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
