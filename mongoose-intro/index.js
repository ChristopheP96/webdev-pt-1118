const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-parttime', { useNewUrlParser: true });

const Cat = mongoose.model('Cat', { 
  name: String,
  patas: Number,
});
const User = mongoose.model('user', {
  name: { type: String, default: 'asdfghjkl'},
})

const data = [
  { name: "Ines"},
  { name: "Marco"},
  { name: "Hugo"}
]

User.create(data)
.then((user) => {
  console.log('users created', user)
  mongoose.connection.close()
});

// const garfield = new Cat({ name: 'Garfield' });

// garfield.save()
//   .then(() => console.log('meow'));

// Cat.find()
//   .then((cats) => {
//     console.log('lista', cats);
//   })