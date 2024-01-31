import './App.css';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import movies from "./Movies";
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';


function App() {
  const   [data,setData]=useState(movies)
 
  function add (newtitle,newdescription,newrating){
    setData([...data,{title:newtitle,description:newdescription,rating:newrating}])
}

function search(srch){

  setData(data.filter(el=>el.title.toLowerCase().includes(srch.toLowerCase())))

}
const [searchrating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
      console.log('object')
      setRating(rate)
      setData(data.filter(el=>el.rating>=searchrating))
  
    }
  
  return (
    
    <div className="App">
      <Filter add={add} search={search}/> 
      <Rating className='rate'   iconsCount={5}   onClick={handleRating} />
      <MovieList data={data}/>
     
      
    </div>
    
  );
}


export default App;