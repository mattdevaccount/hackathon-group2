import S3 from "./assets/Profile-Socks3.jpg";
import S4 from "./assets/Profile-Socks4.jpg";
import S6 from "./assets/Search-Socks6.jpg";
import SS from "./assets/Search-Socks.jpg";

const Thumbs = () => {
  return (
    <div>
      <img className='Thumbs' src={S3} alt="Socks at the Podium" />
      <img className='Thumbs' src={S4} alt="Socks feeling Festive" />
      <img className='Thumbs' src={S6} alt="Socks with a Volunteer" />
      <img className='Thumbs' src={SS} alt="Socks" />
    </div>
  );
};


export default Thumbs