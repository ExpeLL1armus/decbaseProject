// $(document).ready(function(){
//     $('.slider').slick();
// });

new Swiper('.swiper-container', {
    spaceBetween: 300,
    loop: true,
    navigation: {
        nextEl: '.slide-next',
        prevEl: '.slide-prev',
    },
});


// let response = "https://jsonplaceholder.typicode.com/posts"

const filtersContainer = document.querySelector('.whatWeDo-btns');

filtersContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('whatWeDo-btn')) {
    const filter = event.target;
    const isActive = filter.classList.contains('active');
    let buttons = filtersContainer.querySelectorAll('.whatWeDo-btn')

    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    if (!isActive) {
      filter.classList.add('active');
    }
    // else {
    //   filter.classList.remove('active');
    // }
  }
});

let items = {
    data: [
    {
        itemName: "Interior Design1",
        category: "Interior",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/interior.png"
    },
    {
        itemName: "Architecture1",
        category: "Architecture",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/architecture.png"
    },
    {
        itemName: "Planning1",
        category: "Planning",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/planning.png"
    },
    {
        itemName: "Interior Design2",
        category: "Interior",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/interior.png"
    },
    {
        itemName: "Architecture2",
        category: "Architecture",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/architecture.png"
    },
    {
        itemName: "Planning2",
        category: "Planning",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/planning.png"
    },
    {
        itemName: "Interior Design3",
        category: "Interior",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/interior.png"
    },
    {
        itemName: "Architecture3",
        category: "Architecture",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/architecture.png"
    },
    {
        itemName: "Planning3",
        category: "Planning",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/planning.png"
    },
    {
        itemName: "Interior Design4",
        category: "Interior",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/interior.png"
    },
    {
        itemName: "Architecture4",
        category: "Architecture",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/architecture.png"
    },
    {
        itemName: "Planning4",
        category: "Planning",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/planning.png"
    },
    {
        itemName: "Interior Design5",
        category: "Interior",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/interior.png"
    },
    {
        itemName: "Architecture5",
        category: "Architecture",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/architecture.png"
    },
    {
        itemName: "Planning5",
        category: "Planning",
        itemDescr: "Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore.",
        image: "./img/whatWeDo/planning.png"
    }
]
}

for (let i of items.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    let name = document.createElement("h5");
    name.classList.add("item-name");
    name.innerText = i.itemName.toUpperCase();
    let descr = document.createElement("p");
    descr.classList.add("item-descr");
    descr.innerText = i.itemDescr;
    cardContainer.appendChild(name);
    cardContainer.appendChild(descr);
    card.appendChild(cardContainer);
    document.querySelector(".items").appendChild(card);
}


// let lastProjects = items.data.slice(-3);
// displayProjects(lastProjects);


function filterProduct(value) {
    // let buttons = document.querySelectorAll(".whatWeDo-btn");
    // buttons.forEach((button) => {
    //   //check if value equals innerText
    //   if (value.toUpperCase() == button.innerText.toUpperCase()) {
    //     button.classList.add("active");
    //   } 
    //   else {
    //     button.classList.remove("active");
    //   }
    // });

    let elements = document.querySelectorAll(".card");
    let numElements = elements.length;
    elements.forEach((element) => {
      if (value == "all") {
        for (let i = numElements - 3; i < numElements; i++) {
            elements[i].classList.remove("hide");
        }
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
}


window.onload = () => {
    filterProduct("all");
};

const progressBar = document.querySelector('#progress-bar')
const nav = document.querySelector('nav')

const animateProgressBar = () => {
    let scrollDistance = -nav.getBoundingClientRect().top;
    let progressWidth = 
        (scrollDistance /
            (nav.getBoundingClientRect().height - document.documentElement.clientHeight)) *
        100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";

    if(value < 0) {
        progressBar.style.width = "0%";
    }
};

window.addEventListener("scroll", animateProgressBar);