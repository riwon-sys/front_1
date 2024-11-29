// 주차 공간을 20개로 초기화 (0: 비어있음, 1: 차량 있음)
let parkingSpaces = new Array(20).fill(0);  // 0으로 초기화된 배열


// 입차관련
function parkCar() { // func start
    const carNumber = document.getElementById('carNumber').value;
    const parkingSpace = parseInt(document.getElementById('parkingSpace').value) - 1; // 0-based index로 변환
    const message = document.getElementById('message');

    if (carNumber === "" || parkingSpace < 0 || parkingSpace >= 20) {
        message.textContent = "잘못된 입력입니다. 차량 번호와 위치를 확인하세요.";
        return;
    }

    if (parkingSpaces[parkingSpace] === 1) {
        message.textContent = "입차불가: 해당 위치에 이미 차량이 있습니다.";
    } else {
        parkingSpaces[parkingSpace] = 1;  // 해당 위치에 차량을 배정
        message.textContent = `입차성공! 차량번호 ${carNumber}가 위치 ${parkingSpace + 1}에 주차되었습니다.`;
        updateParkingLot();  // 주차장 상태 업데이트
    }
} //func end


// 출차관련
function exitCar() { // func start
    const carNumber = document.getElementById('carNumber').value;
    const message = document.getElementById('message');

    if (carNumber === "") {
        message.textContent = "차량 번호를 입력해주세요.";
        return;
    }

    let parked = false;
    let parkedAt = -1;

    for (let i = 0; i < parkingSpaces.length; i++) {
        if (parkingSpaces[i] === 1) {
            parked = true;
            parkedAt = i;
            break;
        }
    }

    if (!parked) {
        message.textContent = "출차불가: 차량이 주차된 위치가 없습니다.";
        return;
    }

    const hoursParked = 1;  // 하루 내로 가정, 1초당 100원
    const parkingFee = hoursParked * 3600 * 100;  // 1시간 주차료 계산
    parkingSpaces[parkedAt] = 0;  // 주차 공간 비우기
    message.textContent = `출차성공! 위치 ${parkedAt + 1}에서 출차되었습니다. 주차료는 ${parkingFee}원입니다.`;
    updateParkingLot();  // 주차장 상태 업데이트
} // func end

// 주차장 상태관련
function updateParkingLot() { // f start
    const parkingLot = document.getElementById('parkingLot');
    parkingLot.innerHTML = '';  // 기존의 주차 공간 초기화

    parkingSpaces.forEach((space, index) => {
        const spaceElement = document.createElement('div');
        spaceElement.classList.add('parking-space');
        if (space === 1) {
            spaceElement.classList.add('occupied');
        } else {
            spaceElement.classList.add('available');
        }
        spaceElement.textContent = index + 1;  // 1-based index
        parkingLot.appendChild(spaceElement);
    });
} // f end

// 초기화 화면필요
window.onload=function(){
    //실행할 내용
  }


