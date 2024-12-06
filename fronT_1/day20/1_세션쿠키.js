/* 
   객체 : 여러 가지 자료를 하나의 자료 타입 구조
     객차 종류 :
          1. 내가 만든 객체 
          2.(미 리 존재한) 남이 만든 객체 : document , console , new Date()등등
          -> 남이 (도구제공)
          -> 내가 (라이브러리)
   세션 과 쿠키
      - 브라우저( HTML/CSS/JS  , HTTPS;통신 -> 랜더링;그려주는 프로그램 )
      - F12(개발자도구 -네트워크탭-f5키 클릭 / 어플리케이션탭 ;세션 및 로컬스토리지 )
      1. 세션 : 사용자가 웹페이지를 방문하고 있는 동안 메모를 저장하는 공간 , 휘발성 , 세션스토리지
         [예] 검색엔진 , 임시데이터
      2. 쿠키 : 사용자가 웹페이지를 방문이 끝나도 메모리를 저장하는 공간 , 비휘발성 , 로컬스토리지
         [예] : 자동로그인 구현
     
       sessionStorage  / localStorage  객체의 속성/기능 제공
          - .(도트,접근)연산자 : 객체내 속성 값 접근 및 호출 사용
         

        1. setitem('key' , value ) : 세션/쿠키 값 저장하는 함수 . key와 value를 한 쌍으로 저장하는 구조
        2. getitem('key') : 세션/쿠키 값 호출 하는 함수 , key를 호출함으로써 value 가 반환되는 구조
        * 주의 : 세션과 쿠키는 무조건 문자열로 구성된 자료 , 문자만 저장 가능 , 배열이나 객체는 저장 할 수 없다.
        * > 해결책 : 타입 변환(변경)
             문자열 <----> 객체(json)
             문자열 <----> 숫자 : Number( )
             숫자 <----> 문자열 : String( )
    
    json( javascript object notaion ) 객체 : 자바스크립트 객체 문법의 형식
       - 실무에서 많이 사용되는 형식 , json/xml/csv
       1.json.stringfy({ 속성명 : 값 , 속성명 : 값 }) : { } ---> 문자 : '{ 속성명 : 값 , 속성명 : 값 }'
       2.json.parse( '{ 속성명 : 값 , 속성명 : 값 }' ) : 문자열 ---> { } -: { 속성명 : 값 , 속성명 : 값 }
          -> 3 하고 '3'은 다르다   /   {} 하고 '{}'은 다르다.
*/         
// [1] 세션
console.log( sessionStorage ) // 세션
console.log( localStorage ) // 쿠키

// [2] 세션 / 쿠키 데이터 삽입 , 키와 값을 한 쌍으로 하는 데이터 구조
sessionStorage.setItem( 'name' , '유재석') // F12 - 어플리케이션탭 - 왼쪽 세션스토리지버튼 - 주소확인
localStorage.setItem('age' , 40 ) // F12 - 어플리케이션탭 - 왼쪽 로컬스토리지버튼 - 주소확인

// [3] 세션/ 쿠키 데이터 호출 , 키를 이용한 값 호출
let반환값1 =sessionStorage.getItem( 'name' ); console.log( 반환값1 ); // 유재석
let반환값2 =localStorage.getItem( 'age' ); console.log( 반환값2 ); // 40
let반환값3 =sessionStorage.getItem( 'phone' ); console.log( 반환값3 ); // null ; 객체가 없다는 뜻을 가짐

// [4] * 관례적으로 세션과 쿠키에 
console.log( JSON.stringify({ "name" : "유재석" })); // { "name" : "유재석" } -> '{ "name" : "유재석" }'
console.log( JSON.parse('{ "name" : "유재석" })'); // '{ "name" : "유재석" }' -> { "name" : "유재석" }

sessionStorage.setItem( '할일',JSON.stringify{ 할일내용 : '밥먹기' , 할일상태 : false } ) ) ;          // 객체를 저장 할 수 없다.
let반환값4 = sessionStorage.getItem('할일'); console.log( 반환값4); // { 할일내용 : '밥먹기' , 할일상태 : false } // 문자열
console.log(JSON.parse(반환값4)); // { 할일내용 : '밥먹기' , 할일상태 : false } // 객체

// 개발자도구에서 f12 [콘솔] 타입확인방법
 //  1. 데이터가 파랑색이면 숫자
 //  2. 데이터가 검정색이면 문자열
 //  3. 데이터가 ▶{ } 이면 객체
 //  4. 데이터가 ▶[ ] 이면 배열