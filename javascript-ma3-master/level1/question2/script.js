//Console.log out elements in JSON file


var author = '{"video": [{"id": 12312412312, "name": "Ecuaciones Diferenciales", "url": "/video/math/edo/12312412312", "author": {"data": [{"name_author": "Alejandro Morales", "url": "/author/alejandro-morales", "type": "master"}] }}]}'

objekt = JSON.parse(author);
console.log(objekt)

for (x in objekt) {
console.log(objekt[x]);
}
