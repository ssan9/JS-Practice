function makeStudentReport(data) {
	Object.keys(data).forEach(datum => {
		`'${datum}': '${data[datum]}'`;
	})
}

function makeStudentsReport(data) {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    results.push(`${item.name}: ${item.grade}`);
  }
  return results;
}

function makeStudentsReport(data) {
  console.log(Object.keys(data));

	Object.keys(data).forEach(datum => {
		console.log( `'${datum}': '${data[datum]}'`);
	})
}

makeStudentsReport({
  homePage: 399,
  aboutPage: 400,
  termsOfService: 22,
})

// 'homePage': '399',
	'aboutPage': '400',
	termsOfService: '22' 


const pageViewCounts = {
  homePage: 399,
  aboutPage: 400,
  termsOfService: 22,
};

console.log(Object.keys(pageViewCounts));

Object.keys(pageViewCounts).forEach(function(key) {
  console.log(`
    the ${key} page has  ${pageViewCounts[key]} views.`);
});

function makeStudentsReport(data) {
  console.log(Object.keys(data));

	Object.keys(data).forEach(datum => {
		console.log( `'[${datum}]: [${data[datum]}]'`);
	})
}

makeStudentsReport({
  homePage: 399,
  aboutPage: 400,
  termsOfService: 22,
}) //[ 'homePage', 'aboutPage', 'termsOfService' ]
// '[homePage]: [399]'
// '[aboutPage]: [400]'
// '[termsOfService]: [22]'

function makeStudentsReport(data) {
	let result = [];
	for(let i = 0; i<data.length; i++) {
		const item = data[i];
		result.push(`${item.name}: ${item.grade}`);
	}
	return result; //how to write in forEach format?
}

function enrollInSummerSchool(students) {
	return students.map(student => {
		return	{					//use return word when returning an object
			name: student.name,
			status: 'In Summer School',
			course: student.course
		}
	});
}

function findById(items, idNum) {
	return items.find(item => {
		item.id === idNum
	});
}

function findById(items, idNum) {
	for(let i = 0; i<items.length; i++) {
		if(items[i].id === idNum) {
			return items[i];
		}
	}
}

/ running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
    if(Object.keys(object).length !== expectedKeys.length) {
      return false;
    }

    else {
      for(let i = 0; i<Object.keys(object).length; i++) { //or expectedKeys.length
        if(!Object.keys(object).find(key => key === expectedKeys[i])) {
          return false;
        }
      }
    }
    
  return true;
}