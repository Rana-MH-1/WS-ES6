const ages = [15,32,18,20,25,24,29,26,37];
//affichage de tous les ages

for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]+1)
}

//forEach
const agess = ages.forEach(age=> console.log(age))
console.log(ages.forEach(age=> console.log(age+1)))

const mappedAgedd = ages.map(function(el){
    return el+1
})
//map

const mappedAged = ages.map(el=> el*2)

//affichage des el dont l'index est pair
const MappedAged = ages.map((el,i)=>{ 
    if (i %2 ==0) {
      return el
    }
}  )

// output[ 15, undefined, 18, undefined, 25, undefined, 29, undefined, 37 ]

//Es5
for (let i = 0; i < ages.length; i++) {
    if(ages[i]>=20){
        return ages[i]
    }
}
 //ES6
const filterr = ages.filter(function(age){
    if(age >= 20){
        return age
    }
})

//filter ES6
const filtered = ages.filter(age => age >= 20)

//sort ages
const ages2 =[1, 1000,2,34,62,5000,]
const sorted = ages2.sort()
console.log(sorted) // [ 1, 1000, 2, 34, 5000, 62 ] //sorted the first number of el

const Sorted = ages.sort((a,b)=> a-b) // sorted from low to heigh number
const SOrted = ages.sort((a,b)=> b-a) // sorted from heigh to low number

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
// affichage de tous les noms de companies
  const Companies = companies.map(company=>
    company.name)

    //affichage des companies dont la category est Retail
    const Retail = companies.filter(company=> company.category === 'Retail')
    console.log(Retail)

    //affichage des companies dont leur age>=10
    const aged10Comp = companies.filter(company=> (company.end - company.start) >=10)
    console.log(aged10Comp)

    //sort the companies with sorted sort 
    const sortedd = companies.sort(function(c1,c2){
        if(c1.start>c2.start){
            return 1
        }
        else {
            return -1
        }
    }) 
    //ternary condition
    const sorteddd = companies.sort(function(c1,c2){
        (c1.start>c2.start)? 1 : -1

    })
    
    const sorttted = companies.sorted((c1,c2)=> c1.start-c2.start)

    //méthode Es5
    let sum =0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i]
    }
    
    //reduce

    //ES6
    const summ = ages.reduce((total,curr)=> total+ curr,0)

    //combined Methods
    const Ages = [35,16,23,8,17,38,12,28];
    ages
    .map(age => age*2) 
    .filter(el => el>= 20)
    .sort((a,b)=> a+b)
    .reduce((tot,curr)=> tot + curr,0)









