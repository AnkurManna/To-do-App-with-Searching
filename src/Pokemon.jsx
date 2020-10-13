import React ,{useState ,useEffect } from "react";
import axios from 'axios';
const Pokemon = () =>
{

    const [Num,setNum] = useState();
    useEffect(() => {
        async function getData()
        {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Num}`);
            console.log(res);
        }
        
        getData();
    });
    
    return (
        <>
        <h1>Pokemon {Num} Page</h1>
        <select onChange = {(event)=>{setNum(event.target.value);}}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
        </select>
        </>
    );
}

export default Pokemon;
