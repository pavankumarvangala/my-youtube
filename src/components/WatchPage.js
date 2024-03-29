import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div>
          <iframe
            width="1233"
            height="580"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="10 ఏళ్ళ GOAL కేవలం 6 నెలలు లో సాధిస్తారు  | FASTEST WAY to achieve your goals | Telugu Geeks"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
