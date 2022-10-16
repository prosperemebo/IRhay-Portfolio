import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import './sass/main.scss';

function App() {
  return (
    <div className='App'>
      <Loader />
      <Header />
    </div>
  );
}

export default App;
