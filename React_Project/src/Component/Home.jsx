import backgroundImage from "../assets/BackgroundImg.png";
// import Cards from "./Cards/Cards";
function Home() {
  return (
    <div>
      <img
        src={backgroundImage}
        alt="Background"
        style={{ width: "100%", height: "auto" }}
      />

      {/* <Cards /> */}
    </div>
  );
}

export default Home;
