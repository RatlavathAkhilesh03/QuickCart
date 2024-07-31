import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Thankyou for Visiting QuickCart!!!</p>
          <p> We collect personal information like name, email, and payment details to process orders and improve your experience. Your data is securely stored and never shared without consent, except with necessary service providers. You have rights to access, update, or delete your information. We'll notify you, if required.</p>
          <p>Questions?? Contact us at +91-9876543210</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
