import {useParams} from 'react-router-dom';

const SpecificTodo = () => {

    const {id} = useParams();

    return (
        <h1>hola {id}</h1>
    );
}
 
export default SpecificTodo;