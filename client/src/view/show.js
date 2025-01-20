import React, { useEffect, useState } from "react";

function Show() {
  const [backendData, setBackendData] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        const detailsVisibility = {};
        data.forEach((product) => {
          detailsVisibility[product.product_id] = false;
        });
        setShowDetails(detailsVisibility);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleDetails = (productId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product List</h1>
      {backendData.length > 0 ? (
        <div>
          {backendData.map((product) => (
            <div key={product.product_id} style={styles.card}>
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.text}>
                <strong>Category:</strong> {product.category}
              </p>
              <p style={styles.text}>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p style={styles.text}>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p style={styles.text}>
                <strong>Rating:</strong> {product.rating} / 5
              </p>
              <button
                onClick={() => toggleDetails(product.product_id)}
                style={{
                  ...styles.button,
                  backgroundColor: showDetails[product.product_id]
                    ? "#DC3545"
                    : "#28A745",
                }}
              >
                {showDetails[product.product_id] ? "Hide Details" : "Show Details"}
              </button>
              {showDetails[product.product_id] && (
                <div style={styles.details}>
                  <h3 style={styles.detailsTitle}>Details:</h3>
                  <ul style={styles.list}>
                    <li>
                      <strong>Brand:</strong> {product.details.brand}
                    </li>
                    <li>
                      <strong>Model:</strong> {product.details.model}
                    </li>
                    <li>
                      <strong>Color:</strong> {product.details.color}
                    </li>
                    <li>
                      <strong>Connectivity:</strong> {product.details.connectivity}
                    </li>
                  </ul>
                  <p style={styles.smallText}>
                    <strong>Created At:</strong>{" "}
                    {new Date(product.created_at).toLocaleString()}
                  </p>
                  <p style={styles.smallText}>
                    <strong>Updated At:</strong>{" "}
                    {new Date(product.updated_at).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.loadingText}>Loading products...</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
  },
  productName: {
    fontSize: "1.5rem",
    color: "#007BFF",
    marginBottom: "10px",
    textTransform: "capitalize",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
    margin: "5px 0",
  },
  button: {
    padding: "10px 15px",
    fontSize: "1rem",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  details: {
    marginTop: "15px",
    padding: "15px",
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
  },
  detailsTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#333",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  smallText: {
    fontSize: "0.9rem",
    color: "#777",
    marginTop: "10px",
  },
  loadingText: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#666",
  },
};

export default Show;

