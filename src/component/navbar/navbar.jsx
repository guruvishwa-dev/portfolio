import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* SideBar */}
      <div className="wrapper">
        <span>Guruvishwa </span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt=" No image" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt=" No image" />
          </a>
          <a href="#">
            <img src="/linkedin.png" alt=" No image" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
