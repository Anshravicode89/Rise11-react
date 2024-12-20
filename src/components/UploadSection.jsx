import React from "react";
import { AiOutlineFileText, AiOutlineCloudUpload, AiOutlinePlus } from "react-icons/ai";
import "./UploadSection.css";

const UploadSection = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file:", file.name);
    }
  };

  return (
    <div className="upload-section">
      {/* Statement Section */}
      <div className="upload-card">
        <AiOutlineFileText className="icon statement-icon" />
        <h4>Statement</h4>
        <div className="upload-row">
          <label className="transparent-btn">
            <AiOutlineCloudUpload className="blue-icon" />
            <span>Upload a PDF</span>
            <input
              type="file"
              className="file-input"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>

      {/* Agreement under Disputes */}
      <div className="upload-card">
        <AiOutlineFileText className="icon agreement-icon" />
        <h4>Agreement under Disputes</h4>
        <div className="upload-row">
          <label className="transparent-btn">
            <AiOutlineCloudUpload className="blue-icon" />
            <span>Upload the Contract</span>
            <p>Max 2MB, PDF</p>
            <input
              type="file"
              className="file-input"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </label>
          <label className="transparent-btn">
            <AiOutlineCloudUpload className="blue-icon" />
            <span>Arbitration Agreement</span>
            <p>Max 2MB, PDF</p>
            <input
              type="file"
              className="file-input"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>

      {/* Additional Documentation */}
      <div className="upload-card">
        <AiOutlineFileText className="icon documentation-icon" />
        <h4>Additional Documentation</h4>
        <div className="upload-row">
          <label className="transparent-btn">
            <AiOutlineCloudUpload className="blue-icon" />
            <span>Upload the Contract</span>
            <p>Max 2MB, PDF</p>
            <input
              type="file"
              className="file-input"
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </label>
          <button className="add-btn">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
