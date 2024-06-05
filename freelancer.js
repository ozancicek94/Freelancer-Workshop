// grab the hmtl elements into js for later use.

const freelancersList = document.querySelector("#freelancerList");

const averagePrice = document.querySelector("#averagePrice");

// style the page a little since we do not have a css file.

document.querySelector("body").style.textAlign = "center";
document.querySelector("body").style.fontFamily = "sans-serif"

const titles = document.querySelector("#titles");

titles.style.display = "flex";
titles.style.justifyContent = "space-between";
titles.style.margin = "3em";
titles.style.fontWeight = "bolder"




// create the freelancers array with inital freelancers

const freelancersArr = [{name: "Alice", occupation: "Writer", startingPrice: 30},
  {name: "Bob", occupation: "Teacher", startingPrice: 50}
]



// create the possible freelancers array to add later one-by-one

const possibleFreelancersArr = [
  { name: "Dr. Slice", startingPrice: 25, occupation: "gardener" },
  { name: "Dr. Pressure", startingPrice: 51, occupation: "programmer" },
  { name: "Prof. Possibility", startingPrice:43, occupation: "teacher" },
  { name: "Prof. Prism", startingPrice: 81, occupation: "teacher" },
  { name: "Dr. Impulse", startingPrice: 43, occupation: "teacher" },
  { name: "Prof. Spark", startingPrice: 76, occupation: "programmer" },
  { name: "Dr. Wire", startingPrice: 47, occupation: "teacher" },
  { name: "Prof. Goose", startingPrice: 72, occupation: "driver" },
];


// create the function that updates the freelancer list on the page.

function updateFreelancers () {

  freelancersList.innerHTML = "";

  freelancersArr.forEach (freelancer => {
    const li = document.createElement("li");
    // li.textContent = `${freelancer.name} ${freelancer.occupation} ${freelancer.startingPrice}`;
    // freelancersList.appendChild(li);
    li.style.display = "flex";
    li.style.justifyContent = "space-between"
    li.style.margin = "3em"


    const nameSpan = document.createElement("span");
    const occupationSpan = document.createElement("span");
    const priceSpan = document.createElement("span");

    nameSpan.textContent = `${freelancer.name}`;
    occupationSpan.textContent = `${freelancer.occupation}`;
    priceSpan.textContent = `$ ${freelancer.startingPrice}`;

    li.appendChild(nameSpan);
    li.appendChild(occupationSpan);
    li.appendChild(priceSpan);

    freelancersList.appendChild(li);




  })
}

// call the updateFreelancers() function to add and load the inital 2 freelancers to the page

updateFreelancers();





// // create a function that adds a new freelancer to the freelancersArr array.


function addFreelancer (name, occupation, startingPrice) {

  freelancersArr.push({name, occupation, startingPrice});
  updateFreelancers()

};

// updateFreelancers();



// create a function to grab the next freelancer from the possible freelancers array.

function addNextFreelancer () {
  if (possibleFreelancersArr.length > 0) {
    const nextFreelancer = possibleFreelancersArr.shift();
    addFreelancer(nextFreelancer.name, nextFreelancer.occupation, nextFreelancer.startingPrice);

  }
};

// create function that calculates the average starting price. 

function updateAveragePrice () {
  averagePrice.textContent = "";

  let sumStPr = 0;

  for(let i=0; i<freelancersArr.length; i++) {
    sumStPr += freelancersArr[i].startingPrice
  }

  averagePrice.textContent =  `The average starting price is ${sumStPr/freelancersArr.length}.`

}

// call both functions every 3 seconds

setInterval (addNextFreelancer, 3000);

setInterval(updateAveragePrice, 3000);



















