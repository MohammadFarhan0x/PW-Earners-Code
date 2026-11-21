import Body from "./components/Body";
import Footer from "./components/Footer";
import { Navbar as UserInfo } from "./components/Navbar";
import { Products } from "./components/products";

let user = {
  name: "Farhan",
  isLoggedIn: true,
};

const products = [
  {
    title: "Nike Shoes",
    price: 129999,
  },
  {
    title: "Redchief Shoes",
    price: 19999,
  },
  {
    title: "Adidas Shoes",
    price: 29999,
  },
];

function App() {
  return (
    <div>
      <UserInfo user={user} />
      <Body />
      <Products products={products} />

      <Footer />
    </div>
  );
}

export default App;
