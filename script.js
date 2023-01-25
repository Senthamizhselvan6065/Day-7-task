//  Day 07:ARRAY METHODS
// Get all the countries from the Asia continent /region using the Filter function

// Question a:

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
  
//     var res =result.filter((ele)=>ele.region === "Asia")
//      var res1 =res.map((ele)=>ele.region)
//      console.log(res1);

//  }

 // Output :

//  script.js:232 (50) ['Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia']0: "Asia"1: "Asia"2: "Asia"3: "Asia"4: "Asia"5: "Asia"6: "Asia"7: "Asia"8: "Asia"9: "Asia"10: "Asia"11: "Asia"12: "Asia"13: "Asia"14: "Asia"15: "Asia"16: "Asia"17: "Asia"18: "Asia"19: "Asia"20: "Asia"21: "Asia"22: "Asia"23: "Asia"24: "Asia"25: "Asia"26: "Asia"27: "Asia"28: "Asia"29: "Asia"30: "Asia"31: "Asia"32: "Asia"33: "Asia"34: "Asia"35: "Asia"36: "Asia"37: "Asia"38: "Asia"39: "Asia"40: "Asia"41: "Asia"42: "Asia"43: "Asia"44: "Asia"45: "Asia"46: "Asia"47: "Asia"48: "Asia"49: "Asia"length: 50[[Prototype]]: Array(0)



//Question b:

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
  
//    var res = result.filter((ele)=>ele.population<200000)
//    var arr = res.map((ele)=>ele.population)
//    console.log(arr);

//  }

// Output

// script.js:136 (62) [28875, 55197, 77265, 13452, 1000, 97928, 106766, 63903, 17408, 0, 3000, 300, 30237, 106290, 65720, 2072, 550, 18100, 155014, 71991, 2563, 48865, 140, 33691, 56367, 112519, 168783, 62999, 0, 451, 85032, 100800, 119446, 38137, 59194, 115021, 39244, 4922, 10834, 1470, 2302, 57557, 18092, 56, 9417, 4255, 53192, 183629, 38659, 6069, 110947, 198410, 33938, 98462, 40812, 30, 2562, 1411, 105697, 38718, 11792, 11750]0: 288751: 551972: 772653: 134524: 10005: 979286: 1067667: 639038: 174089: 010: 300011: 30012: 3023713: 10629014: 6572015: 207216: 55017: 1810018: 15501419: 7199120: 256321: 4886522: 14023: 3369124: 5636725: 11251926: 16878327: 6299928: 029: 45130: 8503231: 10080032: 11944633: 3813734: 5919435: 11502136: 3924437: 492238: 1083439: 147040: 230241: 5755742: 1809243: 5644: 941745: 425546: 5319247: 18362948: 3865949: 606950: 11094751: 19841052: 3393853: 9846254: 4081255: 3056: 256257: 141158: 10569759: 3871860: 1179261: 11750length: 62[[Prototype]]: Array(0)


// Question c:

//   var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
  
//     var arr = result.forEach((ele)=>console.log(`${ele.name} : ${ele.capital} : ${ele.flag}`))
//     console.log(arr);

//  }


// Question d:

//   var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
  
//   var arr = result.reduce((acc,cv)=>acc +cv.population,0)
//   console.log(arr);

//  }


//  // Output :

//  7759438109


//Question e:

//   var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
  
//   var res = result.filter((ele)=>{
//     for(let key in ele.currencies){
//         if(ele.currencies[key].code==="USD"){
//             console.log(ele.name);
//         }
//     }
//   })

//  }

// Output :

// American Samoa
// Bonaire, Sint Eustatius and Saba
// British Indian Ocean Territory
// Virgin Islands (British)
// Virgin Islands (U.S.)
// Cambodia
// Ecuador
// El Salvador
// Guam
// Marshall Islands
// Micronesia (Federated States of)
// Northern Mariana Islands
// Palau
// Panama
// Puerto Rico
// Timor-Leste
// Turks and Caicos Islands
// United States of America 