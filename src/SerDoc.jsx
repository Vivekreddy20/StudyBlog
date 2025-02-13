import fb from "./firebase"
const db=fb.firestore();
const bl=db.collection("newblog");

import React,{useState,useEffect} from 'react'

function SerDoc() {
  const [title,settitle]=useState("");
const [body,setbody]=useState([]);

  useEffect(() => {
    const g = bl.limit(100).onSnapshot((QuerySnapshot) => {
      const data = QuerySnapshot.docs.map((doc) => ({
        ...doc.data(),

        id: doc.id,
      }));
      setbody(data);
    });
  }, []);
  return (
    <div>
      {
        body.map((d)=>(
          <div key={d.id}>
            <h1>{d.title}</h1>
            {
              d.body.map((b)=>(
                <p key={b.id}>{b}</p>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default SerDoc
