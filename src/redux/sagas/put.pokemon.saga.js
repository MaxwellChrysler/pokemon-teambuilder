import axios from 'axios'; 
import { object } from 'prop-types';
import { put, takeLatest } from 'redux-saga/effects';


function* putNickname(action){
    const objectToSend = {nickname: action.payload.nickname}
    try{ 
        console.log(action.payload," testing put payload")
        yield axios.put(`/api/put/${action.payload.id}`, objectToSend);

        yield put({ // Not sure if I need this 
            type: 'FETCH_POKEMON' // This could be breaking things because it could be reposting what originally there
        });
    } catch (error){
        console.log(error,'error in put Pokemon Saga');

        
    }
}
 
// in reference material its makePost
function* putName(){
    yield takeLatest('PUT_POKEMON', putNickname)
}

export default putName ;