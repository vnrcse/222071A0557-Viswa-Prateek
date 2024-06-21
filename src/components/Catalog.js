// src/components/Catalog.js
import React from 'react';

const Catalog = () => {
  const items = [
    { id: 1, name: 'Item 1', price: '$10', image: 'https://www.maplestore.in/cdn/shop/files/Apple_Watch_SE_LTE_40mm_Midnight_Aluminium_Midnight_Sport_Band_PDP_Image_2023_Position-1__en-IN_1445x.jpg?v=1701917712' },
    { id: 2, name: 'Item 2', price: '$20', image: 'https://i5.walmartimages.com/seo/Apple-Watch-SE-2nd-Gen-GPS-40mm-Starlight-Aluminum-Case-with-Starlight-Sport-Band-S-M_60c15d46-63a7-4f0e-bd52-d2ef3e65545f.1c81213fd4d8d3f22d3818e7d538d1ce.jpeg' },
    { id: 3, name: 'Item 3', price: '$30', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202403_GEO_IN_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1708673881035' },
  ];

  const catalogStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
    padding: '2rem'
  };

  const itemStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '1rem',
    textAlign: 'center'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '1rem'
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Catalog</h2>
      <div style={catalogStyle}>
        {items.map((item) => (
          <div key={item.id} style={itemStyle}>
            <img src={item.image} alt={item.name} style={imageStyle} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
