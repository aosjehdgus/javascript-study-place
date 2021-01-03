var superObj = {superVal:'super'}
var subObj = Object.create(superObj);

subObj.subVal = 'sub';
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

