import EditProject from './components/EditProject';
import FirstPage from './components/FirstPage';
import NewProjectForm from './components/NewProjectForm';
import Projects from './components/Projects';

function App() {
  return (
    <div className="main-container">
      <Projects />
      {/* <FirstPage /> */}
      {/* <NewProjectForm /> */}
      <EditProject />
    </div>
  );
}

export default App;
