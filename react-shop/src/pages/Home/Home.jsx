import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import AXIOS_INSTANCE from "../../Api/base";
import Product from "../../components/Product";
import Loading from "../../components/Loading";
import { ifUserLogged } from "../../database/users";
import { useNavigate } from "react-router";

const totalInStorage = localStorage.getItem("total");
const productCartStorage = JSON.parse(localStorage.getItem("productsCart"));

const Home = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(parseInt(totalInStorage) || 0);
  const [cartListProducts, setListCart] = useState(productCartStorage || []);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ifUserLogged()) {
      navigate("/login");
    }
  }, []);

  const getData = () => {
    AXIOS_INSTANCE.get("/react-shop")
      .then((response) => {
        setListProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(getData, []);

  const addToCart = (product) => {
    const currentList = cartListProducts;
    currentList.push(product);
    setListCart(currentList);
    const { price } = product;
    setTotal(total + price);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("total", total);
  };

  useEffect(() => {
    localStorage.setItem("productsCart", JSON.stringify(cartListProducts));
  }, [cartListProducts]);

  useEffect(saveToLocalStorage, [total]); // ! Dependency Array it call saveToLocalStorage if total changes

  return (
    <React.Fragment>
      <Navbar total={total} listProducts={cartListProducts} />
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
