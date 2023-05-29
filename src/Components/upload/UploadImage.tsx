import React, { useState } from "react";
import { Upload, Button } from "antd";
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
      console.log(info.fileList[0].response)
      const { path } = info.fileList[0].response.data;
      setFile(path);
    }
  };

  const props = {
    action: "http://localhost:8080/products/image",
    headers: {
      authorization: `Bearer ${sessionStorage.getItem("token")}`,
      // accept: "application/json",
    },
    onChange: onChangeHandler,
    multiple: true,
    // concept exploration
    customRequest: (options:any) => {
      const formData = new FormData();
      formData.append(options.filename, options.file);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", options.action, true);
      xhr.setRequestHeader("authorization", options.headers.authorization);
      xhr.setRequestHeader("Content-Type", "multipart/form-data");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          options.onSuccess({},xhr)
        }
      }

      xhr.send(formData)
    },
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
