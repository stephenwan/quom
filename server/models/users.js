var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;


var userSchema = new Schema({
    accountName: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true},    
    lastName: { type: String, trim: true },
    firstName: { type: String, trim: true },
    company:  { type: String,  trim: true },
    phone: { type: String,  trim: true },
    fax: { type: String,  trim: true },
    address: { type: String, trim: true},
    addressExtra:  { type: String,  trim: true },
    city:  { type: String,  trim: true },
    country:  { type: String,  trim: true },
    postalCode:  { type: String,  trim: true },
    hashed_password: { type: String },
    salt: { type: String }
});

userSchema.virtual('password')
          .set(function(password) {
              this._password = password;
              this.salt = this.makeSalt();
              this.hashed_password = this.encryptPassword(password);
          })
          .get(function() { return this._password });

userSchema.methods = {
    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },

    encryptPassword: function (password) {
        if (!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                         .update(password)
                         .digest('hex');
        } catch (err) {
            return '';
        }
    },

    authenticate: function(password) {
        return this.encryptPassword(password) === this.hashed_password;
    }    
};

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