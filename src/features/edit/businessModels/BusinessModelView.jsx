import React, { useState } from "react";
import { addBusinessModels, removeBusinessModels } from "./modelsSlice";
import { useSelector, useDispatch } from "react-redux";

const BusinessModelView = () => {
  const dispatch = useDispatch();
  const [showEditTab, setShowEditTab] = useState(false);
  const [state, setState] = useState("");
  const businessModels = useSelector((state) => state.businessModels.data);
  const [error, setError] = useState("");

  const cancelEdit = () => {
    setState("");
    setShowEditTab(false);
    setError("");
  };

  const addBusinessModel = () => {
    if (!state) {
      setError("Enter a valid name!!");
      return;
    }
    dispatch(addBusinessModels(state));
    setState("");
    setShowEditTab(false);
    setError("");
  };

  const deleteBusinessModel = (id) => {
    dispatch(removeBusinessModels(id));
  };

  return (
    <>
      <h3 className="block text-2xl font-medium leading-6">Business Models</h3>
      <div className="businessModel-list mt-5 flex flex-wrap gap-3">
        {businessModels?.map((item) => {
          return (
            <span
              key={item.id}
              onClick={() => deleteBusinessModel(item.id)}
              className="rounded-lg text-lg bg-[#E5E7EB] text-[#6B7280] px-3"
            >
              {item?.name} <span className="ml-3">x</span>
            </span>
          );
        })}
        <span className="ml-auto" onClick={() => setShowEditTab(true)}>
          + Add New
        </span>
      </div>
      {showEditTab && (
        <div className="edit-tab">
          {error && <p className="text-lg text-red-500 mt-5">{error}</p>}
          <input
            type="text"
            name="new-businessModel"
            id="new-businessModel"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full p-3 my-5 border"
            placeholder="Enter BusinessModel Name"
            autoFocus
          />
          <div className="buttons flex gap-5 justify-end">
            <div
              className="cancel bg-red-300 p-3 rounded-md text-lg"
              onClick={cancelEdit}
            >
              Cancel
            </div>
            <div
              className="save bg-green-300 p-3 rounded-md text-lg"
              onClick={addBusinessModel}
            >
              Save
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessModelView;
