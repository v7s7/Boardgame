import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, removeFromCart }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.box.price * item.quantity,
    0
  );
  const shipping = 1.5;
  const finalTotal = total + shipping;

  const message = `السلام عليكم، طلبي هو:\n${cart
    .map(
      (item, i) =>
        `${i + 1}. ${item.box.title} - ${item.box.price} BHD x${
          item.quantity || 1
        }`
    )
    .join("\n")}
    
  المجموع: ${total.toFixed(2)} BHD
  التوصيل: ${shipping.toFixed(2)} BHD
  الإجمالي: ${finalTotal.toFixed(2)} BHD
  
  الاسم: ${form.name}
  رقم التواصل: ${form.phone}
  العنوان: ${form.address}
  ملاحظات: ${form.notes}`;

  const whatsappLink = `https://wa.me/97339199749?text=${encodeURIComponent(
    message
  )}`;
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item, idx) => (
            <div key={idx} className="cart-item">
              <p>
                <strong>{item.box.title}</strong> —{" BHD "}
                {item.box.price}
                {item.quantity > 1 && (
                  <span style={{ marginLeft: "10px", color: "#888" }}>
                    (x{item.quantity})
                  </span>
                )}
              </p>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(idx)}
              >
                Remove
              </button>
            </div>
          ))}

          <h5>Subtotal: {total.toFixed(2)} BHD</h5>
          <h5>Shipping: {shipping.toFixed(2)} BHD</h5>
          <h2>Total: {finalTotal.toFixed(2)} BHD</h2>
          <h3>Benefit Pay</h3>
          <p>
            <strong>IBAN:</strong> BH44BIBB00200003490666
          </p>
          <img
            src="https://i.ibb.co/1fV5txDK/IMG-5690.jpg"
            alt="Bank Transfer QR"
            style={{
              width: "200px",
              marginTop: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
            الرجاء الدفع و ارسال صورة من التحويل{" "}
          </p>
          <div className="checkout-form">
            <input
              placeholder="الإسم"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              placeholder="رقم التواصل"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              placeholder="العنوان : البيت , الطريق , المجمع"
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />

            <textarea
              placeholder="أي معلومات إضافية؟"
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="buy-now-btn">
                Confirm Order via WhatsApp
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
