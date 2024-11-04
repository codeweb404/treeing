// src/components/FinalConfirm.js
import React from 'react';

function FinalConfirm({ onNavigate }) {
  return (
    <div className="final-confirm">
      <h2>Final Confirm</h2>
      <div className="file-list">
        <div className="file-item">
          <input type="checkbox" /> Robot_Display_Setup (IMG_5543.jpg)
        </div>
        <div className="file-item">
          <input type="checkbox" /> KMLA_OnlineDB_Diagram (IMG_5974.jpg)
        </div>
        {/* Add more items if needed */}
      </div>
      <button onClick={() => onNavigate('fileClassification')}>Final Confirm</button>
    </div>
  );
}

export default FinalConfirm;