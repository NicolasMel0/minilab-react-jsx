import 'bootstrap/dist/css/bootstrap.min.css';
import Ola from './Greeting';
import Card from './Profile';
import List from './ToDoList';
import Face from './EmotionMeter';
// Não se esqueça de importar os componentes!

function App() {
    return (
        <div className="container mt-5 mb-5 col-6">
            {/* Não se esqueça de invocar seus componentes aqui! */}
            <Ola />

            <small>Interpolação de variáveis</small>

            <small>Imagens</small>
            <hr />
            <Card />

            <small>Renderização de listas</small>
            <hr />
            <List />

            <small>Renderização condicional</small>
            <hr />
            <Face />
        </div>
    );
}

export default App;
