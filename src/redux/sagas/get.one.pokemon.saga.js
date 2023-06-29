// import axios from 'axios';
// import {put, takeLatest} from 'redux-saga/effects';

// // worker Saga: will be fired on "FETCH_ITEM" actions

// function* fetchOnePokemon(action) {

//     try {
//         const pokemon = yield axios.get(`/getPokemon${action.payload.id}`)
//         console.log('get one pokemon from db', pokemon);
//         yield put ({
//             type: "SET_POKEMON",
//             payload: pokemon.data
//         })}
//         catch(error) {
//             console.log('error getting items', error);

//         }

//     }
    
// function* getOnePokemon() {
//     yield takeLatest('FETCH_POKEMON', fetchOnePokemon);
// }

 
//     export default getOnePokemon;