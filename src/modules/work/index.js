import  Watchvideo from './component/watchvideo';
import Ourwork from '../work/component/ourwork';
import Bigidea from '../../commonComponents/bigidea';



function Work(){
    return(
        <div className="Work">
      <Watchvideo />
     <Ourwork />
     <Bigidea />
       </div> 
    )
}
export default Work;