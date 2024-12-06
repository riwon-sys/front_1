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
         

        1. setitem('key' ,value ) : 세션/쿠키 값 저장하는 함수 . key와 value를 한 쌍으로 저장하는 구조
        2. getitem('key') : 세션/쿠키 값 호출 하는 함수 , key를 호출함으로써 value 가 반환되는 구조
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
