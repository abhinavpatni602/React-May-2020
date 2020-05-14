import React, {useState, useEffect, useRef} from 'react';
import Axios from 'axios';

// function Search(){

// }

// state = {
//     text: ""
// }
// setState

// const arr =  useState(""); //arr => [prop fn]
// const text = arr[0];
// const setText = arr[1];


const Search  = (props) => {


    const searchCount = useRef(0); 
    const [text, setText] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        //component did mount
        console.log("in the effect ");
        searchRef.focus();
        // componenet did unmount
        return () => {
            console.log("in the effect clenaup");
        }
    }, []);

    useEffect(() => {
        //component did update
        console.log("in the effect for text change");
    }, [text])

    useEffect(() => {
        //component did update
        console.log("in the effect for results change");
    }, [results])




    let searchRef = null;


    const change = (e) => {

        
        setText(e.target.value)
    }
    async function search(){

        searchCount.current++;

        const url = "https://en.wikipedia.org/w/api.php";
        const params = {
            action: "opensearch",
            format: "json",
            limit: 20,
            search: text,
            origin: "*"
        }
        try {
            const resp = await Axios.get(url, {params: params});
            console.log(resp.data);
            setResults(resp.data);

        } catch (error) {
            console.log("'error", error);
        }
        
    }

    function renderResults(){

        return results[1].map((item, index) => {
            return (
                <div key={index}>
                    <p>{item}</p>
                </div>
            )
        })
    }

    return (
        <div>
            <h3>Search</h3>
            <p>
                SearchCount: {searchCount.current}
            </p>
            <div>
                <input type="Search" value={text} onChange={change} ref={r => {searchRef = r}}/>
                &nbsp;
                <button onClick={search}>Search</button>
                <p>Searching for {text}</p>
            </div>
            <div>
                {results.length > 0 ? renderResults() : null}
            </div>
        </div>
    )
}

export default Search;