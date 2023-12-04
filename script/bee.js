//Spelling Bee List
const wordList = [
  {"number":	207	, "word": "	graduate 	"},{
    "number":	208	, "word": "	furniture 	"},{
    "number":	209	, "word": "	invisible 	"},{
    "number":	210	, "word": "	manual 	"},{
    "number":	211	, "word": "	inscription 	"},{
    "number":	212	, "word": "	composition	"},{
    "number":	213	, "word": "	completely 	"},{
    "number":	214	, "word": "	Afrobeat 	"},{
    "number":	215	, "word": "	fascinated 	"},{
    "number":	216	, "word": "	poisonous 	"},{
    "number":	217	, "word": "	forearms	"},{
    "number":	219	, "word": "	recital 	"},{
    "number":	220	, "word": "	gratitude 	"},{
    "number":	221	, "word": "	intertwine 	"},{
    "number":	222	, "word": "	drawers 	"},{
    "number":	223	, "word": "	crookedly 	"},{
    "number":	224	, "word": "	fiddlehead 	"},{
    "number":	225	, "word": "	ambush	"},{
    "number":	226	, "word": "	squire 	"},{
    "number":	227	, "word": "	precious 	"},{
    "number":	228	, "word": "	occupy 	"},{
    "number":	229	, "word": "	devotion 	"},{
    "number":	230	, "word": "	fragrant 	"},{
    "number":	231	, "word": "	saucer	"},{
    "number":	233	, "word": "	submerged	"},{
    "number":	235	, "word": "	diamond 	"},{
    "number":	236	, "word": "	responsible	"},{
    "number":	239	, "word": "	stitchery 	"},{
    "number":	240	, "word": "	wafting 	"},{
    "number":	241	, "word": "	deliberately 	"},{
    "number":	242	, "word": "	wisdom	"},{
    "number":	245	, "word": "	appreciation	"},{
    "number":	247	, "word": "	awfully 	"},{
    "number":	248	, "word": "	spacious 	"},{
    "number":	249	, "word": "	intimidate	"},{
    "number":	250	, "word": "	ourselves	"},{
    "number":	251	, "word": "	inscrutable	"},{
    "number":	254	, "word": "	quip 	"},{
    "number":	255	, "word": "	salute 	"},{
    "number":	256	, "word": "	terrify	"},{
    "number":	257	, "word": "	syllables 	"},{
    "number":	258	, "word": "	bamboozled 	"},{
    "number":	259	, "word": "	delegation 	"},{
    "number":	260	, "word": "	replica	"},{
    "number":	263	, "word": "	amphitheater 	"},{
    "number":	264	, "word": "	thorax	"},{
    "number":	266	, "word": "	sausage 	"},{
    "number":	267	, "word": "	Arabic 	"},{
    "number":	268	, "word": "	disclaimer	"},{
    "number":	269	, "word": "	incubator	"},{
    "number":	271	, "word": "	congregation 	"},{
    "number":	272	, "word": "	reindeer 	"},{
    "number":	273	, "word": "	quotation 	"},{
    "number":	274	, "word": "	mischievous	"},{
    "number":	276	, "word": "	superior	"},{
    "number":	278	, "word": "	fluke 	"},{
    "number":	279	, "word": "	Brooklyn	"},{
    "number":	298	, "word": "	Vaseline 	"},{
    "number":	299	, "word": "	droll 	"},{
    "number":	300	, "word": "	sentinel	"},{
    "number":	326	, "word": "	magistrates 	"},{
    "number":	327	, "word": "	uncanny 	"},{
    "number":	328	, "word": "	communing 	"},{
    "number":	329	, "word": "	decibels	"},{
    "number":	331	, "word": "	punctually 	"},{
    "number":	332	, "word": "	Illinois 	"},{
    "number":	333	, "word": "	repose 	"},{
    "number":	334	, "word": "	malnutrition	"},{
    "number":	335	, "word": "	hitherto 	"},{
    "number":	336	, "word": "	indignant 	"},{
    "number":	337	, "word": "	tunic 	"},{
    "number":	338	, "word": "	interstellar	"},{
    "number":	340	, "word": "	Laundromat	"},{
    "number":	341	, "word": "	quarry 	"},{
    "number":	342	, "word": "	spawned	"},{
    "number":	344	, "word": "	chasm 	"},{
    "number":	345	, "word": "	deficiencies 	"},{
    "number":	346	, "word": "	acclimate	"},{
    "number":	347	, "word": "	horticulture 	"},{
    "number":	348	, "word": "	commandments 	"},{
    "number":	349	, "word": "	deadpan	"},{
    "number":	351	, "word": "	pixels 	"},{
    "number":	352	, "word": "	lasso   or lassoo	"},{
    "number":	353	, "word": "	boba 	"},{
    "number":	354	, "word": "	refuge	"},{
    "number":	357	, "word": "	nitrogen 	"},{
    "number":	358	, "word": "	attorney	"},{
    "number":	360	, "word": "	elongated 	"},{
    "number":	361	, "word": "	matterhorn	"},{
    "number":	362	, "word": "	sauna 	"},{
    "number":	363	, "word": "	secreted 	"},{
    "number":	364	, "word": "	photosynthesis 	"},{
    "number":	365	, "word": "	antechamber	"},{
    "number":	367	, "word": "	bilge	"},{
    "number":	368	, "word": "	animatronics 	"},{
    "number":	369	, "word": "	pullets 	"},{
    "number":	370	, "word": "	contemptible 	"},{
    "number":	371	, "word": "	simultaneously 	"},{
    "number":	372	, "word": "	metronome 	"},{
    "number":	373	, "word": "	jeopardy 	"},{
    "number":	374	, "word": "	antonyms	"},{
    "number":	377	, "word": "	malignant 	"},{
    "number":	378	, "word": "	incandescent 	"},{
    "number":	379	, "word": "	perpendicularity	"},{
    "number":	382	, "word": "	forsook 	"},{
    "number":	383	, "word": "	insolent	"},{
    "number":	385	, "word": "	paralysis	"},{
    "number":	386	, "word": "	altimeter 	"},{
    "number":	387	, "word": "	aspirin	"},{
    "number":	390	, "word": "	pipette   or	"},{
    "number":	392	, "word": "	conciliatory 	"},{
    "number":	393	, "word": "	turquoise   or	"},{
    "number":	395	, "word": "	centrifuge	"},{
    "number":	397	, "word": "	divot 	"},{
    "number":	398	, "word": "	defoliant 	"},{
    "number":	399	, "word": "	propitious 	"},{
    "number":	400	, "word": "	surfactant 	"},{
    "number":	401	, "word": "	aerosol	"},{
    "number":	405	, "word": "	megaron 	"},{
    "number":	406	, "word": "	lymphoma	"},{
    "number":	407	, "word": "	palomino   or	"},{
    "number":	408	, "word": "	hypocaust 	"},{
    "number":	409	, "word": "	bureaucrats 	"},{
    "number":	410	, "word": "	grebe	"},{
    "number":	412	, "word": "	luciferin 	"},{
    "number":	413	, "word": "	senescent 	"},{
    "number":	414	, "word": "	Mumbai 	"},{
    "number":	415	, "word": "	amphoras 	"},{
    "number":	416	, "word": "	conjunto 	"},{
    "number":	417	, "word": "	Chicana	"},{
    "number":	418	, "word": "	Taoism  or Daoism 	"},{
    "number":	419	, "word": "	sphagnum 	"},{
    "number":	420	, "word": "	dendrochronology 	"},{
    "number":	421	, "word": "	Trinidadian 	"},{
    "number":	422	, "word": "	frijoles 	"},{
    "number":	423	, "word": "	coleus	"},{
    "number":	425	, "word": "	Gilgamesh 	"},{
    "number":	426	, "word": "	avens	"},{
    "number":	428	, "word": "	lanthanides	"},{
    "number":	429	, "word": "	Copenhagen 	"},{
    "number":	430	, "word": "	Samian 	"},{
    "number":	431	, "word": "	Macedonia 	"},{
    "number":	432	, "word": "	nopales 	"},{
    "number":	433	, "word": "	Sumerian	"},{
    "number":	435	, "word": "	peplos   or peplus 	"},{
    "number":	436	, "word": "	Versailles 	"},{
    "number":	437	, "word": "	meitnerium	"}]

