let cal_btn = document.querySelector(".calculator");
cal_btn.addEventListener('click', ()=>{
    // console.log("salam")
let dob = document.querySelector("#date").value;
let getDate = new Date(dob);
console.log(dob);
let dobDate = getDate.getDate();
let dobMonth = getDate.getMonth()+1;
let dobYear = getDate.getFullYear();
// console.log(getDate,dobDate,dobMonth,dobYear);

let currentDate = new Date();
let curDate = currentDate.getDate();
let curYear = currentDate.getFullYear();
let curMonth = currentDate.getMonth()+1;
// setVariable
let setYear = document.querySelector(".set-year")
let setMonth = document.querySelector(".set-month")
let setDate = document.querySelector(".set-day")
//calculate the age
let year,month,date;
year = curYear-dobYear;
console.log(year)
if(curMonth>=dobMonth){
    month = curMonth-dobMonth;
}else{
    year--
    month = 12+ curDate-dobMonth
}
if(curDate>=dobDate){
    date = curDate-dobDate;
}else{
    year--
    date = new Date(year,month,0).getDate()+curDate-dobDate;
}
console.log(year,date,month)
setYear.textContent = year;
setMonth.textContent = month;
setDate.textContent = date;
})