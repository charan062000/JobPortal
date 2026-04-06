import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
// import jobData from "./jobDummyData.js";
import {
  collection,
  query,
  where,
  getDocs,
  QuerySnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase.config.js";

function App() {
  const [jobs, setJobs] = useState([]);
  const tempJobs = [];
  const fetchJobs = async () => {
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, "=>", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async () => {
    const tempJobs = []
    const jobRef = query(collection(db, "jobs"));
    const q = query(
      jobRef,
      where("type", "==", "jobCriteria.type"),
      where("title", "==", "jobCriteria.title"),
      where("experience", "==", "jobCriteria.experience"),
      where("location", " == ", "jobCriteria.location"),
      orderBy("postedOn", "desc"),
    );
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, "=>", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Searchbar fetchJobsCustom={fetchJobsCustom} />
      {jobs.map((job) => (
        <Jobcard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
