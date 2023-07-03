import { all, put } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import addTeam from './post.pokemon.saga';
import getPokemon from './get.pokemon.saga';
import getOnePokemon from './get.one.pokemon.saga'
import deleteMember from './delete.pokemon.saga'
import putName from './put.pokemon.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    addTeam(), 
    getPokemon(),// getting them from the api
    // getOnePokemon(), no longer needed 
    deleteMember(),
    putName(),

  ]);
}
