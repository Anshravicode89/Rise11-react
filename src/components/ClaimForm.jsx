import React from "react";
import "./ClaimForm.css";
import { FaFileAlt, FaMapMarkerAlt, FaLanguage } from "react-icons/fa"; // React Icons

const ClaimForm = () => {
  return (
    <div className="claim-form">
      <h3 className="form-title">
        File your Claim. <span>(Approx 5 Minutes)</span>
      </h3>
      <div className="form-container">
        {/* Claim Value Section */}
        <div className="form-section">
          <div className="form-header">
            <FaFileAlt className="icon" />
            <h4>Claim Value</h4>
          </div>
          <div className="form-group">
            <label>Contract Value</label>
            <div className="input-group">
              <input type="text" placeholder="10,00,00" />
              <select className="currency-dropdown">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Claim Value</label>
            <div className="input-group">
              <input type="text" placeholder="15,00,00" />
              <select className="currency-dropdown">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>
          <p className="calculation">150% of Contract Value</p>
        </div>

        {/* Place Section */}
        <div className="form-section">
          <div className="form-header">
            <FaMapMarkerAlt className="icon" />
            <h4>Place</h4>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Select the Place for proceedings" />
          </div>
          <p>Is the place for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="place-agreement" /> Yes
            </label>
            <label>
              <input type="radio" name="place-agreement" /> No
            </label>
          </div>
        </div>

        {/* Language Section */}
        <div className="form-section">
          <div className="form-header">
            <FaLanguage className="icon" />
            <h4>Language</h4>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Select the language for proceedings" />
          </div>
          <p>Is the language for the proceedings the one mentioned in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="language-agreement" /> Yes
            </label>
            <label>
              <input type="radio" name="language-agreement" /> No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
