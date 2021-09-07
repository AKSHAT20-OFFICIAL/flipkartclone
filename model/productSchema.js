import mongoose from 'mongoose';
//import autoIncrement from 'mongoose-auto-increament';

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
});

//autoIncrement.initialize(mongoose.connection);
//productSchema.plugin(autoIncrement.plugin, 'product');

const products = mongoose.model('product', productSchema);

export default products;