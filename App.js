
import MainNavigator from './navigation';
import { Provider } from 'react-redux';

import { init } from './data'

init ()
.then( () => { console.log('Database Initialized') } )

.catch( (err) => {
  console.log('Database failed')
  console.log(err.message)

 } )



import store from './store'

export default function App() {

  return (
    <Provider store={store} >
        <MainNavigator />
    </Provider>
  );
}


