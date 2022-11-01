import Analysis from "./components/Analysis/Analysis";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import Services from "./components/Services/Services";
import Summary from "./components/Summary/Summary";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";


function App() {
  return (
    <>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProjects />
    </>
  );
}

export default App;
