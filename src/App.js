import React, { useState, useEffect } from "react";
import { ProgressBar } from 'react-bootstrap';
import Table from "./Table";
import axios from "axios";

function App() {
  const [excelData, setExcelData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bsedata");
      const responseData = response.data;
      console.log(responseData);
      setExcelData(responseData);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=600)`, 
      }}
    >
      <br/>

      <h1 className="text-center mb-6" style={{color: 'white'}}>Latest BSE Data</h1>
      <br/>

      {loading ? (
        <ProgressBar animated now={100} label="Loading data .." />
      ) : (
        <Table data={excelData} />
      )}
    </div>
  );
}

export default App;
