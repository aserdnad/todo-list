import {useState,useEffect} from 'react';

const Todo = () => {

    const [lista,setLista] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8000/lista')
        .then(res =>{
            return res.json();
        }).then(data=>{
            setLista(data);
        })
    },[])

    return ( 
        <div className="todos">
            <div className="mantener">
                {lista && lista.map((hacer)=>(
                    <div className="todo-lista" key={hacer.id}>
                        <h2 className="h2-todo">{hacer.titulo}</h2>
                        <p className="p-todo">{hacer.contenido}</p>
                    </div>
                ))}     
            </div>   
        </div>
     );
}
 
export default Todo;