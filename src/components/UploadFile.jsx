import React, { useEffect, useState } from "react";
import { UploadResumeInitValues } from "../../constants/AppData";
import useFirebase from "../hooks/use-firebase";
import SpinnerLoader from "./SpinnerLoader";
import Toast from "./Toast";

export default function UploadFile({ item, setShowInput }) {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [hideImage, setHideImage] = useState(true);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImg, setSelectedImg] = useState();
  const [loader, setLoader] = useState(false);
  const [percent, setPercent] = useState(0);
  const { uploadResume } = useFirebase();
  const [error, setError] = useState("");

  // if the percent is 100, show success message
  useEffect(() => {
    percent == 100 && setShowSuccessMsg(true);
  }, [percent]);

  function reset() {
    // reset all the values
    setHideImage(true);
    setPercent(0);
    setSelectedImg(null);
    setShowSuccessMsg(false);
    setShowInput(false);
  }
  useEffect(() => {
    if (showSuccessMsg) {
      // if success message is shown, reset all states after 3 seconds
      showSuccessMsg &&
        setTimeout(() => {
          reset();
        }, 3000);
    }
  }, [showSuccessMsg]);

  // Use useEffect to automatically hide the toast notification after 3 seconds
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [selectedImg, error]);

  return (
    <div>
      <div className="border-b mt-8 max-w-lg mx-auto animate-fade">
        {hideImage && <div className="mb-3"> Please submit your resume</div>}
        {showSuccessMsg ? (
          // if success message is shown, show Toast message
          <Toast
            color=""
            onClick={() => {
              setShowSuccessMsg(false);
              setShowInput(UploadResumeInitValues);
            }}
            msg={" Thank you for submitting your resume. We will contact you"}
          />
        ) : (
          <>
            {
              <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 mx-auto mb-6">
                <div className="space-y-1 text-center">
                  {!hideImage ? (
                    // if an image is selected, show a check mark icon
                    <>
                      <svg
                        className="h-12 w-12 mx-auto text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}

                  <div className="flex justify-center text-sm text-gray-600 space-x-2">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-primary-500 focus-within:outline-none hover:opacity-80"
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
                          setSelectedImage(null);
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
            {error && (
              <Toast variant="error" onClick={() => setError(false)} msg="Please select requested format file only." />
            )}

            {/* submit-button   */}
            {selectedImage && (
              <div className="text-center">
                <button
                  onClick={() => {
                    if (
                      selectedImg.type == "application/pdf" ||
                      selectedImg.type == "image/jpeg" ||
                      selectedImg.type == "image/jpg"
                    ) {
                      const size = selectedImg.size / 1024 ** 2;
                      if (size < 4) {
                        setLoader(true);
                        uploadResume(selectedImg, setPercent, item)
                          .then((data) => {})
                          .catch((err) => {
                            console.log(err);
                          })
                          .finally(() => {
                            setTimeout(() => {
                              setLoader(false);
                            }, 2000);
                          });
                      } else {
                        setError(true);
                      }
                    } else {
                      setError(true);
                      setLoader(false);
                    }
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
