var index = 0;
var countIndex = 0;
var i = 0;
var j = 0;
var count = new Array(); 
var result = new Array();
a = [56,2,2,89,32,32,101,49];
while (index < a.length) {
    countIndex = a[index];
    if (count[countIndex] == undefined) {
        count[countIndex] = 1;
    }
    else {
        count[countIndex] = count[countIndex] + 1;
    }
    index = index + 1;
}
alert(count);
alert(count.length);
while (i < count.length) {
    if (count[i] != undefined) {
        while (j < count[i]) {
            result.push(i);
            j = j + 1;
        }
    }
    i = i + 1;
    j = 0;
}
alert(result);