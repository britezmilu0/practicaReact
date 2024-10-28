import { createRoot } from 'react-dom/client'
import  Saludo from './saludo.jsx';
import  App  from './app.jsx';

createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Saludo usuario={"Milagros"}/>

    </>,
)
