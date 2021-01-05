// var elements = document.getElementsByTagName('*');

// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];

//         if (node.nodeType === 3) {
//             var text = node.nodeValue;
//             var replacedText = text.replace(/([\$])?([0-9.]+)\s?(billion|bn)/gi, '<span style="color:' + 'red' + '">$1$2 million!!xx</span>');

//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }


var color = "red";

var elements = document.getElementsByTagName('p');
for (var i = 0; i < elements.length; i++) {
    element = elements[i];

element.innerHTML = element.innerHTML.replace(/([\$])([0-9.]+)(\s?million|m)/gi, '<span style="color:' + color + '">$1$2 million (You could buy with: $$1 million: Huge house in suburbs; nice condo downtown in large city | $$10 million: A small hospital | $$100 million: Large city office building)</span>')
    .replace(/([\$])([0-9.]+)\s?(billion|bn)/gi, '<span style="color:' + color + '">$1$2 billion (You could buy with: $$1 billion: Burj Khalifa, world\'s tallest building | $$55 billion: Cost of a human mission to Mars with a crew of four | $$299 billion: GDP of Greece)</span>')
    .replace(/([\$])([0-9.]+) \s?(trillion|tn)/gi, '<span style="color:' + color + '">$1$2 trillion (You could buy with: $$4.79 trillion: United States annual federal budget for 2020 | $$19.49 billion: US GDP in 2017 | $$100 trillion: Global GDP in 2017)</span>')
}

