import { useSelector } from 'react-redux';
import Header from './components/Header';
import Rules from './components/Rules';
import Step1 from './components/Step1';
import Step2 from './components/Step2';


function App() {
  const { step } = useSelector((state) => state.game);
  return (
    <div className="App">
      <Header />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <Rules />
    </div>
  );
}

export default App;
