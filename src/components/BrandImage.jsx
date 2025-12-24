const BrandImage = ({ brand }) => {
  return (
    <div className="main-image">
      {brand.map((item, index) => (
        <div className="image" key={index}>
          <img src={item.logo} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export default BrandImage;
