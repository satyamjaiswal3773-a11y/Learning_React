import backgroundImage from '../assets/BackgroundImg.png';

function Home() {
  return (
    <div>
      <h1>Welcome to OneTrip</h1>
      <p>Your travel companion for unforgettable journeys.</p>
      <img src={backgroundImage} alt="Background" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

export default Home;
