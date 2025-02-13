import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fb from "./firebase";
import "./BlogList.css"; 

const db = fb.firestore();
const bl = db.collection("blog");

function BlogList() {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const g = bl.limit(100).onSnapshot((QuerySnapshot) => {
      const data = QuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setblogs(data);
    });
  }, []);

  return (
    <div className="blog-container">
      <h2>All Blogs</h2>
      <div className="blog-list">
        {blogs.map((b) => (
          <div key={b.id} className="blog-box">
            <h3 className="blog-title">{b.title}</h3>
            <Link className="blog-link" to={"/blog/" + b.id}>
              Click to View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
