console.log('Hello, World!');
alert ("Алгоритмы обработки в коллекциях в JS")

// Реализуйте функцию для поиска в двух заданных массивах
// элементов, которые присутствуют в обоих массивах.
function one(arr1, arr2) {
    let s1 = new Set(arr1);
    let s2 = new Set(arr2);
    let du = arr1.filter((el) => s2.has(el));
    console.log(du);
    alert (du);
}
one([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

// Реализуйте функцию, которая подсчитывает количество 
// вхождений каждого элемента в массиве.
function two(arr) {
    const cnt = new Map();
    arr.forEach(el => {
        cnt.set(el, (cnt.get(el) || 0) + 1)});
    for (const [key, value] of cnt.entries()) {
        console.log(key + ": "+ value);
        alert (key + ": " + value);
    }
}
two([0, 1, 6, 2, 5, 2, 5, 1, 5, 6, 1]);

// В массиве студентов подсчитать число обучающихся в 
// самой большой группе.
function three(arrst) {
    let arrgr = [];
    let cntgr = [];
    let max = -7;
    for (let i = 0; i < arrst.length; i++) {
        ind = arrgr.indexOf(arrst[i].gr);
        if (ind != -1) {
            cntgr[ind]++;
            if (cntgr[ind] > max) max = cntgr[ind];
        }    
        else {
            arrgr.push(arrst[i].gr);
            cntgr.push(1);
        }
    }
    console.log(max);
    alert(max);
}

class Student {
    constructor(gr) {
        this.gr = gr;
    }
}

three([new Student(4341), new Student(4441), new Student(4141),
new Student(4241), new Student(4341), new Student(4241), 
new Student(4141), new Student(4441), new Student(4341), 
new Student(4242), new Student(4242), new Student(4142), 
new Student(4441), new Student(4341), new Student(4341), 
new Student(4341), new Student(4141), new Student(4441)]);







