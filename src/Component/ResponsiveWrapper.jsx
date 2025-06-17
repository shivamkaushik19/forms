
import React, { useState, useEffect } from 'react';

const ResponsiveWrapper = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 650);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isSmallScreen) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '50px', 
        fontSize: '18px', 
        backgroundColor: '#f8d7da', 
        color: '#721c24',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        🚫 Please open this form on a tablet or laptop (screen width ≥ 650px)
      </div>
    );
  }

  return <>{children}</>;
};

export default ResponsiveWrapper;
