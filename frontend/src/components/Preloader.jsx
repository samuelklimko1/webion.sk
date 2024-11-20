import { useState, useEffect } from 'react';

function Preloader() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 30);

    const timeout = setTimeout(() => setVisible(false), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'black', color: 'white', fontSize: '1em', zIndex: 1000,
      fontSizeAdjust: 10, fontWeight: "bolder"
    }}>
      {count}
    </div>
  );
}

export default Preloader;