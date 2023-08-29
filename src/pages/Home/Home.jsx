import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
//import "./Home.scss";
import home_banner from "../../assets/images/home_banner.png";

function Home() {
  return (
    <div>
      <Banner 
      imgSrc={home_banner}
      title="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;