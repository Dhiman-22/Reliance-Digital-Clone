import AllRoutes from "./Routes/AllRoutes";

import './App.css';

function App() {
  // const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className="App">
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}
      <AllRoutes/>
    </div>
  );
}

export default App;