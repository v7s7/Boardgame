import { useParams } from "react-router-dom";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Toast from "./Toast";

const gameData = {
  game1: {
    name: "لعبة السيطرة",
    boxes: [
      {
        id: "base",
        title: "لعبة السيطرة",
        price: 8,
        images: ["https://i.ibb.co/dJbbybcW/image.png"],
        details: (
          <div
            style={{
              textAlign: "right",
              fontSize: "14px",
              paddingRight: "10px",
            }}
          >
            <p>
              <strong>عدد اللاعبين:</strong> ٢-٦
            </p>
            <p>
              <strong>عدد الشخصيات:</strong> ٥
            </p>
            <p>
              <strong>:محتويات اللعبة</strong>
            </p>
            <ul style={{ listStyle: "disc", paddingRight: "20px" }}>
              <p>١٥ بطاقة (من كل شخصية ٣ بطاقات)</p>
              <p>٥٠ دينار (عملات)</p>
            </ul>
          </div>
        ),
      },
      {
        id: "plus",
        title: "السيطرة (بلس +)",
        price: 9.5,
        images: ["https://i.ibb.co/jkfSvSH1/Add-a-heading-6.png"],
        details: (
          <div
            style={{
              textAlign: "right",
              fontSize: "14px",
              paddingRight: "10px",
            }}
          >
            <p>
              <strong>عدد اللاعبين:</strong> ٢-٩
            </p>
            <p>
              <strong>عدد الشخصيات:</strong> ٧
            </p>
            <p>شخصية المحقق والدكتور 👨🏻‍⚕🕵🏻‍♂ (غير متوفرين بالنسخة العادية)</p>
            <p>بطاقة احتياطية لكل شخصية</p>
            <p>
              <strong>:⭐فايدة البلس</strong>
            </p>
            <ul style={{ listStyle: "disc", paddingRight: "20px" }}>
              <p>إضافة شخصيات جديدة</p>
              <p>عدد اللاعبين اكثر</p>
              <p>بطاقات احتياط لكل الشخصيات</p>
            </ul>
          </div>
        ),
      },
      {
        id: "addon",
        title: "الإضافة المطورة",
        price: 2,
        images: [
          "https://i.ibb.co/mCKP3775/Whats-App-Image-2025-03-23-at-05-49-22-67f989dd.jpg",
        ],
        details: (
          <div
            style={{
              textAlign: "right",
              fontSize: "14px",
              paddingRight: "10px",
            }}
          >
            <ul style={{ listStyle: "disc", paddingRight: "20px" }}>
              <p>٤ بطاقات للمحقق والدكتور</p>
              <p>بطاقة إضافية لكل شخصية</p>
              <p>١٠ دينار (عملات)</p>
            </ul>
          </div>
        ),
      },
    ],
  },

  game2: {
    name: "لعبة الكمين",
    boxes: [
      {
        id: "box1",
        title: "لعبة الكمين",
        price: 4.5,
        images: [
          "https://i.ibb.co/Qjf4q0vg/Whats-App-Image-2025-03-23-at-05-49-22-589f989b.jpg",
        ],
        details: (
          <div
            style={{
              textAlign: "right",
              fontSize: "14px",
              paddingRight: "10px",
            }}
          >
            <p>
              <strong>عدد اللاعبين:</strong> ٣-٦
            </p>
            <p>
              <strong>عدد البطاقات:</strong> ٣٢ بطاقة
            </p>
            <ul style={{ listStyle: "disc", paddingRight: "20px" }}>
              <p>٢٤ بطاقة قلب ❤️</p>
              <p>٨ ألغام 💣</p>
            </ul>
          </div>
        ),
      },
    ],
  },
};

const GamePage = ({ addToCart }) => {
  const { gameId } = useParams();
  const game = gameData[gameId];
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  return (
    <div
      className={`game-details-page 
  ${gameId === "game1" ? "game1-bg" : ""} 
  ${gameId === "game2" ? "game2-bg" : ""}`}
    >
      <button
        onClick={() => navigate(-1)}
        className={`back-btn ${gameId === "game1" ? "back-btn-dark" : ""}`}
      >
        ← Back
      </button>

      <h1>{game.name}</h1>
      <div className="cards-container">
        {game.boxes.map((box) => (
          <div key={box.id} className="game-card">
            <img
              src={box.images[0]}
              alt={box.title}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />

            <h3 className="game-name">{box.title}</h3>
            <div className="start-price">{box.details || box.desc}</div>
            <p className="price">{box.price} BHD</p>
            <button
              className="buy-now-btn"
              onClick={() => {
                addToCart({ gameId, box });
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  {
    showToast && <Toast message="✅ Added to cart!" />;
  }
};

export default GamePage;
