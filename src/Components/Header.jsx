import reactImg from "../Image/React.png";

const Header = () => {
  return (
    <div className="border-bottom border-secondary">
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="pt-3 py-2 pl-2">
      <img src={reactImg} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 m-2 pt-4 text-white-50">  
        CountOpedia
      </span>
    </div>
  );
};

const SubHeader = () => {
  return <div className=""></div>;
};

export default Header;
