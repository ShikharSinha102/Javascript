const Cal_Age_Btn = document.querySelector('#cal-age-btn');


const ageCalculate = ()=>{

    console.log("hii")

    const today = new Date();
    const inputDate = new  Date(document.querySelector('#date-input').value);
    console.log(inputDate.getDate());


    const birthdetails = {
        date : inputDate.getDate(),
        month : inputDate.getMonth() ,
        year : inputDate.getFullYear()
    }

    



const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDate = today.getDate();



if( isFutureDate(birthdetails,currentYear, currentMonth,currentDate)    ){
    alert("not Born Yet")
    displayResult("-", "-", "-")
    return;

}


const { years, months , days } = calculateAge(
    birthdetails,
    currentYear,
    currentMonth,
    currentDate
);

displayResult(days, months, years)

}





function isFutureDate( birthdetails, currentYear, currentMonth, currentDate){
    return (
        birthdetails.year > currentYear || 
        ( birthdetails.year === currentYear  && (

            birthdetails.month >currentMonth || 
            (
                birthdetails.month === currentMonth && birthdetails.date > currentDate
            )

                                                )
        )

        );
}

const calculateAge = (birthdetails, currentYear, currentMonth , currentDate)=>{
    let years = currentYear - birthdetails.year;
    

    let months , days;

    if ( currentMonth < birthdetails.month){
        years--;
        
        months = 12 - ( birthdetails.month - currentMonth);

    }else{

        months = currentMonth - birthdetails.month;
    }


    if(currentDate < birthdetails.date){
        months--;

        const lastMonth = currentMonth === 1 ? 12 : currentMonth -1;
        const daysInLastMonth = getDaysInMonth( lastMonth, currentYear);
        days = daysInLastMonth - ( birthdetails.date - currentDate);
    }else{
        days = currentDate - birthdetails.date;
    }

    return{years,months, days};


};


const getDaysInMonth = (month, year)=>{

    const isLeapYear = year % 4 === 0 && ( year % 100 != 0 || year % 400 === 0); 

    const getDaysInMonth = [
        31,
        isLeapYear ? 29 : 28 ,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];


    return getDaysInMonth[ month -1];

};



const displayResult = ( bdate, bmonth , byear)=>{
    document.querySelector('#years').textContent = byear;
    document.querySelector('#months').textContent = bmonth;
    document.querySelector('#days').textContent = bdate;
}








Cal_Age_Btn.addEventListener('click', ageCalculate);