//Location Indicator
let spelling=true;

//Current Word Indicator
let currentWord=0;

const wordDisplay = document.getElementById('word-display');
const spellingBox = document.getElementById('spelling-box');
const wordNumber = document.getElementById('word-number');
const wordMin = document.getElementById('min');
const wordMax = document.getElementById('max');

//Helper Functions
function revealWord() {
    console.log(wordList[currentWord].word);
    wordDisplay.innerText = wordList[currentWord].word;
    spelling = false;
}

function newWord() {
    wordDisplay.innerText = "";
    spellingBox.value = "";
    do {
        currentWord = Math.floor(Math.random()*wordList.length)
        console.log(currentWord);
    } 
    while (!((wordList[currentWord].number>(wordMin.value-1))&&(wordList[currentWord].number<(wordMax.value+1))));
    console.log(`${wordList[currentWord].number}, ${wordList[currentWord].word}`);
    wordNumber.innerText = wordList[currentWord].number;
    spelling = true;
}

function enterButton() {

}

//Main Actions
document.getElementsByTagName('form')[0].addEventListener('submit', (e)=>{e.preventDefault()});
document.addEventListener('keydown', (e)=> {
    let keyPressed = e.key;
    if (keyPressed=='Enter') {if (spelling) {revealWord()} else {newWord()}};
    if (keyPressed=='Backspace') {if (!spelling) {
        wordDisplay.innerText = "";
        spelling = true;
    }}
});
newWord();

