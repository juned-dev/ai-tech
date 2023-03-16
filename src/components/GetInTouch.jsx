import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import useFirebase from "../hooks/use-firebase";
import SpinnerLoader from "./SpinnerLoader";
export default function GetInTouch() {
  const { postContactDetails } = useFirebase();
  const [loader, setLoader] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email()
      .required("This field is required")
      .matches(/@[^.]*\./),
    msg: Yup.string().required("This field is reuired"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        msg: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, props) => {
        let { name, email, msg } = values;
        props.setSubmitting(true);
        setLoader(true);
        postContactDetails(name, email, msg).then((data) => {
          setTimeout(() => {
            setLoader(false);
            props.setSubmitting(true);
          }, [300]);
        });
      }}
    >
      {({
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        resetForm,
      }) => (
        <section className="pt-10 pb-10 bg-secondary-200">
          <div className="max-w-[1400px] p-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-white-300 border border-white-200 rounded p-4 sm:p-9 max-w-[450px] mx-auto md:mx-0 ">
                  <p className="text-3xl lg:text-[40px] font-bold mb-6">Get in touch</p>
                  <div className="mb-5 max-w-[378px]">
                    <p className="text-base font-bold text-neutral-700 mb-2">Your name</p>
                    <input
                      type="text"
                      className="text-neutral-400 px-4 py-2 rounded focus:outline-none border border-secondary-300 w-full focus:border-warning-500 transition-all"
                      placeholder="Full name"
                      value={values.name}
                      onChange={(e) => {
                        setFieldValue("name", e.target.value);
                      }}
                    />
                    {errors.name && touched.name ? (
                      <div className="mt-2 ml-1 text-xs text-red-500 text-left">{errors.name}</div>
                    ) : null}
                  </div>

                  <div className="mb-5">
                    <p className="text-base font-bold text-neutral-700 mb-2">Your email</p>
                    <input
                      type="text"
                      className="text-neutral-400 px-4 py-2 rounded focus:outline-none border border-secondary-300 w-full focus:border-warning-500 transition-all"
                      placeholder="youremail@emaily.com"
                      value={values.email}
                      onChange={(e) => {
                        setFieldValue("email", e.target.value);
                      }}
                    />
                    {errors.email && touched.email ? (
                      <div className="mt-2 ml-1 text-xs text-red-500 text-left">{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="mb-8">
                    <p className="text-base font-bold text-neutral-700 mb-2">How can we help?</p>
                    <textarea
                      rows="4"
                      className="text-neutral-400 px-4 py-2 rounded focus:outline-none border border-secondary-300 w-full focus:border-warning-500 transition-all "
                      value={values.msg}
                      onChange={(e) => {
                        setFieldValue("msg", e.target.value);
                      }}
                    ></textarea>
                    {errors.msg && touched.msg ? (
                      <div className="mt-2 ml-1 text-xs text-red-500 text-left">{errors.msg}</div>
                    ) : null}
                  </div>
                  <div className="bg-warning-500 text-white text-lg px-10 py-3 rounded w-full border border-warning-500 hover:bg-white hover:text-warning-500 transition-all flex  items-center">
                    <div className="flex items-center">
                      <button
                        className="text-center mr-2"
                        type="submit"
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        Send my message
                      </button>
                    </div>
                    <div className="flex items-center">{loader && <SpinnerLoader />}</div>
                  </div>
                </div>
              </div>

              <div className="max-h-[520px] rounded-tl-[36px] rounded-tr-[36px] overflow-hidden shadow-l">
                <img src="/assets/images/contact-us-img.png" alt="" className=" h-full w-full" />
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
}
