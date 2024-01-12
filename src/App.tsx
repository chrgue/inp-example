import reactLogo from './assets/react.svg'
import './App.css'
import ReactLogo from "./components/ReactLogo.tsx";
import {PokemonList} from "./components/PokemonList.tsx";
import {Search} from "./components/Search.tsx";
import {useState} from "react";

const App = () => {
    const [filterText, setFilterText] = useState("");
    function onChange(text: string) {
        setFilterText(text);
    }

    return (<>
        <ReactLogo src={reactLogo} alt="React logo"/>
        <Search text={filterText} onChange={(text) => onChange(text)}/>
        <PokemonList text={filterText}/>
    </>)
}

export default App
