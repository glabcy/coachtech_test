//問題①
const array = [2, 4, 7, 5, 4, 3, 8];
const newarray = array.filter(function(value, index, array) {
  return array.indexOf(value) === index;
})
console.log(newarray);

//問題②
function leapYear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
console.log(leapYear(2021));