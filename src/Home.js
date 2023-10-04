import { useState } from "react"; // to set react component we use useState
import BlogList from "./BlogList";
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
      author: "mark",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="all right ma nigga!!!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mark")}
        title="Mark blogs!"
      />
    </div>
  );
};

export default Home;
