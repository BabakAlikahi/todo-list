import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  return (
    <main className="my-8 flex h-full gap-8">
      <ProjectSideBar />
      <NewProject />
    </main>
  );
}

export default App;
