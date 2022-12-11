import Global from "./styles/global";
import { RoutesMain } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Global />

        <UserProvider>
            <RoutesMain/>
        </UserProvider>

        <ToastContainer>
          
        </ToastContainer>
    </>
  );
}

export default App;
