import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEM" actions

function* fetchPokemon() {

    try {
        const pokemon = yield axios.get('/getPokemon')
        console.log('get one pokemon from db', pokemon);
        yield put ({
            type: "SET_POKEMON",
            payload: pokemon.data
        })}
        catch(error) {
            console.log('error getting items', error);

        }

    }
    
function* getPokemon() {
    yield takeLatest('FETCH_POKEMON', fetchPokemon);
}

 
    export default getPokemon;