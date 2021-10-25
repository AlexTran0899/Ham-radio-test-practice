const bcrypt = require('bcryptjs')
exports.seed = function (knex) {
  const hashed = (data) => bcrypt.hashSync(data, 8)
  return knex('users').insert([
    {  password: hashed("123"), email: "roman@gmail.com" , img: 'https://picsum.photos/200/300'},
    {  password: hashed("123"), email: "daniel@gmail.com" , img: 'https://picsum.photos/200/300'},
    {  password: hashed("123"), email: "kyle@gmail.com" ,img: 'https://picsum.photos/200/300'},
    { password: hashed("123"), email: "ben@gmail.com" , img: 'https://picsum.photos/200/300'},
    { password: hashed("123"), email: "issac@gmail.com" , img: 'https://picsum.photos/200/300'},
    { password: hashed("123"), email: "francis@gmail.com" ,img: 'https://picsum.photos/200/300'},
    { password: hashed("123"), email: "krisda@gmail.com" , img: 'https://picsum.photos/200/300'},
  ]);
};