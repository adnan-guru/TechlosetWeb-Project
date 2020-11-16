import Navbar from '../../commonComponents/navbar';
import Development from './components/Development';
import Engineers from './components/Engineers';
import Developmentoffering from './components/Developmentoffering';
import Technologie from './components/Technologies';
import Ourwork from './components/ourwork';
import Blog from './components/blog';
import Footer from '../../commonComponents/footer';


function Home() {
    return (
        <div className="home">
            <Navbar />
            <Development />
            <Engineers />
            <Developmentoffering />
            <Technologie />
            <Ourwork />
            <Blog />
            <Footer />



        </div>
    );
}
export default Home;