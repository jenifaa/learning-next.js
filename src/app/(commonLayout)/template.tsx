import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
