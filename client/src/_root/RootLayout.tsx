import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

const RootLayout = () => {
  return (
    <div className="">
      <Topbar />

      <section className="flex">
        <LeftSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </section>
    </div>
  );
};

export default RootLayout;
