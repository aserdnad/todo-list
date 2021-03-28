import {Link} from 'react-router-dom';
import useFetch from './useFetch';

const Todo = () => {

    const {data} = useFetch('http://localhost:8000/lista');
    return ( 
        <div className="todos">
            <div className="mantener">
                    {data && data.map((hacer)=>(
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