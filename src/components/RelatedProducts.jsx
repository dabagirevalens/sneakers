import React from "react";

const RelatedProducts = () => {
  const data = [
    {
      src: "/images/image-product-1.jpg",
      title: "sneakers",
    },
    {
      src: "/images/image-product-2.jpg",
      title: "Jordan",
    },
    {
      src: "/images/image-product-3.jpg",
      title: "all stars",
    },
    {
      src: "/images/image-product-4.jpg",
      title: "puma",
    },
    {
      src: "/images/nike-1.jpg",
      title: "nike",
    },
    {
      src: "/images/nike-2.jpg",
      title: "new shoes",
    },
    {
      src: "/images/nike-3.jpg",
      title: "next gen",
    },
  ];

  const myRef = React.createRef();

  const prevClick = () => {
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;

    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  const nextClick = () => {
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;

    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };

  return (
    <div className="related-products">
      <h1>Related Projects</h1>
      <div className="related-products-wrapper" ref={myRef}>
        {data.map((product) => (
          <div className="card" key={product.title}>
            <img src={product.src} alt={product.title} />
            <div>
              <h2> {product.title} </h2>
              <a href="/">more ...</a>
            </div>
          </div>
        ))}
        <div className="row">
          <i className="bx bx-chevron-left prev-prods" onClick={prevClick} />
          <i className="bx bx-chevron-right next-prods" onClick={nextClick} />
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
