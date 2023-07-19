import React from "react";
const commetsData = [
  {
    name: "pawan",
    text: "lorem epsum data text for sample",
    replies: [
      {
        name: "naga",
        text: "lorem epsum data text for sample",
        replies: [
          {
            name: "naga",
            text: "lorem epsum data text for sample",
            replies: [
              {
                name: "naga",
                text: "lorem epsum data text for sample",
                replies: [
                  {
                    name: "pawan",
                    text: "lorem epsum data text for sample",
                    replies: [],
                  },
                  {
                    name: "naga",
                    text: "lorem epsum data text for sample",
                    replies: [],
                  },
                ],
              },
              {
                name: "pawan",
                text: "lorem epsum data text for sample",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "naga",
        text: "lorem epsum data text for sample",
        replies: [],
      },
    ],
  },
  {
    name: "pawan1",
    text: "lorem epsum data text for sample",
    replies: [],
  },

  {
    name: "pawan2",
    text: "lorem epsum data text for sample",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <>
      <div className="p-2 flex bg-gray-100 m-2 rounded-lg">
        <img
          className="h-10 w-8"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
        <div className="ml-3">
          <p>{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black-100">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Comments:</h1>
      <div className="pl-5 pt-5">
        <CommentsList comments={commetsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
