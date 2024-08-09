import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import UserProfile from './UserProfile';
import Notifications from './Notifications';
import BillingInvoices from './BillingInvoices';
import PlansAddons from './PlansAddons';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="billingInvoices" element={<BillingInvoices />} />
          <Route path="plansAddons" element={<PlansAddons />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;