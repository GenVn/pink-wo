export type Category = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  status?: "ACTIVE" | "DEACTIVE";
};

export type CategoryList = {
  data: Category[];
  total: number;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  erpId: string;
  brand: string;
  origin: string;
  type: "PRODUCT" | "CATEGORY";
  status: "ACTIVE" | "INACTIVE";
  categoryId: number;
};

export type ProductDetail = {
  productDetail: {
    id: number;
    name: "string";
    description: "string";
    imageUrl: "string";
    erpId: "string";
    brand: "string";
    origin: "string";
    type: "PRODUCT" | "CATEGORY";
    status: "INACTIVE" | "ACTIVE";
    categoryId: number;
  };
  options: [
    {
      id: number;
      name: string;
      isMultiSelect: boolean;
      optionValues: [
        {
          id: number;
          name: string;
          price: number;
          isDefault: boolean;
          isMultiValues: boolean;
        }
      ];
    }
  ];
};
