declare module "react-quill";
import React, { useState, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";

// Register the image uploader module
Quill.register("modules/imageUploader", ImageUploader);

const QuillComponent: React.FC = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const quillRef = useRef<ReactQuill>(null);

  // Handle editor content change
  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  // Modules configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    imageUploader: {
      upload: (file: File) => {
        return new Promise<string>((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          fetch(
            "https://api.imgbb.com/1/upload?key=334ecea9ec1213784db5cb9a14dac265",
            {
              method: "POST",
              body: formData,
            }
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch((error) => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      },
    },
  };

  // Formats configuration
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "imageBlot",
  ];

  return (
    <Box>
      // <Box dangerouslySetInnerHTML={{ __html: editorHtml }} />
      // <ReactQuill
      //   onChange={handleChange}
      //   theme="snow"
      //   modules={modules}
      //   formats={formats}
      //   value={editorHtml}
      //   ref={quillRef}
      //   style={{ minHeight: "25vh" }}
      // />
    </Box>
  );
};

export default QuillComponent;
