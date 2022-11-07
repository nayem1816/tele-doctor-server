const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const DataSchema = mongoose.Schema(
    {
        name: { type: String, unique: true, required: true },
    },
    { versionKey: false }
);

const CategoriesModel = mongoose.model('categories', DataSchema);
DataSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = CategoriesModel;
