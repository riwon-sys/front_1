/*
    - for 중첩 
        -
    for( ){
        for( ) { }
    }

*/

// [1] for 중첩
   // i는 3번 반복 , j는 5번 반복 => 총 i의 출력횟수:3번 , 총 j의 출력횟수:15번
   // 즉-> 상위 for문이 1회전 마다 하위 for문 전체 회전 한다.
for( let i = 1;i<=3; i++){
    //i는 1부터 3이하까지 1씩 증가한다.
    console.log(i);
    for (let j = 1; j<=5; j++){
    //j는 1부터 5이하까지 1씩 증가한다.
    console.log( `---> ${ j }` )
    } // for2 end
} //1 for end

// [2] 구구단 중 2단부터 9단까지 만드시오.

// [반복문없이]
console.log(` 2 X 1 = ${2 * 1} `)
console.log(` 2 X 2 = ${2 * 2} `) 
console.log(` 2 X 3 = ${2 * 3} `)  
console.log(` 2 X 4 = ${2 * 4} `)  
console.log(` 2 X 5 = ${2 * 5} `)    
console.log(` 2 X 6 = ${2 * 6} `)  
console.log(` 2 X 7 = ${2 * 7} `)    
console.log(` 2 X 8 = ${2 * 8} `)  
console.log(` 2 X 9 = ${2 * 9} `)  

console.log(` 3 X 1 = ${3 * 1} `)
console.log(` 3 X 2 = ${3 * 2} `)
console.log(` 3 X 3 = ${3 * 3} `)
console.log(` 3 X 4 = ${3 * 4} `)
console.log(` 3 X 5 = ${3 * 5} `)
console.log(` 3 X 6 = ${3 * 6} `)
console.log(` 3 X 7 = ${3 * 7} `)
console.log(` 3 X 8 = ${3 * 8} `)
console.log(` 3 X 9 = ${3 * 9} `)

console.log(` 4 X 1 = ${4 * 1} `)
console.log(` 4 X 2 = ${4 * 2} `)
console.log(` 4 X 3 = ${4 * 3} `)
console.log(` 4 X 4 = ${4 * 4} `)
console.log(` 4 X 5 = ${4 * 5} `) 
console.log(` 4 X 6 = ${4 * 6} `)
console.log(` 4 X 7 = ${4 * 7} `)
console.log(` 4 X 8 = ${4 * 8} `)
console.log(` 4 X 9 = ${4 * 9} `)

console.log(` 5 X 1 = ${5 * 1} `) 
console.log(` 5 X 2 = ${5 * 2} `) 
console.log(` 5 X 3 = ${5 * 3} `) 
console.log(` 5 X 4 = ${5 * 4} `)
console.log(` 5 X 5 = ${5 * 5} `)
console.log(` 5 X 6 = ${5 * 6} `)
console.log(` 5 X 7 = ${5 * 7} `)
console.log(` 5 X 8 = ${5 * 8} `)
console.log(` 5 X 9 = ${5 * 9} `)

console.log(` 6 X 1 = ${6 * 1} `) 
console.log(` 6 X 2 = ${6 * 2} `) 
console.log(` 6 X 3 = ${6 * 3} `) 
console.log(` 6 X 4 = ${6 * 4} `) 
console.log(` 6 X 5 = ${6 * 5} `) 
console.log(` 6 X 5 = ${6 * 5} `)
console.log(` 6 X 7 = ${6 * 7} `) 
console.log(` 6 X 8 = ${6 * 8} `) 
console.log(` 6 X 9 = ${6 * 9} `) 

console.log(` 7 X 1 = ${7 * 1} `) 
console.log(` 7 X 2 = ${7 * 2} `)
console.log(` 7 X 3 = ${7 * 3} `)
console.log(` 7 X 4 = ${7 * 4} `)
console.log(` 7 X 5 = ${7 * 5} `) 
console.log(` 7 X 6 = ${7 * 6} `) 
console.log(` 7 X 7 = ${7 * 7} `)
console.log(` 7 X 8 = ${7 * 8} `)
console.log(` 7 X 9 = ${7 * 9} `)

