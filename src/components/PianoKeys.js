// src/components/PianoKeys.js
import React, { useEffect, useState } from 'react';
import './PianoKeys.css';

const keys = [
  { note: 'C4', color: '#ff7675' },
  { note: 'D4', color: '#74b9ff' },
  { note: 'E4', color: '#55efc4' },
  { note: 'F4', color: '#fdcb6e' },
  { note: 'G4', color: '#e17055' },
  { note: 'A4', color: '#0984e3' },
  { note: 'B4', color: '#00b894' },
];

const PianoKeys = ({ activeNote }) => {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    if (activeNote) {
      setActiveKey(activeNote);
      setTimeout(() => setActiveKey(null), 300); // Flash key for 300ms
    }
  }, [activeNote]);

  return (
    <div className="piano">
      {keys.map((key) => (
        <div
          key={key.note}
          className={`key ${activeKey === key.note ? 'active' : ''}`}
          style={{ backgroundColor: activeKey === key.note ? key.color : '#dfe6e9' }}
        >
          {key.note}
        </div>
      ))}
    </div>
  );
};

export default PianoKeys;
