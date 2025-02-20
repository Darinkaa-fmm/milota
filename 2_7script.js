console.log('Hello, World!');
alert ("Алгоритмы обработки в коллекциях в JS")

// Напишите функцию, производящую бинарный поиск студентов в
// массиве по фамилии и имени. Сортировку массива произвести при
// помощи метода sort().

function binSearch(arr, el, start = 0, end = arr.length - 1) {
    const middle = ((start + end)/2);
    if (el === arr[middle]) {
        return middle;
    }
    if (start >= end) {
        return -1;
    }
    if (el < arr[middle]) {
        return binSearch(arr, el, start, middle - 1);
    }
    else return binSearch(arr, el, middle + 1, end);
}

binSearch(["Burakshaev Nikita", "Popov Ildar", "Garaev Rail",
    "Meschanov Dmitry", "Romanov Egor"].sort(), "Ivanov Ivan", 0, 
    ["Burakshaev Nikita", "Popov Ildar", "Garaev Rail",
        "Meschanov Dmitry", "Romanov Egor"].length - 1);