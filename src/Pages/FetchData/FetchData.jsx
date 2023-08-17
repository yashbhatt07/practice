import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const FetchData = () => {
  const [data, setData] = useState([]);
  console.log("🚀 ~ file: FetchData.jsx:7 ~ FetchData ~ data:", data);

  const submit = () => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setData[response.data];
    });
  };

  return (
    <>
      <h3>Total Data</h3>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.author}</span>
          </div>
        ))}
      </div>
      <Button onClick={submit}>Show Data</Button>
    </>
  );
};

export default FetchData;
