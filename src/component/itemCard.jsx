import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Link to={`/${item.id}`}>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: ".5rem",
          boxShadow: "0 1px 2px 0 rgba(0,0,0,.05)",
          cursor: "pointer",
          padding: "0.75rem",
          textDecoration: "none",
        }}
      >
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img
            src={item.image}
            alt="product"
            style={{
              maxHeight: "205px",
              height: "auto",
              maxWidth: "100%",
              borderRadius: ".5rem",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "0.5rem",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "1.25rem",
              overflow: "hidden",
              lineHeight: "1.25rem",
              height: "2.6rem",
              marginBottom: "0.5rem",
            }}
          >
            {item.name}
          </span>

          <span
            style={{
              color: "rgba(156, 163, 175, 1)",
              textDecoration: "line-through",
            }}
          >
            {item.price}
          </span>

          <span
            style={{ color: "red", fontWeight: 700, marginBottom: "0.25rem" }}
          >
            {item.discountPrice}
          </span>
          <span>Đã bán {item.sold}</span>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "0.5rem",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "11px" }}>{item.rating}/5</span>
            <span>{item.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
