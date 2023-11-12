import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Home from "./pages/Home";

const RootLayout = () => {
  return (
    <div className="">
      <Topbar />

      <section className="flex">
        <LeftSidebar />
        <Home />
      </section>
    </div>
  );
};

export default RootLayout;
