import axios from 'axios'; 
import { put, takeLatest } from 'redux-saga/effects';


function* putNickname(action){
    try{ 
        console.log(action.payload," testing put payload")
        yield axios.put('/api/pokemon/', action.payload);

        yield put({ // Not sure if I need this 
            type: 'FETCH_POKEMON'
        });
    } catch (error){
        console.log(err,'error in put Pokemon Saga');
        if(error.response.status ===500){

            yield put ({type:'POST_ERR'});
        }
    }
}
 
// in reference material its makePost
function* putName(){
    yield takeLatest('PUT_POKEMON', putNickname)
}

export default putName ;