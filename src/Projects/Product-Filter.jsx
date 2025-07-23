import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "iPhone 14",
    category: "Electronics",
    brand: "Apple",
    price: 1200,
    inStock: true,
  },
  {
    id: 2,
    name: "Galaxy S22",
    category: "Electronics",
    brand: "Samsung",
    price: 999,
    inStock: true,
  },
  {
    id: 3,
    name: "MacBook Pro",
    category: "Computers",
    brand: "Apple",
    price: 2400,
    inStock: false,
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "Computers",
    brand: "Dell",
    price: 1500,
    inStock: true,
  },
  {
    id: 5,
    name: "AirPods Pro",
    category: "Accessories",
    brand: "Apple",
    price: 250,
    inStock: true,
  },
  {
    id: 6,
    name: "Logitech Mouse",
    category: "Accessories",
    brand: "Logitech",
    price: 50,
    inStock: false,
  },
];

function App() {
  const [visible, setVisible] = useState(true);
  const [button, showButton] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [productsFiltered, setFilteredProduct] = useState([]);
  const [unFilteredProductsDisplay, setUnFilteredProductsDisplay] =
    useState(true);
  const [filteredProductsDisplay, setFilteredProductDisplay] = useState(false);

  function filterStatus() {
    if (visible === true) {
      setVisible(false);
      showButton(true);
    } else {
      setVisible(true);
      showButton(false);
    }
    console.log("i am");
  }

  function undoButton() {
    showButton(true);
    setVisible(false);
  }

  const below_1000 = useRef(null);
  const below_2000 = useRef(null);
  const below_2500 = useRef(null);

  const dell = useRef(null);
  const samsung = useRef(null);
  const apple = useRef(null);
  const logitech = useRef(null);

  const none = useRef(null);
  const yes = useRef(null);

  function handleClick() {
    setUnFilteredProductsDisplay(false);
    setFilteredProductDisplay(true);

    const results = {
      below_1000: below_1000.current.checked,
      below_2000: below_2000.current.checked,
      below_2500: below_2500.current.checked,

      dell: dell.current.checked,
      samsung: samsung.current.checked,
      apple: apple.current.checked,
      logitech: logitech.current.checked,

      none: none.current.checked,
      yes: yes.current.checked,
    };

    // loop through all the checkboxes and save those who are true in variable
    const checkedItems = Object.keys(results).filter((key) => results[key]);
    setSelectedItems(checkedItems);

    const selectedBrands = ["Apple", "Samsung", "Dell", "Logitech"].filter(
      (brand) => checkedItems.includes(brand.toLowerCase())
    );

    const selectedPrices = checkedItems.filter((item) =>
      item.startsWith("below_")
    );

    const selectedStock = {
      inStock: checkedItems.includes("yes"),
      outOfStock: checkedItems.includes("none"),
    };

    const filteredProducts = products.filter((product) => {
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      const priceMatch =
        selectedPrices.length === 0 ||
        (selectedPrices.includes("below_1000") && product.price < 1000) ||
        (selectedPrices.includes("below_2000") && product.price < 2000) ||
        (selectedPrices.includes("below_2500") && product.price < 2500);

      const stockMatch =
        (!selectedStock.inStock && !selectedStock.outOfStock) ||
        (selectedStock.inStock && product.inStock) ||
        (selectedStock.outOfStock && !product.inStock);

      return brandMatch && priceMatch && stockMatch;
    });
    console.log(filteredProducts);
    setFilteredProduct(filteredProducts);
  }

  const resetFilter = () => {
    // Uncheck price filters
    below_1000.current.checked = false;
    below_2000.current.checked = false;
    below_2500.current.checked = false;

    // Uncheck brand filters
    dell.current.checked = false;
    samsung.current.checked = false;
    apple.current.checked = false;
    logitech.current.checked = false;

    // Uncheck stock status
    none.current.checked = false;
    yes.current.checked = false;

    setSelectedItems([]);
    setFilteredProductDisplay(false);
    setUnFilteredProductsDisplay(true);
  };

  return (
    <>
      <div className="absolute sm:hidden w-[40px] flex justify-center items-center h-[30px] ">
        {button && (
          <button
            onClick={filterStatus}
            className="cursor-pointer hover:bg-gray-600 p-[5px] rounded-2xl"
          >
            <FaBars />
          </button>
        )}
      </div>

      <div className="flex flex-row xl:w-[80%] mx-auto ">
        {visible && (
          <div className="flex flex-col px-3 py-2 sm:w-[35%]">
            <div className="flex flex-row justify-between">
              <h2 className="font-semibold text-xl">Sort By: </h2>
              <button
                className="block sm:hidden cursor-pointer hover:bg-gray-600 p-[5px] rounded-2xl"
                onClick={undoButton}
              >
                <FaTimes />
              </button>
            </div>
            <h3 className="font-semibold text-xl">Price</h3>
            <div className="flex flex-col gap-2 my-2">
              <div className="flex items-csenter jutify-start gap-1">
                <label htmlFor="below_1000">Below 1000</label>
                <input
                  type="checkbox"
                  name="below_1000"
                  value="bolow_1000"
                  ref={below_1000}
                />
              </div>

              <div className="flex items-center justify-start gap-1">
                <label htmlFor="below_2000">Below 2000</label>
                <input
                  type="checkbox"
                  name="below_2000"
                  value="below_2000"
                  ref={below_2000}
                />
              </div>

              <div className="flex items-center justify-start gap-1">
                <label htmlFor="below_2500">Below 2500</label>
                <input
                  type="checkbox"
                  name="below_2500"
                  value="below_2500"
                  ref={below_2500}
                />
              </div>
            </div>
            <h3 className="font-semibold text-xl">Brand</h3>
            <div className="flex flex-col gap-2 my-2">
              <div className="flex items-center justify-start gap-1">
                <label htmlFor="dell">Dell</label>
                <input type="checkbox" name="dell" value="dell" ref={dell} />
              </div>

              <div className="flex items-center justify-start gap-1">
                <label htmlFor="logitect">Logitech</label>
                <input
                  type="checkbox"
                  name="logitect"
                  value="logitect"
                  ref={logitech}
                />
              </div>

              <div className="flex items-center justify-start gap-1">
                <label htmlFor="samsung">Samsung</label>
                <input
                  type="checkbox"
                  name="Samsung"
                  value="samsung"
                  ref={samsung}
                />
              </div>

              <div className="flex items-center justify-start gap-1">
                <label htmlFor="apple">Apple</label>
                <input type="checkbox" name="apple" value="apple" ref={apple} />
              </div>
            </div>
            <h3 className="font-semibold text-xl">Stock Status</h3>
            <div className="flex flex-col gap-2 my-2">
              <div className="flex items-center justify-start gap-1">
                <label htmlFor="yes">In Stock</label>
                <input type="checkbox" name="yes" value="yes" ref={yes} />
              </div>

              <div className="flex items-center justify-start gap-1">
                <label htmlFor="no">Out of Stock</label>
                <input type="checkbox" name="no" value="no" ref={none} />
              </div>
            </div>
            <div className="flex flex-col gap-2 py-2">
              <button
                className="w-[90%] text-center m-auto py-1 cursor-pointer hover:bg-sky-600 bg-sky-500 rounded-2xl font-semibold text-white"
                onClick={handleClick}
              >
                Apply
              </button>
              <button
                className="w-[90%] text-center m-auto py-1 hover:bg-red-600 cursor-pointer bg-red-500 rounded-2xl font-semibold text-white"
                onClick={resetFilter}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
        {unFilteredProductsDisplay && (
          <div className="w-[75%] mx-auto">
            {products.map((product, index) => (
              <div key={index} className="border m-5 p-2">
                <p>Name : {product.name}</p>
                <p>Brand : {product.brand}</p>
                <p>Category : {product.category}</p>
                <p>Price : {product.price}</p>
                <p>inStock : {product.inStock ? "Yes" : "No"}</p>
              </div>
            ))}
          </div>
        )}

        {filteredProductsDisplay && (
          <div className="w-[75%] mx-auto">
            {productsFiltered.map((product, index) => (
              <div key={index} className="border m-5 p-2">
                <p>Name : {product.name}</p>
                <p>Brand : {product.brand}</p>
                <p>Category : {product.category}</p>
                <p>Price : {product.price}</p>
                <p>inStock : {product.inStock ? "Yes" : "No"}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
