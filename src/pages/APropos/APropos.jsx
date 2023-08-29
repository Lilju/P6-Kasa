import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import collapse from "../../data/collapse";
import about_banner from "../../assets/images/about_banner.png";

function APropos() {
    return (
        <main className="about_container">
           <Banner imgSrc={about_banner} /> 
           <div className="about_collapse">
                {collapse.map(({title, description}, index) => (
                    <Collapse
                        key= {`${title}-${index}`}
                        title={<h2 className="collapse_title">{title}</h2>}
                        description = {description}
                    />   
                ))}
              </div>
        </main>
    );
}

export default APropos;