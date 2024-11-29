/*
    [문제1] 영화이름 목록 , 영화 평점 목록 , 각 영화별 평점은 10점 만점
       1. 영화이름 목록 ,
          - movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ]
       2. 영화 평점 목록 , 각 영화별 평점은 10점 만점
          - movieRating = [ 8 , 8 , 7 , 6 ]
       3. HTML 예시
          - 히든페이스     ★★★★★★★★☆☆
          - 위키드         ★★★★☆☆☆☆☆☆
          - 글래디에이터2  ★★★★★★★☆☆☆
          - 청설          ★★★★★★☆☆☆☆
    [문제2] 6개 시트/좌석 이 존재하는 좌석 상태 출력하시오.
       1. 좌석은 총 6개
       2. 아래와 같이 좌석을 2칸씩 3줄 출력한다.
       3. 빈좌석이면 blue 색상표기, 예약석이면 red 색상표기 하시오.
       4. HTML 예시
       ㅁㅁ
       ㅁㅁ
       ㅁㅁ
    제출 : 카카오톡으로 과제제출
*/




// 좌석 상태 데이터 ('available' = 빈 좌석, 'reserved' = 예약석)
const seatStatus = ['available', 'reserved', 'available', 'reserved', 'available', 'reserved'];

// 전체 HTML 문자열 초기화
let html = '<div style="display: inline-block; font-size: 24px;">';

// 각 좌석 상태를 순회하며 HTML 생성
seatStatus.forEach((status, index) => {
  const color = status === 'available' ? 'blue' : 'red';
  html += `<span style="display: inline-block; width: 30px; height: 30px; background-color: ${color}; margin: 2px;">ㅁ</span>`;

  // 2칸씩 줄 바꿈
  if ((index + 1) % 2 === 0) {
    html += '<br>';
  }
});

// HTML 닫기
html += '</div>';

// 생성된 HTML 출력
document.write(html);

