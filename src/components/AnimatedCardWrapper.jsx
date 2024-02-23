import {useState, useEffect}  from "react";
const AnimatedCardWrapper = ({ children }) => {
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
        // Trigger animation when the component mounts or when data changes
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 4000); // Adjust the duration as needed
        return () => clearTimeout(timeout);
      }, [children]);
    
    return <div className={animate ? "card animate" : "card"}>{children}</div>;
  };
  export default AnimatedCardWrapper