import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './BillingInvoices.css';

const BillingInvoices = () => {
  return (
    <div className="billing-invoices">
      <h3>Billing & Invoices</h3>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/08/2024</td>
              <td>Subscription Plan</td>
              <td>$30.00</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>15/07/2024</td>
              <td>One-Time Fee</td>
              <td>$10.00</td>
              <td>Pending</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BillingInvoices;
