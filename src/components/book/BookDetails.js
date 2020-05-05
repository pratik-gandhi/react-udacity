import React from "react";

const defaultStyle = { width: 128, height: 193, backgroundImage: "" };

export const Thumbnail = (props) => {
  return (
    <div
      className="book-cover"
      style={{ ...defaultStyle, backgroundImage: props.url }}
    />
  );
};

export const Author = (props) => {
  return <div className="book-authors">{props.author} </div>;
};

export const Title = (props) => {
  return <div className="book-title"> {props.title} </div>;
};
