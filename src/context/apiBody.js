const apiBody = (productData) => {
  const object = {
    id: productData.id,
    name: productData.name,
    description: productData.description,
    price: productData.price,
    image: productData.image,
    rating: productData.rating,
    quantity: productData.quantity,
  };
  return object;
};

export default apiBody;
