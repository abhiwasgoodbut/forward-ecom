import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = React.useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0,10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text={"LATEST "} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:test-sm md:test-base text-gray-600" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quos possimus cumque vero minima architecto quasi doloribus aperiam totam deleniti sit provident magni laboriosam, modi deserunt autem fuga obcaecati praesentium cupiditate, accusamus vel eum magnam? Aperiam, ratione. Neque earum unde fuga harum maiores voluptatibus architecto.</p>
      </div>

        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                latestProducts.map((items, index) => (
                    <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
                ))
            }
        </div>

    </div>
  );
}

export default LatestCollection;
