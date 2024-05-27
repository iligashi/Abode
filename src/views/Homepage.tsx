import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Carousel, Modal, Form, Button, Row, Col } from "react-bootstrap";
import Header from "./Header";
import './css/home.css'; // Import the CSS

interface Property {
  PropertyID: number;
  Address: string;
  City: string;
  State: string;
  ZipCode: string;
  PropertyType: string;
  NumberOfBedrooms: number;
  NumberOfBathrooms: number;
  SquareFootage: number;
  YearBuilt: number;
  PurchaseDate?: Date;
  PurchasePrice?: number;
  Photos?: string[];
}

const Homepage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newProperty, setNewProperty] = useState<Partial<Property>>({
    Address: '',
    City: '',
    State: '',
    ZipCode: '',
    PropertyType: '',
    NumberOfBedrooms: 0,
    NumberOfBathrooms: 0,
    SquareFootage: 0,
    YearBuilt: 0,
    PurchaseDate: undefined,
    PurchasePrice: undefined,
    Photos: []
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Property[]>("https://localhost:7083/api/Property");
      console.log("Data fetched successfully:", response.data);
      setProperties(response.data);
    } catch (error: any) {
      handleAxiosError(error);
      setProperties([]);
    }
  };

  const handleAxiosError = (error: AxiosError) => {
    console.error("Axios Error:", error.message);
    if (error.response) {
      console.error("Response Data:", error.response.data);
    }
  };

  const handleShowModal = (property: Property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProperty({
      ...newProperty,
      [name]: name === "NumberOfBedrooms" || name === "NumberOfBathrooms" || name === "SquareFootage" || name === "YearBuilt" || name === "PurchasePrice"
        ? Number(value)
        : value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let apiUrl = '';
      switch (newProperty.PropertyType) {
        case 'CommercialListings':
          apiUrl = 'https://localhost:7083/api/CommercialListings';
          break;
        case 'LandListings':
          apiUrl = 'https://localhost:7083/api/LandListings';
          break;
        case 'PropertyRent':
          apiUrl = 'https://localhost:7083/api/PropertyRent';
          break;
        case 'PropertySale':
          apiUrl = 'https://localhost:7083/api/PropertySale';
          break;
        case 'VacationRental':
          apiUrl = 'https://localhost:7083/api/VacationRental';
          break;
        default:
          // Handle invalid property type
          break;
      }
      const response = await axios.post<Property>(apiUrl, newProperty);
      setProperties([response.data, ...properties]);
      resetForm();
      setShowForm(false);
    } catch (error: any) {
      handleAxiosError(error);
    }

  };

  const resetForm = () => {
    setNewProperty({
      Address: '',
      City: '',
      State: '',
      ZipCode: '',
      PropertyType: '',
      NumberOfBedrooms: 0,
      NumberOfBathrooms: 0,
      SquareFootage: 0,
      YearBuilt: 0,
      PurchaseDate: undefined,
      PurchasePrice: undefined,
      Photos: []
    });
  };

  return (
    <div>
      <Header />
      <section className="main">
        <div className="offers">
          <div className="property-grid">
            <div className="add-property">
              <Button variant="primary" onClick={() => setShowForm(true)}>Add New Property</Button>
            </div>

            {showForm && (
              <Form onSubmit={handleFormSubmit} className="property-form">
                <Row>
                  <Col>
                    <h4>Add New Property</h4>
                    <Form.Group controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" name="Address" value={newProperty.Address} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group controlId="formCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" name="City" value={newProperty.City} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group controlId="formState">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" name="State" value={newProperty.State} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group controlId="formZipCode">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="text" name="ZipCode" value={newProperty.ZipCode} onChange={handleInputChange} required />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formPropertyType">
                      <Form.Label>Property Type</Form.Label>
                      <Form.Control as="select" name="PropertyType" value={newProperty.PropertyType} onChange={handleInputChange} required>
                        <option value="">Select Property Type</option>
                        <option value="CommercialListings">Commercial Listings</option>
                        <option value="LandListings">Land Listings</option>
                        <option value="PropertyRent">Property Rent</option>
                        <option value="PropertySale">Property Sale</option>
                        <option value="VacationRental">Vacation Rental</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formNumberOfBedrooms">
                      <Form.Label>Number of Bedrooms</Form.Label>
                      <Form.Control type="number" name="NumberOfBedrooms" value={newProperty.NumberOfBedrooms} onChange={handleInputChange} required />
                    </Form.Group>
                    <Form.Group controlId="formNumberOfBathrooms">
                      <Form.Label>Number of Bathrooms</Form.Label>
                      <Form.Control type="number" name="NumberOfBathrooms" value={newProperty.NumberOfBathrooms} onChange={handleInputChange} required />
</Form.Group>
<Form.Group controlId="formSquareFootage">
<Form.Label>Square Footage</Form.Label>
<Form.Control type="number" name="SquareFootage" value={newProperty.SquareFootage} onChange={handleInputChange} required />
</Form.Group>
<Form.Group controlId="formYearBuilt">
<Form.Label>Year Built</Form.Label>
<Form.Control type="number" name="YearBuilt" value={newProperty.YearBuilt} onChange={handleInputChange} required />
</Form.Group>
<Form.Group controlId="formPurchaseDate">
<Form.Label>Purchase Date</Form.Label>
<Form.Control
type="date"
name="PurchaseDate"
value={newProperty.PurchaseDate ? newProperty.PurchaseDate.toISOString().substring(0, 10) : ''}
onChange={handleInputChange}
/>
</Form.Group>
<Button variant="primary" type="submit">
Post
</Button>
<Button variant="secondary" onClick={() => setShowForm(false)}>
Cancel
</Button>
</Col>
</Row>
</Form>
)}        {Array.isArray(properties) && properties.length > 0 ? (
  properties.map((property, index) => (
    <div className="property-card" key={index} onClick={() => handleShowModal(property)}>
      {property.Photos && (
        <Carousel interval={null}>
          {property.Photos.map((photo, photoIndex) => (
            <Carousel.Item key={photoIndex}>
              <img src={`data:image/jpeg;base64,${photo}`} alt={`Property ${property.PropertyID}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <div className="property-info">
        <h4>{property.PropertyType}</h4>
        <h5>${property.PurchasePrice ? property.PurchasePrice.toFixed(2) : "N/A"}</h5>
        <p>Address: {property.Address}</p>
        <p>City: {property.City}</p>
        <p>State: {property.State}</p>
        <p>Zip Code: {property.ZipCode}</p>
        <p>Bedrooms: {property.NumberOfBedrooms}</p>
        <p>Bathrooms: {property.NumberOfBathrooms}</p>
        <p>Square Footage: {property.SquareFootage} sqft</p>
        <p>Year Built: {property.YearBuilt}</p>
      </div>
    </div>
  ))
) : (
  <p>No properties available.</p>
)}
</div>
</div>
</section>

{selectedProperty && (
<Modal show={showModal} onHide={handleCloseModal}>
<Modal.Header closeButton>
<Modal.Title>Property Details</Modal.Title>
</Modal.Header>
<Modal.Body>
<h3>{selectedProperty.PropertyType}</h3>
<h4>Price: ${selectedProperty.PurchasePrice ? selectedProperty.PurchasePrice.toFixed(2) : "N/A"}</h4>
<p>Address: {selectedProperty.Address}</p>
<p>City: {selectedProperty.City}</p>
<p>State: {selectedProperty.State}</p>
<p>Zip Code: {selectedProperty.ZipCode}</p>
<p>Bedrooms: {selectedProperty.NumberOfBedrooms}</p>
<p>Bathrooms: {selectedProperty.NumberOfBathrooms}</p>
<p>Square Footage: {selectedProperty.SquareFootage} sqft</p>
<p>Year Built: {selectedProperty.YearBuilt}</p>
<p>Purchase Date: {selectedProperty.PurchaseDate ? new Date(selectedProperty.PurchaseDate).toLocaleDateString() : "N/A"}</p>
{selectedProperty.Photos && selectedProperty.Photos.length > 0 && (
  <Carousel interval={null}>
    {selectedProperty.Photos.map((photo, index) => (
      <Carousel.Item key={index}>
        <img src={`data:image/jpeg;base64,${photo}`} alt={`Property ${selectedProperty.PropertyID}`} />
      </Carousel.Item>
    ))}
  </Carousel>
)}
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleCloseModal}>
  Close
</Button>
</Modal.Footer>
</Modal>
)}

<section className="footer bg-light">
<div className="container py-5">
<hr />
<div className="row">
<div className="col-md-3 mb-4 mb-md-0"></div>
<div className="col-md-3 mb-4 mb-md-0">
  <div>
    <h3>Stay connected with ABODE</h3>
    <div className="icons">
      {/* Social Media Icons */}
    </div>
    <h2>Mundësuar nga Abode, Inc.</h2>
    <h5>Të gjitha të drejtat e rezervuara</h5>
    <p>Kushtet e përdorimit – </p>
    <p>Politika e Privatësisë</p>
  </div>
</div>
<div className="col-md-3 mb-4 mb-md-0">
  <div>
    <h3>Llogaria</h3>
    <p>Rezervimet</p>
    <p>Lista e deshirave</p>
    <p>Llogaria ime</p>
  </div>
</div>
<div className="col-md-3">
  <div>
    <h3>Kontakti</h3>
    <p>info@gmail.com</p>
    <p>Tel:+383 045 883 702</p>
    <p>Prishtinë, Kosovë</p>
    <p>.......</p>
  </div>
</div>
</div>
</div>
</section>
</div>
);
}

export default Homepage;
