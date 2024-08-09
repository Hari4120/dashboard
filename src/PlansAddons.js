import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './PlansAndAddons.css';

const PlansAndAddons = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showProcessingMessage, setShowProcessingMessage] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSaveChanges = () => {
    setShowProcessingMessage(true);
    setTimeout(() => {
      setShowProcessingMessage(false);
    }, 3000);
  };

  return (
    <div className='page'>
    <div className="plans-container">
      <h3 className="main-heading">Choose Your Plan</h3>

      <div className="plans-section">
        <div
          className={`plan-box ${selectedPlan === 'basic' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('basic')}
        >
          <h5>Basic Plan</h5>
          <p className="plan-price">$10/month</p>
          <ul className="plan-features">
            <li>Access to basic features</li>
            <li>5 GB Storage</li>
            <li>10 GB Bandwidth</li>
            <li>24/7 Email Support</li>
          </ul>
        </div>

        <div
          className={`plan-box ${selectedPlan === 'standard' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('standard')}
        >
          <h5>Standard Plan</h5>
          <p className="plan-price">$25/month</p>
          <ul className="plan-features">
            <li>Access to standard features</li>
            <li>50 GB Storage</li>
            <li>100 GB Bandwidth</li>
            <li>Priority Email Support</li>
            <li>1 Free Domain</li>
          </ul>
          </div>

        <div
          className={`plan-box ${selectedPlan === 'premium' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('premium')}
        >
          <h5>Premium Plan</h5>
          <p className="plan-price">$50/month</p>
          <ul className="plan-features">
            <li>Access to all features</li>
            <li>Unlimited Storage</li>
            <li>Unlimited Bandwidth</li>
            <li>24/7 Phone Support</li>
            <li>Free SSL Certificate</li>
            <li>Free Website Migration</li>
          </ul>
        </div>
      </div>
      <div className='save-changes-button-container'>
      <Button variant="primary" type="button" onClick={handleSaveChanges}>
        Proceed to Checkout
      </Button>
      </div>
      {showProcessingMessage && (
        <div className="processing-message">Processing...</div>
      )}
    </div>
    </div>
  );
};

export default PlansAndAddons;
