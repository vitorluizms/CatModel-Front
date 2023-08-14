import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./Contexts/userContext.jsx";
import CatPage from "./pages/CatPage.jsx";
import CreateCat from "./pages/CreateCat.jsx";
import Home from "./pages/HomePage.jsx";
import SignIn from "./pages/SignInPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";

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
          <Route path="/cat/:id" element={<CatPage />} />
          <Route path="/create-cat" element={<CreateCat />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
