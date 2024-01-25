import React, { useContext } from 'react';
import DashboardHome from '../Home/DashboardHome';
import BookedHouse from '../pages/BookedHouse';
import { AuthContext } from '../../Provider/AuthProvider';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const renderDashboardComponent = () => {
    if ( user.role === 'Owner') {
      return <DashboardHome />;
    } else {
     
      return <BookedHouse />;
    }
  };

  return (
    <div>
      {renderDashboardComponent()}
    </div>
  );
};

export default DashboardLayout;
