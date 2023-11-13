// models/Item.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this item.'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  }
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
