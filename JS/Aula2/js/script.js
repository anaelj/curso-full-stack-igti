window.addEventListener('load',()=> {

    doMap();
    doFilter();
    doForEach();
    doReduce();
    doFind();
    doSome();
    doEvery();
    doSort();
}) 

function doMap() {
    const nameEmailArary = people.results.map(person => {
        return {
            name: person.name,
            email: person.email
        }
    });
    return nameEmailArary;
  //console.log(nameEmailArary);
}

function doFilter () {
    const olderThan50 = people.results.filter (person => {
        return person.dob.age > 50;
    })
   return olderThan50;
 //   console.log(olderThan50);
}

function doForEach () {
    const mappedPeople = doMap();
    mappedPeople.forEach(person => {
       person.nameSize = person.name.title.length + person.name.first.length + person.name.last.length;
    });
    console.log(mappedPeople);
}

function doReduce(){
    const totalAges = people.results.reduce((accumulator, current)=> {
        return accumulator + current.dob.age;
    },0)
    console.log(totalAges);
}

function doFind (){
    const found = people.results.find(person => {
        return person.location.state === 'Minas Gerais';
    })
    console.log(found);
}

function doSome (){
    const found = people.results.some(person => {
        return person.location.state === 'Amazonas';
    })
    console.log(found);
}

function doEvery(){
    const every = people.results.every(person => {
        return person.nat === 'BR'
    })
    console.log(every);
}

function doSort() {
    const mappedNames = people.results.map( person => {
      return { name: person.name.first};
    })
    .filter (person => {
        return person.name.startsWith('A');
    })
    .sort((a,b) => {
       return a.name.localeCompare(b.name); 
    })
    console.log(mappedNames);
}

