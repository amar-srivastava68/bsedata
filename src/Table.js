import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CustomCard = ({ rowData }) => (
  <div >
     <Card style={{ minHeight: "200px", padding: "10px", margin: "10px", borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}> 
      <Card.Body className="d-flex flex-column">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card.Title>{rowData.SLONGNAME}</Card.Title>
          <Card.Subtitle className=" text-muted" style={{marginTop:'2px'}}>
            {rowData.SCRIP_CD}
          </Card.Subtitle>
        </div>

        <br />
        <Card.Text className="text-primary font-italic mb-2">
          <span className="fw-bold">SUBJECT: </span> {rowData.NEWSSUB}
        </Card.Text>
        <Card.Text>
          <span className="fw-bold">Headlines: </span>
          {rowData.HEADLINE}
        </Card.Text>
        <Card.Text>
          <span className="fw-bold">Subcategory : </span>
          {rowData.SUBCATNAME}
        </Card.Text>
        <div className="mt-auto" style={{display: 'flex' , justifyContent: 'space-between'}}> {/* Push content to the bottom */}
         <div> <Card.Text>
            <span className="fw-bold">Exchange Disseminated Time :</span>{" "}
            {rowData.DissemDT}
          </Card.Text>
          <Card.Text>
            <span className="fw-bold">Time Taken :</span> {rowData.TimeDiff}
          </Card.Text>
          </div>
          <div style={{ marginTop: '23px', borderRadius: '15px' }} className="d-flex align-items-center">
  {rowData.NSURL && (
    <Button
      variant="primary"
      href={rowData.NSURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ borderRadius: '15px',    minWidth: '90px' }}
    >
      <span style={{ fontSize: '12px' }}>News URL</span>
    </Button>
  )}
  {!rowData.NSURL && (
    <Button
      variant="warning"
      href={rowData.NSURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ borderRadius: '15px', minWidth: '100px' }}
    >
      <span style={{ fontSize: '12px' }}>Not available</span>
    </Button>
  )}
</div>

        </div>
      </Card.Body>
    </Card>
  </div>
);

const Table = ({ data }) => (
  <div className="cards-container row">
    {data.map((row, index) => (
      <CustomCard key={index} rowData={row} />
    ))}
  </div>
);

export default Table;
