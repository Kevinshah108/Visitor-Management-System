import React from "react";
import AsideBar from "./AsideBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

function Register() {
  const validationSchema = Yup.object({
    date: Yup.date().required("Date is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    purposeOfVisit: Yup.string().required("Purpose of Visit is required"),
    whomToMeet: Yup.string().required("Whom to meet is required"),
    inTime: Yup.string().required("In Time is required"),
  });

  const initialValues = {
    date: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    purposeOfVisit: "",
    whomToMeet: "",
    inTime: "",
  };

  const handleSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <>
      <AsideBar />
      <div className="container-form">
        <div className="container-form1">
          {/* <h1 className="h11-form">Register</h1> */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="data-form">
              <h1 className="h11-form">Register</h1>
              <div>
                <label className="details">Date:</label>
                <Field
                  className="text-form"
                  name="date"
                  type="date"
                  placeholder="Date"
                  required
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label classname="Details">First Name:</label>
                <Field
                  className="text-form"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label classname="Details">Last Name:</label>
                <Field
                  className="text-form"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label classname="Details">Phone Number:</label>
                <Field
                  className="text-form"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label classname="Details">Email:</label>
                <Field
                  className="text-form"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label classname="Details">Address:</label>
                <Field
                  className="text-form"
                  name="address"
                  placeholder="Address"
                  required
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label classname="Details">Purpose of Visit:</label>
                <Field
                  className="text-form"
                  name="purposeOfVisit"
                  type="text"
                  placeholder="Purpose of Visit"
                  required
                />
                <ErrorMessage
                  name="purposeOfVisit"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label classname="Details">Whom to Meet:</label>
                <Field
                  className="text-form"
                  name="whomToMeet"
                  type="text"
                  placeholder="Whom to meet"
                  required
                />
                <ErrorMessage
                  name="whomToMeet"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label classname="Details">In Time:</label>
                <Field
                  className="text-form"
                  name="inTime"
                  type="time"
                  placeholder="In Time"
                  required
                />
                <ErrorMessage
                  name="inTime"
                  component="div"
                  className="error-message"
                />
              </div>
              <button className="button-form" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Register;
