import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      return db.products.find((product) => product.id === args.productId);
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      return db.categories.find((category) => category.id === args.categoryId);
    },
  },
  Product: {
    category: ({ categoryId }, args: any, context: any) => {
      return db.categories.find((category) => category.id === categoryId);
    },
    review: ({ id }, args: any, context: any) => {
      return db.reviews.filter((review) => review.productId === id);
    },
  },
  Category: {
    product: ({ id }, args: any, context: any) => {
      return db.products.filter((product) => product.categoryId === id);
    },
  },
};
