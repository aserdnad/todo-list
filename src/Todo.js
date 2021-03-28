import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const Todo = () => {

    const [lista,setLista] = useState(null);
    const url = 'http://localhost:8000/lista';

    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(res =>{
            if (!res.ok){
                throw Error('sin respuesta del servidor');
            }
            return res.json();
        }).then(data=>{
            setLista(data);
        })
        .catch(err => {
            if (err.name === 'AbortError'){
                console.log('abortar fetch');
            }
        })

        return ()=> abortCont.abort();
    },[])

    return ( 
        <div className="todos">
            <div className="mantener">
                    {lista && lista.map((hacer)=>(
                    <Link to={`/specificlist/${hacer.id}`}>
                        <div className="todo-lista"  key={hacer.id}>
                            <h2 className="h2-todo">{hacer.titulo}</h2>
                            <p className="p-todo">{hacer.contenido}</p>
                        </div>
                    </Link>
                ))}     
            </div>   
        </div>
     );
}
 
export default Todo;