import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - QuickCart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to QuickCart, Where Style Meets Sustainability!!!


          At QuickCart, we're driven by our core values of sustainability, transparency, and social responsibility. From sourcing organic materials to supporting fair labour practices, we're dedicated to walking the talk every step of the way. Every stitch in our garments is a testament to our commitment to ethical practices, eco-friendly materials, and timeless style. Our journey began with a simple mission: to revolutionize the fashion industry by offering chic, eco-friendly alternatives without compromising on style or quality.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

/*
     Admin
     Name: Akhilesh
     Email: admin@admin.com
     Password: akhilesh
     Phone: 9876543210
     Address: Hyderabad
     Answer: Cricket
     Role: 1
     __v: 1


     User
     Name: Akhi
     Email: user@user.com
     Password: akhi
     Phone: 9876543211
     Address: Bengaluru
     Answer: Cricket
     Role: 0
     __v: 0
*/ 
