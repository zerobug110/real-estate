import AsideBar from "../components/AsideBar/AsideBar";
import TopNav from "../components/navigation/TopNav";
import Home from "../pages/home/home";
import MainLayout from "./MainLayout";

function Layout() {
  return (
    <>
      {/* <div className='h-12 w-full bg-[red] '>
        <TopNav />
      </div> */}
      <div className='flex'>
        <AsideBar />
        <MainLayout />
      </div>
    </>
  );
}

export default Layout;
