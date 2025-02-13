import fb from "./firebase";
const db = fb.firestore();
const Blogs = db.collection("blog");
import React, { useState } from "react";

function Blogcreate() {
    const [title, settitle] = useState("");
  const [body, setbody] = useState([]);
  const formsave = (e) => {
    e.preventDefault();
    Blogs.add({
      title: title,
      body: body,
      publish: false,
      published_on: fb.firestore.Timestamp.fromDate(new Date()),
    })
      .then((docRef) => alert("succesfully submitted"))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          formsave(event);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          required
        />

        <textarea
          name="content"
          type="text"
          placeholder="write yoyr content here"
          rows="10"
          cols="150"
          onChange={(e) => {
            setbody(e.target.value);
          }}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Blogcreate
