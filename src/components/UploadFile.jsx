import React, { useEffect, useState } from "react";
import useFirebase from "../hooks/use-firebase";
import SpinnerLoader from "./SpinnerLoader";

export default function UploadFile() {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [hideImage, setHideImage] = useState(true);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImg, setSelectedImg] = useState();
  const [loader, setLoader] = useState(false);
  const [percent, setPercent] = useState(0);
  const { uploadResume } = useFirebase();

  useEffect(() => {
    percent == 100 && setShowSuccessMsg(true);
  }, [percent]);

  function reset() {
    setHideImage(true);
    setPercent(0);
    selectedImg(null);
    setShowSuccessMsg(false);
  }

  return (
    <div>
      <div className="border-b pb-8 mb-8">
        {/* upload_file-component   */}
        {!hideImage ? (
          <div className="relative flex items-center justify-center h-[250px] bg-white rounded-[10px] shadow-act-btn overflow-hidden p-4">
            <div className="flex items-center space-x-3 absolute right-4 top-4 cursor-pointer">
              {/* delete image icon */}
              <button
                className=""
                onClick={() => {
                  setSelectedImage(null);
                  setHideImage(true);
                }}
              >
                <img className="max-h-7" src="/assets/images/trash-circle.svg" alt="" />
              </button>
            </div>
            {/* <img src={selectedImage} className="max-h-[250px]" alt="" /> */}
            <embed src={selectedImage} width="250" height="200"></embed>
          </div>
        ) : (
          <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 mx-auto mb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="flex justify-center text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-primary-500 focus-within:outline-none hover:opacity-80"
                >
                  <span>Upload a file</span>
                  <input
                    onChange={(e) => {
                      setSelectedImage(URL.createObjectURL(e.target.files[0]));
                      setSelectedImg(e.target.files[0]);
                      setHideImage(false);
                    }}
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1"></p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        )}

        {/* submit-button   */}

        {selectedImage && (
          <div className="text-center">
            <button
              onClick={() => {
                setLoader(true);
                uploadResume(selectedImg, setPercent).then((data) => {
                  setTimeout(() => {
                    setLoader(false);
                  }, [300]);
                });
              }}
              className="border border-success-700 text-success-700 bg-neutral-150 py-[12px] px-14 hover:text-neutral-150 hover:bg-success-700 transition duration-300 rounded"
            >
              Submit
            </button>
            {/* <div className="flex items-center">
              {loader && <SpinnerLoader />}
            </div> */}
          </div>
        )}

        {showSuccessMsg && (
          <div>
            {/* success-alert-message  */}
            <div className="rounded-md bg-green-50 p-4 max-w-xl mx-auto">
              <div className="flex">
                <div onClick={() => reset()} className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Thank you for submitting your resume. We will contact you
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
