import React, { useState } from 'react';
import './Styles.css';
import Modal from './Model';

function Cars() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    model: '',
    color: '',
    location: '',
    kms: '',
    years: '',
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.model.trim()) {
      alert('Please enter a value.');
      return;
    }
    
    setSubmittedData([...submittedData, formData]);
    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

    setFormData({
      model: '',
      color: '',
      location: '',
      kms: '',
      years: '',
    });
  };

  return (
    <div>
      <h2>Cars</h2>

      <div>
        <img src="./images/Maruti.png"  alt='Maruthi' className='red' style={{ cursor: 'pointer' }} onClick={openModal} />
      </div>
      <div>
        <img alt='Hyundai' className='yellow' style={{ cursor: 'pointer' }} onClick={openModal} />
      </div>
      <div>
        <img alt='Renault' className='green' style={{ cursor: 'pointer' }} onClick={openModal} />
      </div>
      <div>
        <img alt='BMW' className='grey' style={{ cursor: 'pointer' }} onClick={openModal} />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Form inside Modal</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Model:
            <input type="text" name="model" value={formData.model} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Color:
            <input type="text" name="color" value={formData.color} onChange={handleInputChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
          </label>
          <label>
            Kms:
            <input type="text" name="kms" value={formData.kms} onChange={handleInputChange} />
          </label>
          <label>
            Years:
            <input type="text" name="years" value={formData.years} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>

      {submittedData.length > 0 && (
        <div>
          <h2>All Submitted Data</h2>
          {submittedData.map((data, index) => (
            <div key={index}>
              <h3>Submission {index + 1}</h3>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cars;
