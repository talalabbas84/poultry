import React from 'react';
import {View, Text} from 'react-native';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import ReduxThunk from 'redux-thunk';
import reducers from './src/container/reducers';
import Navigation from './src/routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/src/integration/react';
import {store, persister} from './src/redux/store';

//const store = createStore(reducers , {} , applyMiddleware(ReduxThunk)) ;
// var firebaseConfig = {
//   apiKey: "AIzaSyAqjcU4K1cV_8wZHSVVc5V6-P872VpB6Sc",
//   authDomain: "pakpoultry-344fe.firebaseapp.com",
//   databaseURL: "https://pakpoultry-344fe.firebaseio.com",
//   projectId: "pakpoultry-344fe",
//   storageBucket: "pakpoultry-344fe.appspot.com",
//   messagingSenderId: "479522765910",
//   appId: "1:479522765910:web:e52cf1b616c90133134ff7"
// };
// firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    // <Provider store={store}>
    //  <Navigation/>
    // </Provider>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
