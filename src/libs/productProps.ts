export interface productProps {
  productId: string;
  name: string;
  description: string;
  productImage: [url: string];
  skus: [
    {
      sku: string;
      skuname: string;
      skucolor: string;
      bestPriceFormatted: string;
    }
  ];
}
