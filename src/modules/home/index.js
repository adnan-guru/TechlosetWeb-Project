
import Development from './components/Development';
import Engineers from './components/Engineers';
import Developmentoffering from './components/Developmentoffering';
import Technologie from './components/Technologies';
import Ourwork from './components/ourwork';
import Blog from './components/blog';



function Home() {
    return (
        <div className="home">
            <Development />
            <Engineers />
            <Developmentoffering />
            <Technologie />
            <Ourwork />
            <Blog />
        </div>
    );
}
export default Home;