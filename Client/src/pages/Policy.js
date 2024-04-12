import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus m-5">
        {/* <div className="col-md-6 "> */}
          {/* <img
            src="/images/privacyp.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          /> */}
        {/* </div> */}
          <div style={{textAlign:"center"}} className="text-white">
          <h3>Privacy Policy for Hogwarts Magic Store</h3>
          <p>At Hogwarts Magic Store, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information we gather through our website, in-store interactions, and other channels.</p>
          <p>1. Information Collection:</p>
          <p>We collect personal information from customers when they make purchases, sign up for our newsletter, participate in promotions or events, or interact with us through our website or social media platforms. </p>
          <p>2. Use of Information:</p>
          <p>We use the information we collect for various purposes, including but not limited to:

<br />
Processing transactions and delivering products or services
<br />
Communicating with customers about orders, promotions, and events
<br />
Personalizing the customer experience and providing tailored recommendations
<br />
Improving our products, services, and website functionality
<br />
Conducting research and analysis to better understand customer needs and preferences</p>
<br />
<p>3. Information Sharing:</p>
<p>We do not sell, trade, or rent customers' personal information to third parties. However, we may share information with trusted service providers who assist us in operating our business, conducting transactions, or servicing customers, as long as they agree to keep this information confidential.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;