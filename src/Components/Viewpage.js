import React, { useState, useEffect } from 'react';

const ViewPage = ({ submittedData }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  useEffect(() => {
    setFilteredData(submittedData || []);
  }, [submittedData]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterResults = (nameCondition) => {
    const filteredResults = submittedData
      ? submittedData.filter((data) => nameCondition(data))
      : [];
    setFilteredData(filteredResults);
    setCurrentPage(1);
  };

  const displayResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;

    return filteredData.slice(startIndex, endIndex).map((data, index) => (
      <div key={index}>
        <h3>Result {startIndex + index + 1}</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    ));
  };

  return (
    <div>
      <h2>View Page</h2>
      <label>
        Filter by Name:
        <input
          type="text"
          onChange={(e) =>
            filterResults((data) =>
            data.model.toLowerCase().includes(e.target.value.toLowerCase())
            )
          }
        />
      </label>

      {displayResults()}

      <div>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span> Page {currentPage} </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * resultsPerPage >= (filteredData || []).length}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ViewPage;



