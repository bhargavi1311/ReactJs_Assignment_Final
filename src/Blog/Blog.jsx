import React from "react";
import "../About/About.css";
import Common from "../Common/Common";
import Footer1 from "../Footer1";


const Blog = () => {
  return (
    <>
      <div className="list">
        <h1>Blog List</h1>
      </div>
      <div style={{ padding: '30px 30px' }}><Common /></div>

      <Footer1 />
    </>
  );
};

export default Blog;