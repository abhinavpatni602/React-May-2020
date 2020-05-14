import React, { useState } from 'react';
import Axios from 'axios';
import _ from 'lodash';
import { useRef } from 'react';


//npm install lodash

const DebounceSearch = (props) => {

    const [results, setResults] = useState([]);
    const debounceFn = useRef(null);

    const change = (e) => {

        e.persist();

        if (debounceFn.current == null) {
            debounceFn.current = _.debounce(async () => {
                const text = e.target.value;
                
                if (text.length >= 3) {
                    console.log(text);
                    
                    const url = "https://en.wikipedia.org/w/api.php";
                    const params = {
                        action: "opensearch",
                        format: "json",
                        limit: 20,
                        search: e.target.value,
                        origin: "*"
                    }
                    try {
                        const resp = await Axios.get(url, { params: params });
                        console.log(resp.data);
                        setResults(resp.data);

                    } catch (error) {
                        console.log("'error", error);
                    }
                }
            }, 500)
        };

        debounceFn.current();
    }
    

    function renderResults() {

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

            <div>
                <input type="Search" onChange={change} />

            </div>
            <div>
                {results.length > 0 ? renderResults() : null}
            </div>
        </div>
    )
}

export default DebounceSearch;