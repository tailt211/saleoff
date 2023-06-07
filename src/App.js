import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ItemDetailPage from "./page/ItemDetailPage";
import CheckoutPage from "./page/CheckoutPage";

function App() {
  return (
    <div
      className="App"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Header */}
      <div
        style={{
          height: "146px",
          backgroundColor: "red",
          position: "fixed",
          width: "100%",
          top: "0",
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)",
          fontSize: "30px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <i>SaleOff</i>
      </div>

      {/* Body */}
      <div style={{ marginTop: "146px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={"/:id"} element={<ItemDetailPage />} />
          <Route path={"/checkout"} element={<CheckoutPage />} />
        </Routes>
      </div>

      {/* Footer */}
      <div
        style={{
          height: "146px",
          backgroundColor: "rgba(39,52,62,1)",
          width: "100%",
          fontSize: "30px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          position: "relative",
          bottom: "0",
        }}
      >
        Công ty truyền thông Asia Business Insider
      </div>
    </div>
  );
}

export default App;
