import React, { useState } from "react";
import { Upload, message, Button } from "antd";
import { BsFillImageFill } from "react-icons/bs";
import type { UploadProps, UploadFile } from "antd/es/upload/interface";
import type { UploadChangeParam } from "antd/es/upload/interface";

interface IDocumentUploadProps {
  setFile?: any;
}
const UploadImage: React.FC<IDocumentUploadProps> = ({ setFile }) => {
  const [uploading, setUploading] = useState(false);

  const onChangeHandler: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setUploading(true);
      return;
    }

    if (info.file.status === "done") {
      // console.log(info.file);
      setUploading(false);
      message.success(
        `${info.file.name} file uploaded successfully, copy and paste the link to the image part of the form`
      );
      setFile(info.file.response.url);
    }
  };

  const props = {
    name: "file",
    action: "https://api.thisispoise.com/products/image",
    headers: {
      authorization: `Bearer ${sessionStorage.getItem("token")}`,
      // "Content-Type": "multipart/form-data",
    },
    onChange: onChangeHandler,
    multiple: false,
  };
  return (
    <>
      <Upload {...props} style={{ width: "100%" }}>
        <Button
          icon={<BsFillImageFill />}
          className="w-full flex items-center justify-center gap-2 mt-2 p-5 border-dotted border-2 "
        >
          {uploading ? "uploading" : <span>Upload product image</span>}
        </Button>
      </Upload>
    </>
  );
};

export default UploadImage;
