import {useParams, useHistory} from 'react-router-dom';
import useFetch from './useFetch';


const SpecificTodo = () => {

    const history = useHistory();
    const {id} = useParams();
    const {data} = useFetch('http://localhost:8000/lista/'+id);
    const eliminar = () =>{
        fetch('http://localhost:8000/lista/'+id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return (
        <div className="todos">
            <div className="mantener">
                <div className="todo-lista-esp">
                     <h2 className="h2-todo-esp"><i>Titutlo: </i>  {data && data.titulo}</h2>
                    <p className="p-todo-esp"><i>Por hacer: </i>  {data && data.contenido}</p>
                    <button className="eliminar-todo" onClick={eliminar}>Eliminar</button>
                </div>
            </div>   
        </div>
    );
}
 
export default SpecificTodo;