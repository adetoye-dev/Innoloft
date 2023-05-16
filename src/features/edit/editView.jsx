import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import ReactPlayer from "react-player";
import TrlView from "edit/trl/TrlView";
import CategoryView from "edit/categories/categoryView";
import BusinessModelView from "edit/businessModels/BusinessModelView";
import EditorView from "edit/editor/EditorView";
import { Link } from "react-router-dom";
import { updateProduct } from "product/productSlice";

const EditView = () => {
  const dispatch = useDispatch();

  const saveChanges = () => {
    dispatch(updateProduct());
  };
  const product = useSelector((state) => state.product.data);

  const companyAddress = `${product?.company?.address?.street} 
                          ${product?.company?.address?.house}, 
                          ${product?.company?.address?.zipCode} 
                          ${product?.company?.address?.city?.name},
                          ${product?.company?.address?.country?.name}`;

  //Redirect to product page if there's no product state to display
  if (!product.id) return <Navigate to="/product/5781" />;
  return (
    <>
      <div className="section-header justify-between flex mb-5">
        <Link
          to="/product/5781"
          className="items-center inline-flex text-xl gap-3 p-3 text-blue-950"
        >
          <i className="fas fa-arrow-left" />
          <span>Go Back</span>
        </Link>
        <div
          onClick={saveChanges}
          className="inline-flex text-xl gap-3 p-3 bg-blue-950 cursor-pointer hover:bg-blue-700 text-white rounded-xl"
        >
          <span>Save Changes</span>
        </div>
      </div>
      <div className="main flex flex-col md:flex-row rounded-lg text-lg bg-white border border-[#E5E7EB]">
        <div className="product-details p-5  md:w-3/4">
          <img src={product?.picture} alt="product-img" />
          <h1 className="product-title font-bold text-3xl my-5">
            Intelligent Finite Elements in Structural mechanics
          </h1>
          <EditorView />
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
          <div className="company-location">
            <div className="address flex gap-3">
              <img src="/icons/location-icon.svg" alt="location-icon" />
              <p>{companyAddress}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="video flex flex-col rounded-lg mt-5 p-5 bg-white border border-[#E5E7EB]">
        <h2 className="category-title font-bold text-2xl mb-10">Video</h2>
        <div className="player-wrapper mx-auto w-100 md:w-2/3 aspect-video">
          <ReactPlayer url={product?.video} width="100%" height="100%" />
        </div>
      </div>
      <div className="rounded-lg mt-5 p-5 bg-white border border-[#E5E7EB]">
        <TrlView />
      </div>
      <div className="rounded-lg mt-5 p-5 bg-white border border-[#E5E7EB]">
        <CategoryView />
      </div>
      <div className="rounded-lg mt-5 p-5 bg-white border border-[#E5E7EB]">
        <BusinessModelView />
      </div>
    </>
  );
};

export default EditView;
