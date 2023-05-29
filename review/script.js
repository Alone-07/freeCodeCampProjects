const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

class Reviews {
  constructor(list, root) {
    this.lists = list;
    this.count = 0;
    this.create(root);
    this.update();
  }
  update({ id, name, job: j, img, text: t } = this.lists[this.count]) {
    imgContainer.style.backgroundImage = `url('${img}')`;
    profileName.textContent = name;
    job.textContent = j;
    text.textContent = t;
  }
  create(root) {
    root.insertAdjacentHTML(
      "afterbegin",
      `
      <div id="imgContainer"></div>
      <p id="profileName"></p>
      <p id="job"></p>
      <p id="text"></p>
      `
    );
  }
  navHandler(data) {
    if (data == "next") {
      return this.update(
        this.lists[
        this.count >= this.lists.length - 1 ? (this.count = 0) : ++this.count
        ]
      );
    }
    if (data == "pre") {
      return this.update(
        this.lists[
        this.count <= 0 ? (this.count = this.lists.length - 1) : --this.count
        ]
      );
    }
  }
}
let r = new Reviews(reviews, card);

navigationContainer.addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") return "";

  r.navHandler(e.target.dataset.navigation);
});
