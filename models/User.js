import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required field"],
        trim:true
    },
    email:{
          type:String,
          required:[true,"Email is required field"],
          unique:true,
          lowercase:true
    },
    password:
    {
        type:String,
        required:[true,"Password is required field"]
    },
    role:{
        type:String,
      enum: ['candidate', 'employer', 'admin'],
      default:'candidate'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

// Compare password method
userSchema.methods.matchPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const User=mongoose.model('User', userSchema);
export default User;