var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var userSchema = new Schema({
    email: { type: String, required: true, trim: true},
    lastName: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true }
});


userSchema.statics = {

    list: function(options, cb) {
        var criteria = options.criteria || {};

        this.find(criteria)
            .sort({'lastName': 1})
            .limit(options.perPage)
            .skip(options.perPage * options.page)
            .exec(cb);
    },
    create: function(target, cb) {
        new this(target).save(cb);
    }
};


mongoose.model('User', userSchema);