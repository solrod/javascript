let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let overusedWords = ['really', 'very', 'basically'];

// 1
const storyWords = story.split(" ")
// 2
//console.log(`Der er ${storyWords.length} ord i teksten`);

// 3
let betterWords = [];
storyWords.forEach(forEveryWord => {
    let temp = forEveryWord;
    if (unnecessaryWords.includes(temp)){
        return true;
    } else {
        betterWords.push(temp);
    };
});

// 4
let count = 0;
storyWords.forEach(wordInText => {
    let temporary = wordInText;
    if (overusedWords.includes(temporary)){
        count +=1;
    }
});

//console.log(`Der er ${count} overused ord i teksten`);

// 5
const storySentences = story.split(".");
//console.log(`Der er ${storySentences.length} sætninger i teksten.`);

// 7
//console.log(betterWords.join(" "));

// 8 Replaced overused words with something else.
const newList = [];
storyWords.forEach(listItem => {
    if (listItem === "really"){
        listItem = "virkelig";
    } else if (listItem === "very"){
        listItem = "meget";
    } else if (listItem === "basically"){
        listItem = "i bund og grund";
    };
    newList.push(listItem);
});

console.log(newList);