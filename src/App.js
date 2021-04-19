import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './component/Header';
import CharactersGrid from './component/characters/CharactersGrid'
import Search from './component/Search';
import Footer from './component/Footer'


const App = () => {

  const [item, setItem] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [query,setQuery] = useState('')


  useEffect(() => {
    // const fetchItems = async () => {
    //   const result = await axios('https://www.breakingbadapi.com/api/characters')
    //   console.log(result.data)
    // }
    // fetchItems();

    axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`
    ).then((res)=>{
      // console.log(res.data);
      setItem(res.data);
      setIsLoding(false)
    })
  },[query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharactersGrid isLoding={isLoding} item={item}/>
      <Footer/>
    </div>
  );
}

export default App;
