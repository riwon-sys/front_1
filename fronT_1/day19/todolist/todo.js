// 오류가 나는 위치 : [1] . [2] . [3] , [4] , [5]
// 코드 작성은 못했지만 무엇을 해야 하는지 순서 작성 : 
/*
(1) 기본 화면 - 메모리 - 함수 - 수정보완 - 출력

(2) js 코드 순서 
 // [1] 예시
 // [2] 구성
 // [3] 전체출력
 // [4] 수정함수
 // [5] 삭제함수


*/

// 궁금한점?

// [1]. 
let할일목록=[ 
    {할일코드 : 1 , 할일내용 : "수업듣기" , 할일상태 : false },
    {할일코드 : 2 , 할일내용 : "밥먹기" , 할일상태 : true }

 let 식별번호 =3;
]
// [2] 등록함수 , 실행조건 : 등록버튼 클릭시 온클릭 , 매개변수 : x / 리턴값 : x
function 등록함수() { // 등록함수 start
    // 1. [입력] html로 부터 (할일내용) 입력받은 값(value)를 js로 가져온다.
    let content = document.querySelector('.contentInput').value // value 호출
    // 2. [처리] 객체 생성 --> 배열에 저장.push
    let 할일 = {
        할일코드 : 식별번호, // '식별번호' 변수값을 대입
        할일내용 : content, // 입력받은 'content' 변수값을 대입
        할일상태 : false // 초기값을 false(미완료) 대입
    }
    할일목록.push( 할일 ); // 생성한 객체를 배열에 저장/대입
    식별번호++; // 다음 할일이 등록할때 식별코드가 1씩 증가 하기 위해서
    
    console.log( 할일목록 ) // 테스트 및 확인용도
    전체출력함수();

    //+ alert

    alert('[할일 등록 했습니다.]')
    document.querySelector('.contentInput').value = ``; //[value수정]
    return; // 함수종료 , 리턴값이 없는 생략 가능
}



// [3] 전체출력함수 , 실행조건 : 1.js실행될때 2.등록/수정/삭제가 성공하였을때 , 매개변수 : x / 리턴값 : x
전체출력함수();
function 전체출력함수() 
    //1. 어디에 , #todoBottom , ducument.qureySelector
    let todoBottom= document.querySelector('#todoBottom')
    //2. 무엇을
    let html = ``
    for ( let index =0; index <= 할일목록.length-1 ; index++ ){ // index는 0부터 할일목록내 마지막인덱스까지 1씩증가반복
        let info = 할일목록[index]; // index번째의 객체(할일) 꺼내기
        // 만약에 index번째의 할일객체내 할일상태가 true이면 'success'클래스명 을 넣어주고 아니면 ''공백을 넣는다.
        html+= `<div class="contentBox${ info. 할일상태 == true ? 'success' : ''}">
                   <div class="content">${info. 할일내용 } </div>
                   <div class="contentBtns">
                        <button onclick="수정함수( ${ info. 할일코드})"  class="updateBtn">수정</button>
                        <button onclick="삭제함수( ${ info. 할일코드})" class="deleteBtn">삭제</button>
                  </div>
               </div>`
    

    //3. html출력 , innerHTML
    todoBottom.innerHTML = html;
    return; // 함수종료 , 리턴 값이 없는 생략 가능
} // 등록함수 end
    


// [4] 수정함수 
function 수정함수( 수정할일코드 ) {
    //1. 배열내 수정할 객체/요소 를 찾는다.
    for( let index = 0; index <=할일목록.length-1 ; index++ ){
        if( 할일목록[index].할일코드 == 수정할일코드 ){
            // 만약에 index번째 할일객체내 할일코드가 수정할일코드와 같다면
            // 2. 
        }
    }
}


// [5] 삭제함수 
function name(params) {
    
}
[삭제할일코드]
인덱스는 0부터 할일목록.length-1 ; ++{
for 
if
 
splice. // 삭제함수

    break; // 찾으면 종료
return;
