import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEM" actions

function* deletePokemon(action) {
    console.log('DELETE SAGA  is taking in',action.payload);

    try {
        yield axios.delete(`/api/pokemon/${action.payload}`)
        yield put ({
            type: "FETCH_POKEMON",
           
        })
    }
        catch(error) {
            console.log('error deleting', error);

        }

    }
    
function* deleteMember() {
    yield takeLatest('DELETE_POKEMON', deletePokemon); 
}

 
    export default deleteMember;