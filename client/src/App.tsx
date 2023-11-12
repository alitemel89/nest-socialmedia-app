import { BrowserRouter } from "react-router-dom";
// import SigninForm from "./_auth/forms/SigninForm";
import "./globals.css";

import ClerkProviderWithRoutes from "./_auth/forms/ClerkProviderWithRoutes";


export default function App() {
  return (
      <BrowserRouter>
        <ClerkProviderWithRoutes />
      </BrowserRouter>
  );
}
