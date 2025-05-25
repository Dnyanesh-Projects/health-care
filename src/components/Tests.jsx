import React from 'react';
import '../styles/Whole.css';

function Tests() {
  const tests = [
    {
      name: 'Blood Test',
      description: 'Complete blood count and biochemical analysis to assess overall health.',
      price: '$25',
      preparation: 'Fasting for 8 hours recommended.',
    },
    {
      name: 'X-Ray',
      description: 'Radiographic imaging to diagnose fractures, infections, or abnormalities.',
      price: '$50',
      preparation: 'Remove any metal objects from the body.',
    },
    {
      name: 'MRI Scan',
      description: 'Magnetic Resonance Imaging for detailed images of organs and tissues.',
      price: '$300',
      preparation: 'Inform technician if you have metal implants.',
    },
    {
      name: 'Covid-19 Test',
      description: 'PCR test to detect active coronavirus infection.',
      price: '$70',
      preparation: 'No special preparation required.',
    },
    {
      name: 'Urine Test',
      description: 'Urinalysis to detect infections, kidney disease, or diabetes.',
      price: '$20',
      preparation: 'Collect midstream urine sample.',
    },
    {
      name: 'ECG (Electrocardiogram)',
      description: 'Records the electrical activity of the heart to identify abnormalities.',
      price: '$40',
      preparation: 'Avoid caffeine and smoking 2 hours prior.',
    },
  ];

  return (
    <div className="tests-page">
      <h2>🧪 Available Medical Tests</h2>
      <p>Choose from a variety of diagnostic tests to monitor your health.</p>

      <div className="tests-list">
        {tests.map((test, index) => (
          <div key={index} className="test-card">
            <h3>{test.name}</h3>
            <p><strong>Description:</strong> {test.description}</p>
            <p><strong>Price:</strong> {test.price}</p>
            <p><strong>Preparation:</strong> {test.preparation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tests;
