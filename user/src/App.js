import PageTop from "./components/PageTop/PageTop";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
      {/* <HomePage /> */}
      <TopNavigation />
      <PageTop pagetitle="Get My Services" />
    </>
  );
}

export default App;
