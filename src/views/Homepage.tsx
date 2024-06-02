import React, { useState, useEffect, ChangeEvent } from "react";
import axios, { AxiosError } from "axios";
import { Modal, Form, Button, Col, Card, Row } from "react-bootstrap";
import Header from "./Header";
import './css/home.css'; 

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

interface PropertyRent extends Property {
  RentID?: number;
  TenantID?: number;
  LandlordID?: number;
  RentStartDate?: string;
  RentEndDate?: string;
  RentAmount?: number;
}

interface PropertySale extends Property {
  SaleID?: number;
  SaleDate?: Date;
  SalePrice?: number;
}

interface VacationRental extends Property {
  DailyRate?: number;
}

interface LandListings extends Property {
  SalePrice?: number;
}

interface CommercialListings extends Property {
  // No additional properties specific to Commercial Listings
}

const Homepage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newProperty, setNewProperty] = useState<Partial<PropertyRent & PropertySale & VacationRental & LandListings & CommercialListings>>({
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
    Photos: [],
    RentID: undefined,
    TenantID: undefined,
    LandlordID: undefined,
    RentStartDate: undefined,
    RentEndDate: undefined,
    RentAmount: undefined,
    SaleID: undefined,
    SaleDate: undefined,
    SalePrice: undefined,
    DailyRate: undefined
  });

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get<Property[]>("https://localhost:7083/api/Property");
      console.log("Data fetched successfully:", response.data);
      setProperties(response.data || []); 
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let updatedValue: string | number | undefined;

    if (name === "SaleDate") {
      // Ensure that if the value is not empty, it's converted to a string
      updatedValue = value ? new Date(value).toISOString().substring(0, 10) : undefined;
    } else {
      // For other fields, keep the value as is
      updatedValue = value;
    }

    setNewProperty({
      ...newProperty,
      [name]: name === "NumberOfBedrooms" || name === "NumberOfBathrooms" || name === "SquareFootage" || name === "YearBuilt" || name === "PurchasePrice" || name === "TenantID" || name === "LandlordID" || name === "RentAmount" || name === "SalePrice" || name === "DailyRate"
        ? Number(updatedValue)
        : updatedValue
    });
  };
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const uploadedPhotos = files.map(file => URL.createObjectURL(file));
      setNewProperty({ ...newProperty, Photos: uploadedPhotos });
    }
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
      Photos: [],
      RentID: undefined,
      TenantID: undefined,
      LandlordID: undefined,
      RentStartDate: undefined,
      RentEndDate: undefined,
      RentAmount: undefined,
      SaleID: undefined,
      SaleDate: undefined,
      SalePrice: undefined,
      DailyRate: undefined
    });
  };
  const renderPhotoSlider = (photos: string[]) => {
    return (
      <div id="propertyPhotos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {photos.map((photo, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={photo} className="d-block w-100" alt={`Property Photo ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#propertyPhotos" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#propertyPhotos" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  const renderAdditionalFields = () => {
    if (newProperty.PropertyType === "PropertyRent") {
      return (
        <>
          
          <Form.Group controlId="formTenantID">
            <Form.Label>Tenant ID</Form.Label>
            <Form.Control type="number" name="TenantID" value={newProperty.TenantID || ''} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formLandlordID">
            <Form.Label>Landlord ID</Form.Label>
            <Form.Control type="number" name="LandlordID" value={newProperty.LandlordID || ''} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formRentStartDate">
            <Form.Label>Rent Start Date</Form.Label>
            <Form.Control type="date" name="RentStartDate" value={newProperty.RentStartDate || ''} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formRentEndDate">
            <Form.Label>Rent End Date</Form.Label>
            <Form.Control type="date" name="RentEndDate" value={newProperty.RentEndDate || ''} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formRentAmount">
            <Form.Label>Rent Amount</Form.Label>
            <Form.Control type="number" name="RentAmount" value={newProperty.RentAmount || ''} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formPhotos">
                  <Form.Label>Upload Photos</Form.Label>
                  <Form.Control type="file" multiple onChange={handleFileInputChange} />
                </Form.Group>
              
          
        </>
      );
    } else if (newProperty.PropertyType === "PropertySale") {
      return (
        <>
          <Form.Group controlId="formSaleDate">
            <Form.Label>Sale Date</Form.Label>
            <Form.Control type="date"name="SaleDate" value={(newProperty.SaleDate || '').toString()} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formSalePrice">
            <Form.Label>Sale Price</Form.Label>
            <Form.Control type="number" name="SalePrice" value={newProperty.SalePrice || ''} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formPhotos">
                  <Form.Label>Upload Photos</Form.Label>
                  <Form.Control type="file" multiple onChange={handleFileInputChange} />
                </Form.Group>
        </>
      );
    } else if (newProperty.PropertyType === "VacationRental") {
      return (
        
        <Form.Group controlId="formDailyRate">
          <Form.Label>Daily Rate</Form.Label>
          <Form.Control type="number" name="DailyRate" value={newProperty.DailyRate || ''} onChange={handleInputChange} />
        </Form.Group>
        
      );
    } else if (newProperty.PropertyType === "LandListings") {
      return (
        <Form.Group controlId="formSalePrice">
          <Form.Label>Sale Price</Form.Label>
          <Form.Control type="number" name="SalePrice" value={newProperty.SalePrice || ''} onChange={handleInputChange} />
        </Form.Group>
        
      );
    } else {
      return null;
    }
  };

  return (
    <div>
    <Header />
    <div className="container mt-5">
      <Row>
        <Col>
          <h2 className="mb-4">Explore Properties</h2>
          <Button onClick={() => setShowForm(true)} className="mb-4">List New Property</Button>
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Property Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedProperty && (
                  <div>
                    <p><strong>Address:</strong> {selectedProperty.Address}</p>
                    <p><strong>City:</strong> {selectedProperty.City}</p>
                    <p><strong>State:</strong> {selectedProperty.State}</p>
                    <p><strong>Zip Code:</strong> {selectedProperty.ZipCode}</p>
                    <p><strong>Price:</strong> ${selectedProperty.PurchasePrice}</p>
                    <p><strong>Sqft:</strong> {selectedProperty.SquareFootage} sqft</p>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col>
            {showForm && (
              <Form onSubmit={handleFormSubmit}>
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
                <Form.Group controlId="formPhotos">
                  <Form.Label>Upload Photos</Form.Label>
                  <Form.Control type="file" multiple onChange={handleFileInputChange} />
                </Form.Group>
                <Form.Group controlId="formPropertyType">
                  <Form.Label>Property Type</Form.Label>
                  <Form.Control as="select" name="PropertyType" value={newProperty.PropertyType} onChange={handleInputChange} required>
                    <option value="">Select Property Type</option>
                    <option value="CommercialListings">Commercial Property</option>
                    <option value="LandListings">Land Property</option>
                    <option value="PropertyRent">Rent Property</option>
                    <option value="PropertySale">Sale Property</option>
                    <option value="VacationRental">Vacation Rental</option>
                  </Form.Control>
                </Form.Group>
                {renderAdditionalFields()}
                <Button variant="primary" type="submit">List Property</Button>
              </Form>
            )}
          </Col>
        </Row>
        <Row>
        {Array.isArray(properties) && properties.map((property) => (
            <Col key={property.PropertyID} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{property.Address}</Card.Title>
                  <Card.Text>
                    {property.City}, {property.State} {property.ZipCode}
                    <br />
                    <strong>Price:</strong> ${property.PurchasePrice}
                    <br />
                    <strong>Sqft:</strong> {property.SquareFootage} sqft
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleShowModal(property)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <footer>
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
                <h3>My Account</h3>
                <p>Reservations</p>
                <p>Wishlist</p>
                <p>My Profile</p>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <h3>Contact Us</h3>
                <p>Address: 123 Main St, City, State</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Email: info@abode.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
  );
};

export default Homepage;

