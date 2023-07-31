const result = [
  'animal/mammal/dog',
  'animal/mammal/cat/tiger',
  'animal/mammal/cat/lion',
  'animal/mammal/elephant',
  'animal/reptile',
  'plant/sunflower',
];

const isObject = (obj) => {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
};

const objectFactory = (keysArray) => {
  return keysArray.reduceRight((acc, curr) => ({ [curr]: acc }), true);
};

const mergeObject = (target, source) => {
  let output = Object.assign({}, target);
  if ((isObject(target), isObject(source))) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeObject(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
};

const finalObj = result.reduce((acc, curr) => {
  const keyArr = curr.split('/');
  const objectItem = objectFactory(keyArr);
  return mergeObject(acc, objectItem);
}, {});

console.log(finalObj);
console.log(finalObj.animal.mammal);
