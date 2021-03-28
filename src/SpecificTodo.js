import {useParams} from 'react-router-dom';
import useFetch from './useFetch';

const SpecificTodo = () => {

    const {id} = useParams();
    const {data} = useFetch('http://localhost:8000/lista/'+id);
    console.log(data);
    return (
        <div className="todos">
            <div className="mantener">
                <div className="todo-lista" >
                     <h2 className="h2-todo">{data && data.titulo}</h2>
                    <p className="p-todo">{data && data.contenido}</p>
                </div>
            </div>   
        </div>
    );
}
 
export default SpecificTodo;