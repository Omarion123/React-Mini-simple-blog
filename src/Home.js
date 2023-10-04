import { useState } from "react"; // to set react component we use useState
const Home = () => {
  const [blogs, setblogs] = useState([
    {
      title: "My new Website",
      body: "Notice the use of %PUBLIC_URL% in the tags above...",
      author: "mark",
      id: 1,
    },
    {
      title: "My new Wings",
      body: "Learn how to configure a non-root public URL by running `npm run build...",
      author: "marion",
      id: 2,
    },
    {
      title: "My new tooth",
      body: "If you open it directly in the browser, you will see an empty page...",
      author: "mari",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            Written by: <span className="author">{blog.author}</span>
          </p>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
