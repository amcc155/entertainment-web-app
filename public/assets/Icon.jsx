const Icon = ({isActive, svgPath}) => {

const iconStyle = {
    fill: isActive?'white':'#5A698F'
}
  
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
     style={iconStyle}
         
    >
      <path d={svgPath} />
      </svg>
  );
};

export default Icon;
