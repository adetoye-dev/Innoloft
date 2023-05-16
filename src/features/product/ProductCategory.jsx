import React from "react";

const ProductCategory = ({ list, title, icon }) => {
  return (
    <div className="flex gap-5">
      <span className="category-icon">
        <img src={`/icons/${icon}`} alt={icon} />
      </span>
      <div>
        <h3 className="category-title text-2xl text-[#6B7280]">{title}</h3>
        <div className="category-list mt-2 flex flex-wrap gap-3">
          {list?.map((item, index) => {
            return (
              <span
                key={index}
                className="rounded-lg text-lg bg-[#E5E7EB] text-[#6B7280] px-3"
              >
                {item?.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
