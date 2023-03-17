import React, { useEffect, useState } from "react";
import { UploadResumeInitValues } from "../../constants/AppData";
import useFirebase from "../hooks/use-firebase";
import SpinnerLoader from "./SpinnerLoader";

export default function UploadFile({ item, setShowInput }) {
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
    setSelectedImg(null);
    setShowSuccessMsg(false);
    setShowInput(false);
  }

  useEffect(() => {
    if (showSuccessMsg) {
      setLoader(false);
      showSuccessMsg &&
        setTimeout(() => {
          reset();
        }, [3000]);
    }
  }, [showSuccessMsg]);

  return (
    <div>
      <div className="border-b pb-8 mb-8 max-w-lg mx-auto animate-fade">
        {showSuccessMsg ? (
          <div className="animate-fade">
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
                <div className="ml-auto pl-3">
                  <div className="-mx-1.5 -my-1.5">
                    <button
                      onClick={() => {
                        setShowSuccessMsg(false);
                        setShowInput(UploadResumeInitValues);
                      }}
                      type="button"
                      className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                    >
                      <span className="sr-only">Dismiss</span>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {
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
                  <div className="flex justify-center text-sm text-gray-600 space-x-2">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-primary-500 focus-within:outline-none hover:opacity-80"
                    >
                      <span>{!hideImage ? `${selectedImg.name}` : "Upload a file"}</span>

                      <input
                        onChange={(e) => {
                          setSelectedImage(URL.createObjectURL(e.target.files[0]));
                          setSelectedImg(e.target.files[0]);
                          setHideImage(false);
                        }}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept="application/pdf,image/jpeg, image/jpg"
                        className="sr-only"
                      />
                    </label>
                    {!hideImage && (
                      <svg
                        onClick={() => {
                          setSelectedImg(null);
                          setHideImage(true);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}

                    <p className="pl-1"></p>
                  </div>
                  <p className="text-xs text-gray-500">In JPG, JPEG, PDF format </p>
                </div>
              </div>
            }

            {/* submit-button   */}
            {selectedImage && (
              <div className="text-center">
                <button
                  onClick={() => {
                    setLoader(true);
                    uploadResume(selectedImg, setPercent, item).then((data) => {});
                  }}
                  className="border border-success-700 h-[50px] w-[173px] mx-auto text-success-700 bg-neutral-150 py-[12px] px-14 hover:text-neutral-150 hover:bg-success-700 transition duration-300 rounded"
                >
                  <div>{loader ? <SpinnerLoader /> : "Submit"} </div>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
