const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The dojo blog</h1>
      <div className="link">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "#green",
            backgroundColor: "skyblue",
            borderRadius: "7px",
          }}
        >
          New blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
