import React from 'react';
import { useLocation } from 'react-router-dom';
import { Semester1, Semester2, Semester3, Semester4 } from '../pages/Semesters';

const Home: React.FC = () => {
  const location = useLocation();

  const renderSemesterComponent = () => {
    switch (location.pathname) {
      case '/sem1':
        return <Semester1 />;
      case '/sem2':
        return <Semester2 />;
      case '/sem3':
        return <Semester3 />;
      case '/sem4':
        return <Semester4 />;
      default:
        return null; // Ya kuch default render kar sakte ho
    }
  };

  return (
    <div className=''>
      <h1>Welcome to the Semester Page</h1>
      {renderSemesterComponent()}
      
    </div>
  );
};

export default Home;
