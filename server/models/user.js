const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  notebooks: [{
    notes: [{
      name: String,
      trashed: { type: Boolean, default: false },
      status: Number,
      tags: [{ type: String }],
      markdown: String // -1 means "not started" 0 means "working" 1 means "completed"
    }]
  }],
  tags: [{
    type: String
  }],
}, {
  timestamps: true
})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next()
  } else {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  }
})

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = User = mongoose.model('User',userSchema)
