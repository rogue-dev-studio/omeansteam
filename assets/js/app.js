
// ! function t() {
//     try {
//         ! function t(n) {
//             1 === ("" + n / n).length && 0 !== n || function () {}.constructor("debugger")(), t(++n)
//         }(0)
//         if(n===1){
//             myFunction();
//         }
//     } catch (n) {
//         setTimeout(t, 5e3)
//         console.log(t());
//     }
// }();

// if(!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}){
// console.log('a');

// }else{
// console.log('as');
// }
// if(anonymous()){
//     myFunction();
// }

var xxs = $('body');
xxs.addClass(xxs.height() > 1 ? "tall" : "narrow");
// !function test() {
// 	// 捕获异常，递归次数过多调试工具会抛出异常。
// 	try{
// 		!function cir(i)
// 		{
// 			// 当打开调试工具后，抛出异常，setTimeout执行test无参数，此时i == NaN，("" + i / i).length == 3
// 			// debugger设置断点
// 			(("" + i / i).length == 3 && 1 !== ( "" + i / i).length || 0===i ) && (function(){}.constructor("debugger")()),cir(++i);
//       // if(("" + i / i).length == 3 && 1 !== ( "" + i / i).length || 0===i ){
//       //   document.getElementById("demo").remove();
//       // }
//       console.log(i);
// 		} (0)
// 	} catch(e) {
// 		setTimeout(test,500)
// 	}
// }()
// var i =0;
// function a(){
//   debugger;
//   b(i+1);
//   i++;
// }
// function b(i){
//   console.log('aaa');
//   console.log(i);
// }
// setInterval(a,200);
// ! function t() {
//     try {
//         ! function t(n) {
//             ((1 === ("" + n / n).length) && (0 !== n) || (function () {}.constructor("debugger")())), t(++n)
//             // console.log(("" + n / n).length);
//             // if((function () {}.constructor("debugger")())){
//               console.log(n)
//             // }else{
//             //   console.log('s')
//             // }
//         }(0)
//         // if(n===1){
//         //     myFunction();
//         // }
//     } catch (n) {
//         setTimeout(t, 5e3);
//         // console.log('sss')
//         // console.log(t)
//         // // console.log(t(++n))
//         // console.log(("" + n / n).length)
//         // if(("" + n / n).length===3){
//         //   console.log('sdsds');
//         //   // myFunction2();
//         // }
//     }
// }();
// if(constructor('debugger')){document.getElementById("demo").remove();}
// (function() {
//     (function(f) {
//       (function a() {
//         try {
//           function b(i) {
//             if (('' + (i / i)).length !== 1) {
//              // (function() {}).constructor('debugger')();
//               myFunction();
//               console.log( b(i));
//               console.log(('' + (i / i)).length);
//               // console.log('a');
//               // myFunction2();
//               // if(('' + (i / i)).length===3){
//               //   myFunction2();
//               // }
//             } else {
//               // console.log(('' + (i / i)).length);
//               debugger;
              
//               // console.log('cc');
//             //   if((function() {}).constructor('debugger')){
//                 // myFunction3();
//             //   }
//             // myFunction2();
//             }
//             // if(('' + (i / i)).length ===1){
//             //   myFunction2();
//             // }
//             // if(i % 1!==0){
//             //   console.log(i % 1);
//             // }else{
//             //   // myFunction2();
//             //   console.log(i % 1);
//             // }
//             b(++i);
//             // if(b.length==0){
//             //     // myFunction();
//             // }
//           }
//           b(0);
//         } catch (e) {
//           f.setTimeout(a, 1000);
//         }
//       })();
//     })(document.body.appendChild(document.createElement('iframe')).contentWindow);
//   })();
// (function() {(function(f) {(function a() {try {function b(i) {if (('' + (i / i)).length !== 1 || i % 20 === 0) {(function() {}).constructor('debugger')();} else {debugger ;}b(++i);}b(0);} catch (e) {f.setTimeout(a, 5000)}})()})(document.body.appendChild(document.createElement('frame')).contentWindow);})
(function() {
    (function(f) {
        (function a() {
            try {
                function b(i) {
                    if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                        (function() {}).constructor('debugger')();
                    } else {
                        debugger ;
                    }
                    b(++i);
                }
                b(0);
            } catch (e) {
                f.setTimeout(a, 1000)
            }
        })()
    })(document.body.appendChild(document.createElement('iframe')).contentWindow);
}
)
function myFunction2() {
    const element = document.getElementById("demo");
    element.remove();
  
  }
function myFunction() {
  (function() {}).constructor('debugger')();

}
function myFunction3() {
  debugger ;
}
// console.log('a');
// console.log('b');
// debugger;
// console.log('c');
// import { logXyz } from "./btn-back-to-top.js";


// logXyz();
$(document).ready(function () {
    // const container = document.querySelector('.navbar');

    // const content = document.createElement('div');
    // content.classList.add('xxx');
    // content.textContent = 'This is the glorious text-content!';
    
    // container.appendChild(content);
    // console.log(t(n));
    });