//[0] 주차정보목록 : 
let 주차정보목록 = [  "빈좌석","빈좌석","빈좌석","111어1111,10:14:30","빈좌석",
    "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석",
    "빈좌석","빈좌석","222어2222,10:15:30","빈좌석","빈좌석",
    "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석"  ]
    
//[1] 입차함수 만들기 // [입차] 버튼 클릭했을떄 , 차량번호/주차위치 
function 입차함수(){  console.log( '입차함수');
// 1. [입력] 차량번호 / 주차위치 를 HTML에서 입력받은 값을 JS로 가져온다.   document.querySelector( )
let 차량번호 = document.querySelector('.inCarNum').value ; // console.log( 차량번호 );
let 주차위치 = document.querySelector('.inCarLoc').value ; // console.log( 주차위치 );
// 2. [처리] 1.빈좌석인지 아닌지 확인 2.두 정보(차량번호/입차시간)를 하나의 문자열(CSV)로 구성해서 주차정보목록(배열) 저장한다. 1.if  2. .push
// (검사1) 빈좌석인지 체크 , if에 선택한 인덱스(주차위치)가 값이 '빈좌석' 문자열 아니면 , 주차된 자리  
if( 주차정보목록[주차위치-1] != "빈좌석" ){ // != 같지않다.
console.log('이미 주차된 차량이 존재합니다.');
return; // 리턴값 , 반환값 // 함수가 종료된다.  // retrun : 함수종료 vs break 반복문종료
// 리턴하는데 값이 없이 retrun 사용시 함수 종료 목적으로 사요할수 있다.
// 함수가종료 되므로 아래 코드(등록) 는 실행되지 않는다. 
} // if end 
// (검사2) 위치가 유효한지 , 1~20 사이만 가능   // (검사3) 차량번호 유효한지 , 이미 주차된 차량번호(중복)
// 현재 시간 만들기 / 입차시간란 : 차량이 입력된 현재 시간을 구하는것 
let 오늘 = new Date();  //console.log(오늘); // 현재시간/날짜 기능/함수 제공하는 객체 반환 
let 시 = 오늘.getHours(); //console.log(시);  // 시 반환 함수 
let 분 = 오늘.getMinutes(); //console.log(분);  // 분 반환 함수
let 초 = 오늘.getSeconds(); //console.log(초);  // 초 반환 함수  
let 입차시간 = `${시}:${분}:${초}`; //console.log(입차시간); 
// !!: 주차위치란 : 현재 설계상 주차위치는 주차정보목록의 배열의 인덱스로 대체 중.   주차위치 == 배열인덱스 
// 인덱스란 : 0부터 요소의 저장순서번호 , 주차위치번호는 1부터 시작한다면, 인덱스와 주차위치번호의 차이는 -1
주차정보목록[주차위치-1] = `${차량번호},${입차시간}`; //console.log( 주차정보목록 );
// 3. [출력] 처리 결과를 내용을 출력한다.  console.log()
console.log('입차 성공')
console.log('현재 주차 현황 ')
console.log( 주차정보목록 );
} // if end 

//[2] 출차함수 만들기 // [출차] 버튼 클릭했을때 , 차량번호 
function 출차함수(){

} //






