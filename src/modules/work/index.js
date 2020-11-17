import  Watchvideo from './component/watchvideo';
import Ourwork from '../about/components/ourwork';
import Bigidea from '../about/components/bigidea';



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