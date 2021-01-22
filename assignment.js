//Problem Solved - One

function kilometerToMeter(kilometer){
    
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(9);

console.log(result);git 



//Problem Solved - Two
function budgetCalculator(watch, phone, laptop){

    var watchPrice = 50;
    var totalWatchPrice = watchPrice * watch;

    var phonePrice = 100;
    var totalPhonePrice = phonePrice * phone;

    var laptopPrice = 500;
    var totalLaptopPrice = laptopPrice * laptop;

    var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    return totalPrice;
}

var totalCost = budgetCalculator(9, 4, 2);
console.log(totalCost);


//Problem Solved -Three
function hotelCost(days){
    if(10 >= days){
        var shortDays = days * 100; 
        return shortDays;
    }
    else if(20 >= days){
        var midDays = days - 10;
        midDays = midDays * 80 + 1000;
        return midDays;
    }
    else{
        var longDays = days - 20;
        longDays = longDays * 50 + 1800;
        return longDays;
    };
}

 var cost = hotelCost(55);
 console.log(cost);
