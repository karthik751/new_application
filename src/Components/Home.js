import React, { useEffect, useState } from 'react';
import Cars from './Cars';
import ViewPage from './Viewpage';

function Home() {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    console.log(submittedData);
  }, [submittedData])

  const addSubmittedData = (data) => {
    console.log(data);
    setSubmittedData([...submittedData, data]);

    console.log(submittedData)
  };

  return (
    <div>
      <Cars addSubmittedData={addSubmittedData} />
      <ViewPage submittedData={submittedData} />
    </div>
  );
}

export default Home;
