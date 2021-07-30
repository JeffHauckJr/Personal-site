import './App.css';
import Socials from './components/footer';
import Navigation from './components/nav';
import Pages from './components/pages';

function App() {
  return (
    <div className="App">
      <header className='header' style={{backgroundColor: 'black'}}>
				<Navigation/>
			</header>
			<main style={{ marginTop: "100px", justifyContent: 'center', alignItems: 'center'}}>
				<Pages/>
			</main>
      <footer className="user-footer" style={{position: 'absolute'}}>
            <Socials/>
     	</footer>
    </div>
  );
}

export default App;
