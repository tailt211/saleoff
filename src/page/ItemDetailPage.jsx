import { Link, useParams } from "react-router-dom";
import data from "../data/data";

const ItemDetailPage = () => {
  const { id } = useParams();

  const itemDetail = data.find((item) => {
    return item.id === id;
  });

  const checkoutParams = () => {
    const params = new URLSearchParams();
    params.append(
      "product",
      JSON.stringify({ name: itemDetail.name, price: itemDetail.discountPrice })
    );
    return params;
  };

  return (
    <div
      style={{
        padding: "2.5rem 0",
        margin: "5rem 2.5rem",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: "6px",
          display: "flex",
          padding: "2.5rem",
        }}
      >
        <img
          src={itemDetail.image}
          alt="img"
          style={{ width: "300px", height: "300px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
            }}
          >
            {itemDetail.name}
          </span>
          <span
            style={{
              textAlign: "left",
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
              fontSize: "1.25rem",
            }}
          >
            {itemDetail.description}
          </span>

          <span
            style={{
              fontSize: "1.5rem",
              color: "rgba(156, 163, 175, 1)",
              textDecoration: "line-through",
            }}
          >
            {itemDetail.price}
          </span>
          <span
            style={{
              fontSize: "1.875rem",
              color: "red",
              fontWeight: 700,
              marginBottom: "0.25rem",
            }}
          >
            {itemDetail.discountPrice}
          </span>
          <span>Đã bán {itemDetail.sold}</span>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ fontSize: "11px" }}>{itemDetail.rating}/5</span>
            <span>{itemDetail.location}</span>
          </div>

          <div style={{ width: "100%" }}>
            <Link to={`/checkout?${checkoutParams()}`}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "1.25rem 5rem",
                  cursor: "pointer",
                }}
              >
                Mua ngay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
