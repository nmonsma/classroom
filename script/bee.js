//Spelling Bee List
const wordList = [
  {"number":	207	, "word": "	graduate 	", "used": false},{
    "number":	208	, "word": "	furniture 	", "used": false},{
    "number":	209	, "word": "	invisible 	", "used": false},{
    "number":	210	, "word": "	manual 	", "used": false},{
    "number":	211	, "word": "	inscription 	", "used": false},{
    "number":	212	, "word": "	composition	", "used": false},{
    "number":	213	, "word": "	completely 	", "used": false},{
    "number":	214	, "word": "	Afrobeat 	", "used": false},{
    "number":	215	, "word": "	fascinated 	", "used": false},{
    "number":	216	, "word": "	poisonous 	", "used": false},{
    "number":	217	, "word": "	forearms	", "used": false},{
    "number":	219	, "word": "	recital 	", "used": false},{
    "number":	220	, "word": "	gratitude 	", "used": false},{
    "number":	221	, "word": "	intertwine 	", "used": false},{
    "number":	222	, "word": "	drawers 	", "used": false},{
    "number":	223	, "word": "	crookedly 	", "used": false},{
    "number":	224	, "word": "	fiddlehead 	", "used": false},{
    "number":	225	, "word": "	ambush	", "used": false},{
    "number":	226	, "word": "	squire 	", "used": false},{
    "number":	227	, "word": "	precious 	", "used": false},{
    "number":	228	, "word": "	occupy 	", "used": false},{
    "number":	229	, "word": "	devotion 	", "used": false},{
    "number":	230	, "word": "	fragrant 	", "used": false},{
    "number":	231	, "word": "	saucer	", "used": false},{
    "number":	233	, "word": "	submerged	", "used": false},{
    "number":	235	, "word": "	diamond 	", "used": false},{
    "number":	236	, "word": "	responsible	", "used": false},{
    "number":	239	, "word": "	stitchery 	", "used": false},{
    "number":	240	, "word": "	wafting 	", "used": false},{
    "number":	241	, "word": "	deliberately 	", "used": false},{
    "number":	242	, "word": "	wisdom	", "used": false},{
    "number":	245	, "word": "	appreciation	", "used": false},{
    "number":	247	, "word": "	awfully 	", "used": false},{
    "number":	248	, "word": "	spacious 	", "used": false},{
    "number":	249	, "word": "	intimidate	", "used": false},{
    "number":	250	, "word": "	ourselves	", "used": false},{
    "number":	251	, "word": "	inscrutable	", "used": false},{
    "number":	254	, "word": "	quip 	", "used": false},{
    "number":	255	, "word": "	salute 	", "used": false},{
    "number":	256	, "word": "	terrify	", "used": false},{
    "number":	257	, "word": "	syllables 	", "used": false},{
    "number":	258	, "word": "	bamboozled 	", "used": false},{
    "number":	259	, "word": "	delegation 	", "used": false},{
    "number":	260	, "word": "	replica	", "used": false},{
    "number":	263	, "word": "	amphitheater 	", "used": false},{
    "number":	264	, "word": "	thorax	", "used": false},{
    "number":	266	, "word": "	sausage 	", "used": false},{
    "number":	267	, "word": "	Arabic 	", "used": false},{
    "number":	268	, "word": "	disclaimer	", "used": false},{
    "number":	269	, "word": "	incubator	", "used": false},{
    "number":	271	, "word": "	congregation 	", "used": false},{
    "number":	272	, "word": "	reindeer 	", "used": false},{
    "number":	273	, "word": "	quotation 	", "used": false},{
    "number":	274	, "word": "	mischievous	", "used": false},{
    "number":	276	, "word": "	superior	", "used": false},{
    "number":	278	, "word": "	fluke 	", "used": false},{
    "number":	279	, "word": "	Brooklyn	", "used": false},{
    "number":	298	, "word": "	Vaseline 	", "used": false},{
    "number":	299	, "word": "	droll 	", "used": false},{
    "number":	300	, "word": "	sentinel	", "used": false},{
    "number":	326	, "word": "	magistrates 	", "used": false},{
    "number":	327	, "word": "	uncanny 	", "used": false},{
    "number":	328	, "word": "	communing 	", "used": false},{
    "number":	329	, "word": "	decibels	", "used": false},{
    "number":	331	, "word": "	punctually 	", "used": false},{
    "number":	332	, "word": "	Illinois 	", "used": false},{
    "number":	333	, "word": "	repose 	", "used": false},{
    "number":	334	, "word": "	malnutrition	", "used": false},{
    "number":	335	, "word": "	hitherto 	", "used": false},{
    "number":	336	, "word": "	indignant 	", "used": false},{
    "number":	337	, "word": "	tunic 	", "used": false},{
    "number":	338	, "word": "	interstellar	", "used": false},{
    "number":	340	, "word": "	Laundromat	", "used": false},{
    "number":	341	, "word": "	quarry 	", "used": false},{
    "number":	342	, "word": "	spawned	", "used": false},{
    "number":	344	, "word": "	chasm 	", "used": false},{
    "number":	345	, "word": "	deficiencies 	", "used": false},{
    "number":	346	, "word": "	acclimate	", "used": false},{
    "number":	347	, "word": "	horticulture 	", "used": false},{
    "number":	348	, "word": "	commandments 	", "used": false},{
    "number":	349	, "word": "	deadpan	", "used": false},{
    "number":	351	, "word": "	pixels 	", "used": false},{
    "number":	352	, "word": "	lasso   or lassoo	", "used": false},{
    "number":	353	, "word": "	boba 	", "used": false},{
    "number":	354	, "word": "	refuge	", "used": false},{
    "number":	357	, "word": "	nitrogen 	", "used": false},{
    "number":	358	, "word": "	attorney	", "used": false},{
    "number":	360	, "word": "	elongated 	", "used": false},{
    "number":	361	, "word": "	matterhorn	", "used": false},{
    "number":	362	, "word": "	sauna 	", "used": false},{
    "number":	363	, "word": "	secreted 	", "used": false},{
    "number":	364	, "word": "	photosynthesis 	", "used": false},{
    "number":	365	, "word": "	antechamber	", "used": false},{
    "number":	367	, "word": "	bilge	", "used": false},{
    "number":	368	, "word": "	animatronics 	", "used": false},{
    "number":	369	, "word": "	pullets 	", "used": false},{
    "number":	370	, "word": "	contemptible 	", "used": false},{
    "number":	371	, "word": "	simultaneously 	", "used": false},{
    "number":	372	, "word": "	metronome 	", "used": false},{
    "number":	373	, "word": "	jeopardy 	", "used": false},{
    "number":	374	, "word": "	antonyms	", "used": false},{
    "number":	377	, "word": "	malignant 	", "used": false},{
    "number":	378	, "word": "	incandescent 	", "used": false},{
    "number":	379	, "word": "	perpendicularity	", "used": false},{
    "number":	382	, "word": "	forsook 	", "used": false},{
    "number":	383	, "word": "	insolent	", "used": false},{
    "number":	385	, "word": "	paralysis	", "used": false},{
    "number":	386	, "word": "	altimeter 	", "used": false},{
    "number":	387	, "word": "	aspirin	", "used": false},{
    "number":	390	, "word": "	pipette   or	", "used": false},{
    "number":	392	, "word": "	conciliatory 	", "used": false},{
    "number":	393	, "word": "	turquoise   or	", "used": false},{
    "number":	395	, "word": "	centrifuge	", "used": false},{
    "number":	397	, "word": "	divot 	", "used": false},{
    "number":	398	, "word": "	defoliant 	", "used": false},{
    "number":	399	, "word": "	propitious 	", "used": false},{
    "number":	400	, "word": "	surfactant 	", "used": false},{
    "number":	401	, "word": "	aerosol	", "used": false},{
    "number":	405	, "word": "	megaron 	", "used": false},{
    "number":	406	, "word": "	lymphoma	", "used": false},{
    "number":	407	, "word": "	palomino   or	", "used": false},{
    "number":	408	, "word": "	hypocaust 	", "used": false},{
    "number":	409	, "word": "	bureaucrats 	", "used": false},{
    "number":	410	, "word": "	grebe	", "used": false},{
    "number":	412	, "word": "	luciferin 	", "used": false},{
    "number":	413	, "word": "	senescent 	", "used": false},{
    "number":	414	, "word": "	Mumbai 	", "used": false},{
    "number":	415	, "word": "	amphoras 	", "used": false},{
    "number":	416	, "word": "	conjunto 	", "used": false},{
    "number":	417	, "word": "	Chicana	", "used": false},{
    "number":	418	, "word": "	Taoism  or Daoism 	", "used": false},{
    "number":	419	, "word": "	sphagnum 	", "used": false},{
    "number":	420	, "word": "	dendrochronology 	", "used": false},{
    "number":	421	, "word": "	Trinidadian 	", "used": false},{
    "number":	422	, "word": "	frijoles 	", "used": false},{
    "number":	423	, "word": "	coleus	", "used": false},{
    "number":	425	, "word": "	Gilgamesh 	", "used": false},{
    "number":	426	, "word": "	avens	", "used": false},{
    "number":	428	, "word": "	lanthanides	", "used": false},{
    "number":	429	, "word": "	Copenhagen 	", "used": false},{
    "number":	430	, "word": "	Samian 	", "used": false},{
    "number":	431	, "word": "	Macedonia 	", "used": false},{
    "number":	432	, "word": "	nopales 	", "used": false},{
    "number":	433	, "word": "	Sumerian	", "used": false},{
    "number":	435	, "word": "	peplos   or peplus 	", "used": false},{
    "number":	436	, "word": "	Versailles 	", "used": false},{
    "number":	437	, "word": "	meitnerium	", "used": false}]

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
    wordList[currentWord].used = true;
    spelling = false;
}

function newWord() {
    wordDisplay.innerText = "";
    spellingBox.value = "";
    let used = true;
    let inside = false;
    const minimum = Number(wordMin.value);
    const maximum = Number(wordMax.value);
    do {
        currentWord = Math.floor(Math.random()*wordList.length);
        used = wordList[currentWord].used;
        inside = ((wordList[currentWord].number>minimum-1)&&(wordList[currentWord].number<maximum+1));
        console.log(currentWord, used, wordMin.value, wordMax.value, inside);
    } while (!inside);
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

