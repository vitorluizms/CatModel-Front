import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignInPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/HomePage.jsx";
import UserProvider from "./Contexts/userContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
