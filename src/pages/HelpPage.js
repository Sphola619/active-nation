import React from "react";
import "./HelpPage.css";

function HelpPage() {
  return (
    <div className="help-page">
      <h1>Help</h1>
      <p>
        Need assistance? We're here to help. Below is information about our
        shipping methods to guide you:
      </p>
      <div className="shipping-info">
        {/*Standard Shipping information*/}
        <h2>Standard Shipping</h2>
        <p>
          Standard Shipping is our economical option, ensuring your items are
          delivered within <strong>5-7 business days</strong>. Perfect for
          non-urgent purchases, this method is reliable and cost-effective.
        </p>
        {/* Express Shipping information */}
        <h2>Express Shipping</h2>
        <p>
          Express Shipping is the ideal choice for faster delivery, getting your
          items to you within <strong>1-3 business days</strong>. A premium
          service designed for those who need their orders quickly.
        </p>
      </div>
    </div>
  );
}

export default HelpPage;
