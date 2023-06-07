import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const url = window.location.href;
  const params = new URLSearchParams(new URL(url).search);
  const productValue = params.get("product");
  const product = JSON.parse(decodeURIComponent(productValue));

  const [submitData, setSubmitData] = useState({
    name: product.name,
    price: product.price,
    amount: 1,
  });

  useEffect(() => {});

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(submitData);
  };

  return (
    <div
      style={{
        padding: "1.5rem",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Gửi thông tin qua email</h1>

      <div>
        <form
          onSubmit={onHandleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            marginBottom: "20px",
            gap: "6px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Tên sản phẩm: </label>
            <input
              type="text"
              disabled
              onChange={(e) =>
                setSubmitData({ ...submitData, name: e.target.value })
              }
              value={submitData.name}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>giá sản phẩm: </label>
            <input
              type="text"
              disabled
              onChange={(e) =>
                setSubmitData({ ...submitData, price: e.target.value })
              }
              value={submitData.price}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Số lượng: </label>
            <input
              type="number"
              required
              onChange={(e) =>
                setSubmitData({ ...submitData, amount: e.target.value })
              }
              value={submitData.amount}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Tên khách hàng: </label>
            <input
              type="text"
              required
              onChange={(e) =>
                setSubmitData({ ...submitData, customerName: e.target.value })
              }
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Số điện thoại: </label>
            <input
              type="text"
              required
              onChange={(e) =>
                setSubmitData({ ...submitData, phone: e.target.value })
              }
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontWeight: "bold" }}>Địa chỉ: </label>
            <input
              type="text"
              required
              onChange={(e) =>
                setSubmitData({ ...submitData, address: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
              backgroundColor: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "1.5rem",
            }}
          >
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
