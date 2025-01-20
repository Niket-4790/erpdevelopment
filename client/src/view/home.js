import React from "react";
import { Link } from "react-router-dom";
const backgroundImage = require("../utils/image1.jpg"); // Make sure to replace with your actual image path

const Home = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)", // Darker text shadow for better readability
        position: "relative",
      }}
    >
      {/* Semi-transparent dark overlay for better text visibility */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
          zIndex: "-1", // Place it behind the content
        }}
      />

      <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}>
        Welcome to the Product Dashboard
      </h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
        Explore our products, check details, and more. Use the links below to navigate.
      </p>
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "600" }}>
          Sections
        </h2>
        <ul style={{ listStyleType: "none", padding: 0, marginTop: "30px" }}>
          <li style={{ margin: "15px 0" }}>
            <Link
              to="/show"
              style={{
                textDecoration: "none",
                color: "#FFD700", // Gold color
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "12px 25px",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
                fontSize: "1.2rem",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 215, 0, 0.7)")
              } // Lighter gold on hover
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)")
              }
            >
              Show All Products
            </Link>
          </li>
          {/* Add more links for other sections if needed */}
        </ul>
      </section>
    </div>
  );
};

export default Home;