console.log(` 8 X 1 = ${8 * 1} `)
console.log(` 8 X 2 = ${8 * 2} `)
console.log(` 8 X 3 = ${8 * 3} `) 
console.log(` 8 X 4 = ${8 * 4} `) 
console.log(` 8 X 5 = ${8 * 5} `)
console.log(` 8 X 6 = ${8 * 6} `) 
console.log(` 8 X 7 = ${8 * 7} `)
console.log(` 8 X 8 = ${8 * 8} `) 
console.log(` 8 X 9 = ${8 * 9} `)

console.log(` 9 X 1 = ${9 * 1} `)
console.log(` 9 X 2 = ${9 * 2} `)
console.log(` 9 X 3 = ${9 * 3} `)
console.log(` 9 X 4 = ${9 * 4} `)
console.log(` 9 X 5 = ${9 * 5} `)
console.log(` 9 X 6 = ${9 * 6} `)
console.log(` 9 X 7 = ${9 * 7} `)
console.log(` 9 X 8 = ${9 * 8} `)
console.log(` 9 X 9 = ${9 * 9} `)


// [반복문]
// 곱 패턴 : 1부터 9까지 1씩 증가 
for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
    console.log( ` 2 X ${ 곱 } = ${ 2 * 곱 }` )
}

for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
    console.log( ` 3 X ${ 곱 } = ${ 3 * 곱 }` )
}

for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
    console.log( ` 4 X ${ 곱 } = ${ 4 * 곱 }` )
}

for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
    console.log( ` 5 X ${ 곱 } = ${ 5 * 곱 }` )
}

for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
    console.log( ` 6 X ${ 곱 } = ${ 6 * 곱 }` )
}

for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
    console.log( ` 7 X ${ 곱 } = ${ 7 * 곱 }` )
}

for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
    console.log( ` 8 X ${ 곱 } = ${ 8 * 곱 }` )
}

for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
    console.log( ` 9 X ${ 곱 } = ${ 9 * 곱 }` )
}

// 단 패턴 : 2부터 9까지 1씩 증가 
for( let 단 = 2 ; 단<=9 ; 단++ ){
    console.log( `${ 단 } X 1 = ${ 단 * 1 } `)
}
// (1) 곱 마다 단 실행 , (2) 단 마다 곱 실행 v --> 단(상위) 곱(하위)
// 단 1번 마다 곱은 전체 실행 
// - 단 1회전마다 곱은 9번 실행된다. 
for( let 단 = 2 ; 단<=9 ; 단++ ){
    for( let 곱 = 1 ; 곱<=9 ; 곱++ ){
        console.log( `${ 단 } X ${ 곱 } = ${ 단 * 곱 }` )
    } // for2 end 
} // for1 end 






// [3] 별 모양 출력 하기 , 입력받은 줄 수 만큼 
// 예] 5 입력 했을경우 아래와 같이 5줄의 직각삼각형 출력.
/*
                줄      별          
    *           1       1           1부터 1까지 
    **          2       1 2         1부터 2까지 
    ***         3       1 2 3       1부터 3까지 
    ****        4       1 2 3 4     1부터 4까지 
    *****       5       1 2 3 4 5   1부터 5까지 
    줄 패턴 : 1부터 5까지 1씩 증가 반복 , 줄바꿈 \n(이스케이프/제어문자)
    별 패턴 : 1부터 현재줄수 까지 1씩 증가 반복 
*/
let 줄개수 = Number( prompt('줄수:') ) // 출력할 줄의 개수 
let out = ''; // 출력할 데이터를 모아두는 변수 
for( let line = 1 ; line <= 줄개수 ; line++ ){
    // (1) 별출력
    for( let star = 1 ; star <= line ; star++ ){
        out += '*' // vs out = out + '*' , 누적합계:기존데이터와 연산 
    } // for2 end 
    // (2) 줄바꿈
    out += '\n' // 줄바꿈 \n(이스케이프/제어문자) // console.log() : 출력후 줄바꿈 포함 
} // for1 end 
console.log( out )