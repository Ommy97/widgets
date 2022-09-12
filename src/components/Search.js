import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = ()=> {
    const[term, setTerm]=useState('programming');
    const [debouncedTerm, setDebauncedTerm]= useState(term);
    const[results, setResults]= useState([])


    useEffect(()=> {
        const timerId = setTimeout(()=> {
            setDebauncedTerm(term);
        },1000);

        return () => {
            clearTimeout(timerId)
        };
    }, [term])

    useEffect(()=> {
      const search = async ()=> {
       const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action:'query',
                list:'search',
                origin:'*',
                format:'json',
                srsearch:debouncedTerm
            },
        });

        setResults(data.query.search)
      };
      search();

 
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a className='ui button' href={'htpps://en.wikipedia.org?curid='+'{result.pageid}'}>Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetinnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Serach Term</label>
                    <input
                    value={term}
                    onChange={(e)=> setTerm(e.target.value)}
                    className='input'/>
                </div>
            </div>
            <div className='ui celled list'> {renderedResults}</div>
        </div>
    );
;}

export default Search;