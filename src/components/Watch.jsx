import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useSearchParams();
  console.log("query--->", searchParam.getAll("v"));
  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div>
      <iframe
        width="1100"
        height="715"
        src={`https://www.youtube.com/embed/${searchParam.get(
          "v"
        )}?si=QVTFFhlpdWIv9YpM`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
