import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import { Provider } from 'react-redux'
import store from './store/Store'

function App() {
  return (   
    <Provider store={store}>
      <Navbar />
      <UserList />
    </Provider>
  );
}

export default App;
