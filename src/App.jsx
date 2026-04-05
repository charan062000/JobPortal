import "./App.css";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import jobData from "./jobDummyData.js";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Searchbar />
      {jobData.map((job) => (
        <Jobcard key={job.id} {...job} />
      ))} 
      
    </div>
  );
}

export default App;
