import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fb from "./firebase";

const db = fb.firestore();
const Blogs = db.collection("blog");

function ShowBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); // Initialize as null

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const snapshot = await Blogs.doc(id).get();
        if (snapshot.exists) {
          setBlog(snapshot.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]); // Run when `id` changes

  if (!blog) return <p>Loading...</p>; // Show loading until data arrives

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
}

export default ShowBlog;
