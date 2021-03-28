import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const NewToDo = () => {

    const [titulo,setTitulo] = useState('');
    const [contenido,setContenido] = useState('');
    const url = 'http://localhost:8000/lista';
    const history = useHistory();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const lista = {titulo,contenido}
        console.log(lista);
        fetch(url, {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(lista)
        },).then(()=>{
            console.log('se anadio');
            history.push('/');
        });
    }

    return ( 
        <div className="new-todo-list">
            <form onSubmit={handleSubmit}>
                <div className="columna-todo">
                    <label>Titulo de la tarea pendiente</label>
                    <input type="text" 
                    required
                    value={titulo}
                    onChange= {(e)=> setTitulo(e.target.value)}
                    />
                    <label>Que esta pendiente por hacer</label>
                    <textarea 
                    required
                    value={contenido}
                    onChange= {(e)=> setContenido(e.target.value)}
                    >
                    </textarea>
                    <button className="agregar-lista">Agregar</button>
                </div>
            </form>
        </div>
     );
}
 
export default NewToDo;