
const BrandImage = ({ brand }) => {
  return (
    <div className="main-image">
      {brand.map((item, index) => (
        <div className="image">
          <img src={item.logo} alt={item.alt} key={index} />
        </div>
      ))}
    </div>
  );
};

export default BrandImage;
