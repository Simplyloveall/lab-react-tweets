import React from "react";
import User from "./User";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <User user={props.tweet.user} />
          </span>
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message msg={props.tweet.message} />
        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
