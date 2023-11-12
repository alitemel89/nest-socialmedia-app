import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import { dark } from '@clerk/themes';
import RootLayout from "@/_root/RootLayout";

export default function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY!}
      navigate={(to) => navigate(to)}
      appearance={{
        baseTheme: dark
      }}
    >
      <Routes>
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />

        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />

        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <RootLayout />
              </SignedIn>
              <SignedOut>
                <AuthLayout />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}
