import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Colleges from "../Colleges/Colleges";
import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Colleges></Colleges>
            <Gallery></Gallery>
            <Research></Research>
            <Blog></Blog>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;