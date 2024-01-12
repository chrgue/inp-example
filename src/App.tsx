import reactLogo from './assets/react.svg'
import './App.css'
import ReactLogo from "./components/ReactLogo.tsx";
import {PokemonList} from "./components/PokemonList.tsx";
import {Search} from "./components/Search.tsx";
import {startTransition, useState} from "react";

const App = () => {
    const initialState = "";
    const [filterText, setFilterText] = useState(initialState);
    const [inputText, setInputText] = useState(initialState);

    function onChange(text: string) {
        setInputText(text);
        startTransition(() => {
            setFilterText(text);
        });
    }

    return (<>
        <ReactLogo src={reactLogo} alt="React logo"/>
        <Search text={inputText} onChange={(text) => onChange(text)}/>
        <PokemonList text={filterText}/>
    </>)
}

export default App
