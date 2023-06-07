import bn1Image from "../assets/bn1.jpg";
import ItemCard from "../component/itemCard";
import data from "../data/data";

const HomePage = () => {
  return (
    <div>
      <div>
        <img style={{ width: "100%" }} src={bn1Image} alt="Sale" />
      </div>

      <div style={{ padding: "1.25rem" }}>
        <div className="listItem">
          {data.map((item, key) => (
            <ItemCard item={item} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
