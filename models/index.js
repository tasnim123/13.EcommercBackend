// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  as: 'category',
  foreignKey: 'category_id',
})

// Categories have many Products
Category.hasMany(Product, {
  as: 'products',
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  as: 'producttags',
  through: ProductTag,
  foreignKey: 'product_id',
  otherKey: 'tag_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  as: 'tagproducts',
  through: ProductTag,
  foreignKey: 'tag_id',
  otherKey: 'product_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
