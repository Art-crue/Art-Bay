

const h1 = document.createElement(`h1`);                                          // created <h1> tag so 
      h1.textContent = `Freelancer Forum`;                                        // text i wasnt inside the element
      h1.style.margin = `auto`;                                           
      h1.style.textAlign = `center`;                                              
    document.body.appendChild(h1);                                                // glues it to the body 



const freelancersArray = [                                                        // this is ithe inital array
    { name: "Dr. Slice",         price: 25,  occupation: "gardener" },
    { name: "Dr. Pressure",      price: 51,  occupation: "programmer" },
    { name: "Prof. Possibility", price: 43,  occupation: "teacher" },
    { name: "Prof. Prism",       price: 81,  occupation: "teacher" },
    { name: "Dr. Impulse",       price: 43,  occupation: "teacher" },
    { name: "Prof. Spark",       price: 76,  occupation: "programmer" },
    { name: "Dr. Wire",          price: 47,  occupation: "teacher" },
    { name: "Prof. Goose",       price: 72,  occupation: "driver" },
  ];

  
  
const averageButton = (total, element) =>{                                          // defining the function to prepare for reduce       
    return total + element.price / freelancersArray.length;                         // we renamed array `element` but using old name to use .length
};

const priceTotal = freelancersArray.reduce(averageButton,0);                        // here we are callin reduce on the array and setting the initial value - passing in average button (formula)

  console.log(`the total is ${priceTotal}`)


const averageDisplayStatment = document.createElement(`p`);                    
  averageDisplayStatment.textContent = `The average starting price is ${priceTotal}.`;
  document.body.appendChild(averageDisplayStatment)
//set inner HTML then append it



  const freelancerDisplay = freelancersArray.forEach(freelancer => {                      
    const lancerNames = `<p>${freelancer.name} ${freelancer.price} ${freelancer.occupation}</p>`
    const p2 = document.createElement(`p`);
          p2.innerHTML = lancerNames
          p2.style.textAlign = 'center'
          p2.style.margin = `auto`
        //   p2.style.display = `flex`
        //   p2.style.justifyContent = `space-evenly`
    document.body.appendChild(p2)
  });

