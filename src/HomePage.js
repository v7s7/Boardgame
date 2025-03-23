import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  const games = [
    {
      id: "game1",
      name: "لعبة السيطرة",
      image: "https://i.ibb.co/dJbbybcW/image.png",

      fullPrice: "BD 8.000",
    },
    {
      id: "game2",
      name: "لعبة الكمين",
      image: "https://i.ibb.co/G4QJtq5w/back-design-line-copy.png",
      fullPrice: "BD 4.500",
    },
  ];

  return (
    <div className="homepage">
      {/* <h2 className="section-title">Ramadan Offers</h2> */}
      {/* <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/cart" className="buy-now-btn">
          🛒 Go to Cart
        </Link>
      </div> */}

      <div className="cards-container">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <span className="offer-tag">{game.offer}</span>
            <img src={game.image} alt={game.name} className="game-img" />
            <h3 className="game-name">{game.name}</h3>
            {/* <p className="start-price">Starting from</p> */}
            <p className="price">{game.priceStart}</p>
            <Link to={`/game/${game.id}`} className="buy-now-btn">
              Buy now {game.fullPrice}
            </Link>
          </div>
        ))}
      </div>
      <div
        id="contact"
        style={{
          padding: "50px",
          backgroundColor: "#f1f1f1",
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <h2>Contact Us</h2>
        <p style={{ marginBottom: "20px" }}>Reach out anytime!</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          <a
            href="https://wa.me/97339199749"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#25D366",
              fontSize: "20px",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-whatsapp" style={{ marginRight: "8px" }}></i>
            39199749
          </a>

          <a
            href="https://www.instagram.com/booardgame.bh/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#E4405F",
              fontSize: "20px",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-instagram" style={{ marginRight: "8px" }}></i>
            booardgame.bh
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
