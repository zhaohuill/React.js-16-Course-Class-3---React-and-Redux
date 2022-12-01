import React from 'react';
import Pokemons from './components/Pokemons';

import { Provider } from 'react-redux';
/**+-El Componente Envolvente Padre "Provider" sirve para que todos los Componentes a los que envuelve puedan Leer los Datos de la "Store.js" y de los "Ducks" (Ducks
 * es una forma de modularizar partes de una aplicación de Redux juntando reducers, tipos de acciones y creadores de acciones juntos de una forma fácil de entender y
 * portar. El nombre del formato (ducks) viene de la pronunciación de la última sílaba de Redux en inglés).*/

/**+-Importamos la Store:_.*/
import generateStore from './redux/store';

function App() {
    const store = generateStore();

    return (
        <Provider store={store}>
            <Pokemons />
        </Provider>
    );
}

export default App;
