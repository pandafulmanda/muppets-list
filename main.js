var muppetsData = [
  {
    name: "Kermit the Frog",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg",
    wikiURL: "https://en.wikipedia.org/wiki/Kermit_the_Frog",
    puppeteer: {
      name: "Jim Henson",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Jim_Henson_%281989%29_headshot.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/Jim_Henson"
    }
  }, {
    name: "Miss Piggy",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/2/22/MissPiggy.jpg",
    wikiURL: "https://en.wikipedia.org/wiki/Miss_Piggy",
    puppeteer:  {
      name: "Frank Oz",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/3/34/Frank_Oz_2012.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/Frank_Oz"
    }
  }, {
    name: "Fozzie Bear",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/5/51/Fozzie_Bear.jpg",
    wikiURL: "https://en.wikipedia.org/wiki/Fozzie_Bear",
    puppeteer:  {
      name: "Frank Oz",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/3/34/Frank_Oz_2012.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/Frank_Oz"
    }
  }, {
    name: "Gonzo",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/0/0a/Gonzo_the_Great.jpg",
    wikiURL: "https://en.wikipedia.org/wiki/Gonzo_(Muppet)",
    puppeteer:  {
      name: "Dave Goelz",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/54/DaveGoelz_%282009%29.JPG",
      wikiURL: "https://en.wikipedia.org/wiki/Dave_Goelz"
    }
  }, {
    name: "Rowlf the Dog",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/b/b5/Rowlf_the_Dog.jpg",
    wikiURL: "https://en.wikipedia.org/wiki/Rowlf_the_Dog",
    puppeteer: {
      name: "Jim Henson",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Jim_Henson_%281989%29_headshot.jpg",
      wikiURL: "https://en.wikipedia.org/wiki/Jim_Henson"
    }
  }
];


var listElement = document.querySelector('#muppets-list');

var muppetsHTMLArray = [];

for (var index = 0; index < muppetsData.length; index ++) {

  var muppetData = muppetsData[index];
  var muppetHTML = `
  <a href="${muppetData.wikiURL}" target="_blank" class="list-group-item list-group-item-action flex-column">
    <h1>${muppetData.name}</h1>
    <img class="img-thumbnail" src="${muppetData.imageURL}"/>
    <p>Performed by</p>
    <img width="100" src="${muppetData.puppeteer.imageURL}"/>
  </a>
  `;

  muppetsHTMLArray.push(muppetHTML);
}


var muppetsHTML = muppetsHTMLArray.join('');

// Render the content
listElement.innerHTML = muppetsHTML;

