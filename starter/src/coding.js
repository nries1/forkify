var john = {

  name : 'John',

  age : 30,

  bills : [124,48,268,180],

  calculateTip : function() {

    this.tips = new Array();

    this.billsWithTips = new Array();

    this.tipSum = 0;

    for(var i=0;i<this.bills.length;i++){

      var bill = this.bills[i];

     var percentage;

     if(bill<50) percentage=0.2;

     else if(bill>=50 && bill<=200) percentage=0.15;

     else percentage=0.1;

     this.tips[i] = bill*percentage;

     this.billsWithTips[i] = bill+bill*percentage;

     this.tipSum += bill*percentage;

    }

  }

}



var mark = {

name : 'Mark',

age : 31,

bills : [134,34,732,112],

calculateTip : function() {

this.tips = new Array();

this.billsWithTips = new Array();

this.tipSum = 0;

for(var i=0;i<this.bills.length;i++){

var bill = this.bills[i];

var percentage;

if(bill<50) percentage=0.1;

else if(bill>=50 && bill<=200) percentage=0.15;

else percentage=0.2;

this.tips[i] = bill*percentage;

this.billsWithTips[i] = bill+bill*percentage;

this.tipSum += bill*percentage;

}

}

}



function averageTips(tipSum,numberOfTips){
   return tipSum/numberOfTips;
}



john.calculateTip();

mark.calculateTip();



john.averageTip=averageTips(john.tipSum, john.tips.length);

mark.averageTip=averageTips(mark.tipSum, mark.tips.length);



console.log(john.averageTip);



console.log(john , mark);

console.log("The average tip for John is " + john.averageTip + " and for Mark is " + mark.averageTip);