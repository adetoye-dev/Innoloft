import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { updateDescription } from "./descriptionSlice";

const EditorView = () => {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.description.data);
  const [editorState, setEditorState] = useState(description);

  const saveDesc = () => {
    dispatch(updateDescription(editorState));
  };

  return (
    <div className="flex flex-col gap-5">
      <ReactQuill theme="snow" value={editorState} onChange={setEditorState} />
      <span
        onClick={saveDesc}
        className="px-5 py-3 bg-blue-950 text-white rounded-lg ml-auto"
      >
        Save
      </span>
    </div>
  );
};

export default EditorView;
