import Card from "../components/Card";
import {
  GiArmoredPants,
  GiMonclerJacket,
  GiShirt,
  GiDress,
  GiTankTop,
  GiSleevelessJacket,
} from "react-icons/gi";
import { IoShirt } from "react-icons/io5";

export default function Products() {
  const products = [
    { name: "Dress", price: 35, icon: <GiDress />},
    { name: "Tank Top", price: 10, icon: <GiTankTop /> },
    { name: "Sleveless Jacket", price: 35, icon: <GiSleevelessJacket /> },
    { name: "Jacket", price: 45, icon: <GiMonclerJacket /> },
    { name: "Sweater", price: 31, icon: <GiShirt /> },
    { name: "Tshirt", price: 60, icon: <IoShirt /> },
    { name: "Pants", price: 34, icon: <GiArmoredPants /> }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          name={product.name}
          price={product.price}
          icon={product.icon}
        />
      ))}
    </div>
  );
}
