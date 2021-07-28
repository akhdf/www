

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    newContent += '<table class="financial_table_01">';
    newContent += '<thead>';
    newContent += '<tr>';
    newContent += '<th scope="col" class="first">항목</th>'; 
    newContent += '<th scope="col">2020년</th>';
    newContent += '<th scope="col">2019년</th>';
    newContent += '<th scope="col">2018년</th>';
    newContent += '</tr>';
    newContent += '</thead>';
    newContent += '<tbody>';

    for (var i = 0; i < responseObject.events.length; i++) { 
      newContent += '<tr>';
      newContent += '<th scope="row" class="first">'+ responseObject.job[i].sabun +'</td>';
      newContent += '<td>'+ responseObject.job[i].sname +'</td>';
      newContent += '<td>'+ responseObject.job[i].pay1 +'</td>';
      newContent += '<td>'+ responseObject.job[i].pay2 +'</td>';
      newContent += '<td>'+ responseObject.job[i].pay3+'</td>';
      newContent += '<td class="tot">'+ (responseObject.job[i].pay1 + responseObject.job[i].pay2 +responseObject.job[i].pay3)+(만원)+'</td>';
      newContent += '</tr>';
      newContent += '</tbody>';
      newContent += '</table>';
    }

   
 
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다
