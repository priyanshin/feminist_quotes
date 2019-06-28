var NumberOfQuotes = 28

var quotes = new BuildArray(NumberOfQuotes)

// Use the following variables to 
// define your random quotes:
quotes[1] = "\"I'm tough, I'm ambitious, and I know exactly what I want. If that makes me a bitch, okay.\" - Madonna"
quotes[2] = "\"Feminism is the radical notion that women are human beings.\" ― Cheris Kramarae"
quotes[3] = "\"Women make up one half of society. Our society will remain backward and in chains unless its women are liberated, enlightened and educated.\" ― Saddam Hussein"
quotes[4] = "\"Women may be the one group that grows more radical with age.\" ― Gloria Steinem"
quotes[5] = "\"Feminism has never been about getting a job for one woman. It's about making life more fair for women everywhere. It's not about a piece of the existing pie; there are too many of us for that. It's about baking a new pie.\" ― Gloria Steinem"
quotes[6] = "\"I'm not going to limit myself just because people won't accept the fact that I can do something else.\" ― Dolly Parton"
quotes[7] = "\"Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women.\" ― Maya Angelou"
quotes[8] = "\"You deserve to be here. You deserve to exist. You deserve to take up space in this world of men.\" ― Mackenzi Lee"
quotes[9] = "\"I think the girl who is able to earn her own living and pay her own way should be as happy as anybody on earth. The sense of independence and security is very sweet.\" ― Susan B. Anthony"
quotes[10] = "\"If women want rights more than they got, why don't they just take them, and not be talking about it.\" ― Sojourner Truth"
quotes[11] = "\"I deserve better —such a dangerous, mad thought for a woman to entertain.\" ― Meredith Duran"
quotes[12] = "\"Because when there is true equality, resentment does not exist.\" ― Chimamanda Ngozi Adichie"
quotes[13] = "\"You can wipe your feet on me, twist my motives around all you like, you can dump millstones on my head and drown me in the river, but you can't get me out of the story. I'm the plot, babe, and don't ever forget it.\" ― Margaret Atwood"
quotes[14] = "\"People call me a feminist whenever I express statements that distinguish me from a doormat.\" ― Rebecca West"
quotes[15] = "\"The essence of oppression is that one is defined from the outside by those who define themselves as superior by criteria of their own choice.\" ― Andrea Dworkin"
quotes[16] = "\"There shall never be another season of silence until women have the same rights men have on this green earth.\" ― Susan B. Anthony"
quotes[17] = "\"A woman is human. She is not better, wiser, stronger, more intelligent, more creative, or more responsible than a man. Likewise, she is never less. Equality is a given. A woman is human.\"  ― Vera Nazarian"
quotes[18] = "\"Humankind is made up of two sexes, women and men. Is it possible for humankind to grow by the improvement of only one part while the other part is ignored? Is it possible that if half of a mass is tied to earth with chains that the other half can soar into skies?\" ― Mustafa Kemal Atatürk"
quotes[19] = "\"If you think my waistline defines my worth, you are not worth my time anyways.\" ― Maria Elena"
quotes[20] = "\"She had resolved to never take another step backward.\" ― Kate Chopin"
quotes[21] = "\"You educate a man; you educate a man. You educate a woman; you educate a generation.\" ― Brigham Young"
quotes[22] = "\"There's nothing a man can do, that i can't do better and in heels\" ― Ginger Rogers"
quotes[23] = "\"My advice, as in everything, is to read widely and think for yourself We need more dissent and less dogma.\" ― Camille Paglia"
quotes[24] = "\"The feminists had destroyed the old image of woman, but they could not erase the hostility, the prejudice, the discrimination that still remained.\" ― Betty Friedan"
quotes[25] = "\"I'm not ashamed to dress 'like a woman' because I don't think it's shameful to be a woman.\" ― Iggy Pop"
quotes[26] = "\"It is in the interests of both sexes to hear the other sex's experience of powerlessness.\" ― Warren Farrell"
quotes[27] = "\"The essence of oppression is that one is defined from the outside by those who define themselves as superior by criteria of their own choice.\" ― Andrea Dworkin"
quotes[28] = "\"A WOMAN'S PLACE IS IN THE HOUSE...AND THE SENATE.\" ― Kristin Hannah"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

document.getElementById('quotebox').style.height="200px";
document.getElementById('quotebox').style.width="400px";
document.getElementById('quotebox').style.fontSize="14pt";

function PickRandomQuote(frm) {
// Generate a random number between 1 and NumberOfquotes
var rnd = Math.ceil(Math.random() * NumberOfQuotes)

// Display the quote inside the text box
// frm.quoteBox.value = quotes[rnd]
//   console.log()
document.getElementById("quotebox").innerHTML = quotes[rnd];
}