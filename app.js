// Есть массив с данными «343»,«547»,«5», «767»,«098»,«».
// Ваша задача написать алгоритм, который будет проверять является ли строка палиндромом.
// Если является, то выводить true, в другом случае false.


function palindrome(str) {
    let reversed = str.split('') // разделил
    let reversed1 = reversed.reverse() // перевернул
    let reversed2 = reversed1.join(''); // обратно вставил
    return str === reversed2;
}

const dataArray = ["343", "547", "5", "767", "098", ""];
dataArray.forEach(function (str) {
    console.log(palindrome(str));
});
