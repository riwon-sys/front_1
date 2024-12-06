/*
  - 세션을 이용한 회원가입 및 로그인 구현
*/ 

// [1] 회원가입 함수정의
    // - 함수 언제 사용할껀지? [가입]하였을때
    // - 함수의 인자값(매개변수) ? x
    // - 함수의 리턴값(반환) ? x
// let memberlist=[ ] // 지금부터는 회원목록을 세션 및 쿠키에 저장

 function 회원가입함수( ){
    //1. [입력]
    let id = document.querySelector('.signId').value;  // 입력받은 아이디 값을 갖고옴   // 각  input 의 value 값 가져오기
    let pw = document.querySelector('.signPw').value; // 입력받은 패스워드 값을 갖고옴 // 각  input 의 value 값 가져오기
    //2. [처리]
    let member = { 'id' : id , 'pw' : pw }; // 입력받은 값으로 객체를 생성
       // * 회원 목록 정보를 전역변수에 선언 하지 않고 세션/쿠키에 저장 > 왜 외부에 저장할까? 
       // * > js 외부(브라우저)에 저장하면 js가 새로고침/변화가 있어도 저장이 유지됨
       
       // - (1) 현재 회원정보를 저장하기 위한 회원정보목록을 세션에서 가져오기.
       let memberList = sessionStorage.getItem( 'memberList' ); 
       console.log( memberList ); // 존재하지 않은 'key'를 호출하면 null 반환된다.
       // - (2) 회원정보목록이 존재하면 존재하지 않으면
       if( memberList == null ){
        // 만약에 가져온 세션 데이터(memberlist)가 null(없다는 의미)이면
        memberList = []; // 빈 배열을 생상하여 변수에 대입한다.
       } // if end
        else{ // 만약에 갖고온 세션 데이터(memberlist)가 존재한다면 , 문자열 ---> 객체(json)으로 변환한다.
            memberList = JSON.parse( memberList );
        }
        console.log( memberList );
       
        // 배열에 입력받은 객체 저장
       memberList.push( member ); console.log( memberList );

       // - 변화가 있는 배열을 세션 또는 쿠키에 다시 저장해야됨(새로고침)
       // - (1) key 와 value 로 구성된 세션 정보를 저장하는데, value값을 문자열 타입으로 변환하여 저장한다.
       sessionStorage.setItem( 'memberList' , JSON.stringify( memberList ) )
       


    //3. [출력]

    return; // 함수종료 // 값 없을 때에는 생략가능함.
 }

 // [2] 로그인 함수 , [로그인] 버튼을 클릭했을때
 function 로그인함수() { // c (회원가입) / r(로그인,조회,비교)
    
    // 회원가입이란 ? : 입력한 정보들을 어딘가에 저장 및 기록
    // 로그인이란 ? : 로그(기록)으로 들어가는 것, 기록(회원가입)과 일치한 정보 비교해서 들어감.

   let loginId = document.querySelector('.loginId').value;
   let signPw = document.querySelector('.signPw').value;

   let memberList = sessionStorage.getItem('memberList');
   if( memberList == null ){
    memberList = [] // 회원정보목록이 없으면 빈배열 생성
   }else{ // 아니면
    memberList =JSON.parse( memberList ); // 회원정보목록이 존재하면 json 타입으로 변환
   }
   
   // 로그인 정보가 회원정보목록(기록)내 존재하는지 비교
   for( let index =0 ; index<=memberList.length-1; index++){
    let.info = memberList[index]; // index 번째의 회원정보 객체 호출
    if (info.id == loginId && info.pw == loginPw ){
        console.log(info);
        alert('로그인성공')
        return
    }
   }// for end

   alert('로그인실패')
   return;
 }// f end

 // [3] 세션에 있는 회원정보목록을 반환하는 함수
 function 회원정보목록반환함수 () { // 매개변수 x , 리턴값 : memberList
    
    let memberList = sessionStorage.getItem('memberList');
    if( memberList == null ){
     memberList = [] // 회원정보목록이 없으면 빈배열 생성
    }else{ // 아니면
     memberList =JSON.parse( memberList ); // 회원정보목록이 존재하면 json 타입으로 변환
    }
    return memberList; // 함수가 종료되면서 함수를 호출했던것으로 반환/리턴 하는 값
 }// f end