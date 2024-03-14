import React, {useState} from 'react'
const Icon = ({isActive, svgPath}) => {

const [iconHover, setIconHover] = useState(false)
const iconStyle = {
    fill: isActive?'white': iconHover? '#FC4747' : '#5A698F'
    
}
  
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
     style={iconStyle}
    onMouseOver={()=> setIconHover(true)}
    onMouseLeave={()=> setIconHover(false)}
    >
      <path d={svgPath} />
      </svg>
  );
};

export default Icon;
