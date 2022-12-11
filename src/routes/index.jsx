import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "../ProtectedRoutes";

export const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/" element= {<Login />} />
            <Route path="*" element= {<Login />} />

            <Route element={<ProtectedRoutes/>}>
                <Route path="/register" element= {<Register />} />
                <Route path="/dashboard" element= {<Dashboard />} />
            </Route>
        </Routes>
    )
}