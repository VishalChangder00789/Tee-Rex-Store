export const getAllProductProperties = (Products) => {
  let ProductTypes = [];
  let ProductColors = [];
  let ProductGender = [];

  let minPrice = 99999999999;
  let maxPrice = 0;

  for (let i = 0; i < Products.length; i++) {
    let fetchedProductType = Products[i].type;
    let fetchedProductColor = Products[i].color;
    let fetchedProductGender = Products[i].gender;

    let fetchedPrice = Products[i].price;

    if (fetchedPrice < minPrice) {
      minPrice = fetchedPrice;
    }

    if (fetchedPrice > maxPrice) {
      maxPrice = fetchedPrice;
    }

    if (!ProductTypes.includes(fetchedProductType)) {
      ProductTypes.push(fetchedProductType);
    }

    if (!ProductColors.includes(fetchedProductColor)) {
      ProductColors.push(fetchedProductColor);
    }

    if (!ProductGender.includes(fetchedProductGender)) {
      ProductGender.push(fetchedProductGender);
    }
  }

  let Price = { minPrice, maxPrice };

  return { ProductTypes, ProductColors, ProductGender, Price };
};
