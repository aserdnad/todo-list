import {useState,useEffect} from 'react';

const useFetch = (url) =>{
    
    const [data,setData] = useState(null);
    
    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(res =>{
            if (!res.ok){
                throw Error('sin respuesta del servidor');
            }
            return res.json();
        }).then(data=>{
            setData(data);
        })
        .catch(err => {
            if (err.name === 'AbortError'){
                console.log('abortar fetch');
            }
        })

        return ()=> abortCont.abort();
    },[url])

    return {data};
}

export default useFetch;