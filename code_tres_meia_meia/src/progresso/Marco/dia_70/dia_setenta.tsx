import React, { useState } from "react";

interface Comment {
  id: number;
  text: string;
}

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddComment = () => {
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        const updatedComments = [...comments];
        updatedComments[editIndex].text = inputValue;
        setComments(updatedComments);
        setEditIndex(null);
      } else {
        setComments([...comments, { id: Date.now(), text: inputValue }]);
      }
      setInputValue("");
    }
  };

  const handleEditComment = (index: number) => {
    setInputValue(comments[index].text);
    setEditIndex(index);
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>
        {editIndex !== null ? "Edit Comment" : "Add Comment"}
      </button>
      <ul>
        {comments.map((comment, index) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => handleEditComment(index)}>Edit</button>
            <button onClick={() => handleDeleteComment(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
