import LoginScreen from "./components/LoginScreen";
import CadasterScreen from "./components/CadasterScreen";

function App() {
  return (
    <>
      <section className="flex">
        <LoginScreen />
        <CadasterScreen />
      </section>
    </>
  );
}

export default App;
