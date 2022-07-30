import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import AXIOS_INSTANCE from "../../Api/base";
import Product from "../../components/Product";
import Loading from "../../components/Loading";
import { ifUserLogged } from "../../database/users";
import { useNavigate } from "react-router";

const Home = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ifUserLogged()) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    AXIOS_INSTANCE.get("/react-shop")
      .then((response) => {
        setListProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (price) => {
    setTotal(total + price);
  };

  return (
    <React.Fragment>
      <Navbar total={total} />
      <Header
        title='Discover our Daily product'
        subTitle='Today we go a lot of products waiting for you!'
      />

      {isLoading ? (
        <Loading />
      ) : (
        <div className='grid justify-between gap-4 w-full place-content-center px-8 my-24  gap-y-8 md:grid-cols-4'>
          {listProducts.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              discount={product.discount}
              imgSrc={product.imgSrc}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
