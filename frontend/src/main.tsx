import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Dashboard, DashBoardHome, Packages, SupportDD, Transactions } from "./pages/Dashboard";
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import './style/App.css'
import './style/Form.css'
import "./style/Dashboard.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Index } from './pages/Home'
import { About, Support} from './pages/Others'
import PageNotFound from './pages/404'
import './style/Home.css'
import { Admin } from './pages/Admin';
import { Auth, AuthContextProvider, useAuth } from './AuthManger/AuthContext';
import { authService } from './AuthManger/AuthService';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>
);

function App() {
    
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/support" element={<Support />} />
              </Route>
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<DashBoardHome />} />
                  <Route path="/dashboard/packages" element={<Packages />} />
                  <Route path="/dashboard/usersupport" element={<SupportDD />} />
                  <Route path="/dashboard/transactions" element={<Transactions />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
  );
}