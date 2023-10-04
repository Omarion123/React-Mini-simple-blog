import { useState } from "react"; // to set react component we use useState
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "Lorem ipsum...",
      author: "marion",
      id: 1,
    },
    { title: "Welcome party!", body: "Lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tops",
      body: "Lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
