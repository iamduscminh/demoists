// Popup.js
import React from "react";
import "./Popup.css"; // CSS styling for the popup

const Popup = ({
  type, // 'alert' or 'confirm'
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <p className="popup-message">{message}</p>
        {type === "confirm" ? (
          <div className="popup-buttons">
            <button className="btn-confirm" onClick={onConfirm}>
              Confirm
            </button>
            <button className="btn-cancel" onClick={onCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="btn-alert" onClick={onCancel}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Popup;
