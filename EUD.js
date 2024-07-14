if((document.querySelector('.removePromotionVersion').innerText < 2)&&(localStorage["newAlertTime"] <= new Date().getTime())) {
  if(confirm('새 버전의 업데이트가 있습니다 설치할까요?\n취소를 하시면 1일 뒤에 다시 안내됩니다')) {
    alert('설치는 알아서 하세요ㅋ')
  }else{
    localStorage["newAlertTime"] = new Date().getTime() + 86400000
  }
}
