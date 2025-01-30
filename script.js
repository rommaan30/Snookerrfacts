
// index.js

// Sample JSON data
const snookerData = {
  "snooker_facts": [
    {
      "fact": "Origins",
      "description": "Snooker was invented in the late 19th century by British Army officers stationed in India. The game evolved from billiards and was formalized in 1875."
    },
    {
      "fact": "The Name",
      "description": "The term 'snooker' originally referred to a rookie or inexperienced soldier. The name was adopted for the game after a player used it to describe a situation where an opponent had no available shots."
    },
    {
      "fact": "World Championship",
      "description": "The World Snooker Championship is one of the most prestigious tournaments in the sport, first held in 1927. It takes place annually at the Crucible Theatre in Sheffield, England."
    },
    {
      "fact": "The Balls",
      "description": "A standard snooker table has 22 balls: 15 red balls worth 1 point each, 6 colored balls worth between 2 and 7 points, and 1 white cue ball."
    },
    {
      "fact": "Table Size",
      "description": "A full-size snooker table measures 12 feet by 6 feet, making it larger than most billiard tables. The larger size adds to the game's complexity and skill requirement."
    },
    {
      "fact": "Scoring System",
      "description": "Players score points by potting balls in a specific order: they must first pot a red ball, followed by a colored ball, and repeat this process until all reds are potted."
    },
    {
      "fact": "Professional Players",
      "description": "Some of the most famous snooker players include Stephen Hendry, Ronnie O'Sullivan, and Steve Davis, each of whom has made significant contributions to the sport."
    },
    {
      "fact": "Television Popularity",
      "description": "Snooker gained immense popularity in the UK during the 1980s, largely due to televised matches and the charismatic personalities of players like Steve Davis."
    },
    {
      "fact": "The Maximum Break",
      "description": "The highest possible score in a single frame of snooker is 147, achieved by potting all 15 reds with 15 blacks and then potting all the colors. This is known as a 'maximum break.'"
    },
    {
      "fact": "Global Reach",
      "description": "While snooker is most popular in the UK, it has a growing following in countries like China, where the sport has seen a surge in popularity and investment in recent years."
    }
  ]
};

// Function to display snooker facts
function displaySnookerFacts() {
  const factsContainer = document.getElementById('facts-container');
  snookerData.snooker_facts.forEach(fact => {
    const factElement = document.createElement('div');
    factElement.classList.add('fact');
    factElement.innerHTML = `<h3>${fact.fact}</h3><p>${fact.description}</p>`;
    factsContainer.appendChild(factElement);
  });
}

// Call the function to display facts
displaySnookerFacts();
