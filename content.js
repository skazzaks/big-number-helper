// var elements = document.getElementsByTagName('*');

// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];

//         if (node.nodeType === 3) {
//             var origText = node;
//             var text = origText;

//             text = text.replace(/([0-9]+)bn/gi, "$1,000,000,000"); // Note this worked for expanding the number
//             text = text.replace(/([0-9]+)trn/gi, "$1,000,000,000,000");
//             if (text !== origText) {
//                 element.replaceChild(document.createTextNode(text), node);
//             }
            
//         }
//     }
// }

var color = "red";
document.body.innerHTML = document.body.innerHTML.replace(/([\$])?([0-9.]+)\s?(million|ml)/gi, '<span style="color:' + color + '">$1$2 million</span>')
    .replace(/([\$])?([0-9.]+)\s?(billion|bn)/gi, '<span style="color:' + color + '">$1$2 billion</span>')
    .replace(/([\$])?([0-9.]+) \s?(trillion|tn)/gi, '<span style="color:' + color + '">$1$2 trillion</span>')