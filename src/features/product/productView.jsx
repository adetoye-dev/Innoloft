import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "product/productSlice";
import Loader from "features/loader/Loader";
import ProductCategory from "product/ProductCategory";
import ReactPlayer from "react-player";
import Map from "./Map";
import { Link } from "react-router-dom";

const ProductView = ({ configuration }) => {
  const dispatch = useDispatch();

  const {
    loading,
    error,
    data: product,
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const companyAddress = `${product?.company?.address?.street} 
                          ${product?.company?.address?.house}, 
                          ${product?.company?.address?.zipCode} 
                          ${product?.company?.address?.city?.name},
                          ${product?.company?.address?.country?.name}`;

  if (loading) return <Loader loaderText="Fetching Product..." />;
  if (!loading && error) return <p>Fetching product failed! {error}</p>;

  return (
    <>
      <div className="section-header flex mb-5">
        <Link
          to="/product/edit"
          className="ml-auto inline-flex text-xl gap-3 p-3 bg-blue-950 cursor-pointer hover:bg-blue-700 text-white rounded-xl"
        >
          <img src="/icons/edit-icon.svg" />
          <span>Edit</span>
        </Link>
      </div>
      <div className="main relative flex flex-col md:flex-row rounded-lg text-lg bg-white border border-[#E5E7EB]">
        <div className="absolute p-3 bg-blue-950 text-white rounded-br-xl flex gap-3">
          <img src="/icons/type-icon.svg" alt="product-type-icon" />
          <span>{product?.type?.name}</span>
        </div>
        <div className="product-details p-5  md:w-3/4">
          <img src={product?.picture} alt="product-img" />
          <h1 className="product-title font-bold text-3xl my-5">
            Intelligent Finite Elements in Structural mechanics
          </h1>
          <p className="product-desc text-lg">{product?.description}</p>
        </div>
        <div className="company-details flex flex-col gap-8 p-5 md:w-2/5 md:border-l border-[#E5E7EB]">
          <div className="company-data">
            <span>Offered By</span>
            <img
              src={product?.company?.logo}
              alt="company-logo"
              className="w-72"
            />
          </div>
          {configuration.hasUserSection ? (
            <div className="user-data flex gap-5 items-center">
              <div className="user-image w-20 h-20 rounded-full overflow-hidden">
                <img src={product?.user?.profilePicture} alt="profile-img" />
              </div>
              <div className="personal-info">
                <h3 className="user-name font-bold text-xl">
                  {product?.user?.firstName + " " + product?.user?.lastName}
                </h3>
                <p className="company">{product?.company?.name}</p>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="company-location">
            <div className="address">
              <img src="/icons/location-icon.svg" alt="location-icon" />
              <p>{companyAddress}</p>
            </div>
            <Map
              location={{
                address: companyAddress,
                lat: product?.company?.address?.latitude,
                lng: product?.company?.address?.longitude,
              }}
            />
          </div>
        </div>
      </div>
      <div className="video flex flex-col rounded-lg mt-5 p-5 bg-white border border-[#E5E7EB]">
        <h2 className="category-title font-bold text-2xl mb-10">Video</h2>
        <div className="player-wrapper mx-auto w-100 md:w-2/3 aspect-video">
          <ReactPlayer url={product?.video} width="100%" height="100%" />
        </div>
      </div>
      <div className="offer-details grid rounded-lg mt-5 p-5 bg-white border border-[#E5E7EB]">
        <h2 className="category-title font-bold text-2xl mb-10">
          Offer Details
        </h2>
        <div className="details-categories grid gap-10 md:grid-cols-2">
          <ProductCategory
            title="Technology"
            icon="technology-icon.svg"
            list={product?.categories}
          />
          <ProductCategory
            title="Business Model"
            icon="business-model-icon.svg"
            list={product?.businessModels}
          />
          <ProductCategory
            title="TRL"
            icon="trl-icon.svg"
            list={[product?.trl]}
          />
          <ProductCategory
            title="Costs"
            icon="costs-icon.svg"
            list={[{ name: product?.investmentEffort }]}
          />
        </div>
      </div>
    </>
  );
};

export default ProductView;
