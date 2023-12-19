import React from 'react';
import * as XLSX from 'xlsx';

function Filter({ onExcelUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      onExcelUpload(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <label htmlFor="fileInput">Upload Excel File:</label>
      <input type="file" id="fileInput" onChange={handleFileChange} />
    </div>
  );
}

export default Filter;
