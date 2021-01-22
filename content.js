var color = "red";
var millionText = '<span style="color:' + color + '"><b>$1$2 million</b> (You could buy with: $$1 million: Huge house in suburbs; nice condo downtown in large city | $$10 million: A small hospital | $$100 million: Large city office building | $$450 million: An Airbus A380, the world\'s largest passenger airliner)</span>';
var billionText = '<span style="color:' + color + '"><b>$1$2 billion</b> (You could buy with: $$1 billion: Burj Khalifa, world\'s tallest building | $$55 billion: Cost of a human mission to Mars with a crew of four | $$299 billion: GDP of Greece)</span>';
var trillionText = '<span style="color:' + color + '"><b>$1$2 trillion</b> (You could buy with: $$2 trillion: Apple, the world\'s largest company | $$4.79 trillion: United States annual federal budget for 2020 | $$19.49 trillion: US GDP in 2017 | $$100 trillion: Global GDP in 2017)</span>';

var millionText2 = '<span style="color:' + color + '"><b>$1 million $3</b> (You could buy with: $$1 million: Huge house in suburbs; nice condo downtown in large city | $$10 million: A small hospital | $$100 million: Large city office building | $$450 million: An Airbus A380, the world\'s largest passenger airliner)</span>)</span>';
var billionText2 = '<span style="color:' + color + '"><b>$1 billion $3</b> (You could buy with: $$1 billion: Burj Khalifa, world\'s tallest building | $$55 billion: Cost of a human mission to Mars with a crew of four | $$299 billion: GDP of Greece)</span>';
var trillionText2 = '<span style="color:' + color + '"><b>$1 trillion $3</b> (You could buy with: $$2 trillion: Apple, the world\'s largest company | You could buy with: $$4.79 trillion: United States annual federal budget for 2020 | $$19.49 trillion: US GDP in 2017 | $$100 trillion: Global GDP in 2017)</span>';

function alterElements(tag) {

    var elements = document.getElementsByTagName(tag);
    for (var i = 0; i < elements.length; i++) {
        element = elements[i];

 
    element.innerHTML = element.innerHTML.replace(/&nbsp;/g, ' ') // NOTE - This might cause a performance hit but I couldn't figure out another way to capture &nbsp;
        .replace(/([\$|£])([0-9.,]+)(\s?million|m)/gi, millionText)
        .replace(/([\$|£])([0-9.,]+)(\s?billion|bn)/gi, billionText)
        .replace(/([\$|£])([0-9.,]+)(\s?trillion|trn)/gi, trillionText)
        .replace(/([0-9.,]+)(\s?Millionen|Mio\.)\s(Euro|€|Dollar)/gi, millionText2)
        .replace(/([0-9\.,]+)\s?(Milliarden|Mrd\.)\s(Euro|€|Dollar)/gi, billionText2)
        .replace(/([0-9.,]+)(\s?Billiaredn|Bln\.)\s(Euro|€|Dollar)/gi, trillionText2)
    }    
}


alterElements('p', color);
alterElements('td', color);
alterElements('li', color);

