import Global from "./styles/global";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { DashboardProvider } from "./contexts/DashboardContext";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <>
      <Global />

        <UserProvider>
          <DashboardProvider>
            <TechProvider>
              <RoutesMain/>
            </TechProvider>
          </DashboardProvider>
        </UserProvider>

        <ToastContainer>
        </ToastContainer>
    </>
  );
}

export default App;
