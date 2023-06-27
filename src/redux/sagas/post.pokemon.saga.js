import axios from 'axios'; 
import { put, takeLatest } from 'redux-saga/effects';


function* postPokemon(action){
    try{ 
        yield axios.post('/api/pokemon/', action.payload);

        yield put({
            type: 'FETCH_POKEMON'
        });
    } catch (error){
        console.log(err,'error in postPokemon Saga');
        if(error.response.status ===500){

            yield put ({type:'POST_ERR'});
        }
    }
}
 
// in reference material its makePost
function* addTeam(){
    yield takeLatest('POST_POKEMON', postPokemon)
}

export default addTeam ;