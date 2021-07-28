<? 
	session_start();    
      @extract($_POST);
      @extract($_GET);
      @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>회원가입</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="css/member_form.css">
    <script src="https://kit.fontawesome.com/2d56222f57.js" crossorigin="anonymous"></script>	
	<script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
	<script>
	 $(document).ready(function() { 

//nick 중복검사		 
$("#nick").keyup(function(){// id입력 상자에 id값 입력시
    var nick = $('#nick').val();
    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        { $("#loadtext2").html(data);}
    }); });	});
	</script>
	<script>
   function check_input()
   {  if(!document.member_form.pass.value)
      {alert("비밀번호를 입력하세요");    
       document.member_form.pass.focus();
       return;}
      if(!document.member_form.pass_confirm.value)
      {alert("비밀번호확인을 입력하세요");    
       document.member_form.pass_confirm.focus();
       return;}
      if(!document.member_form.name.value)
      {alert("이름을 입력하세요");    
       document.member_form.name.focus();
       return;}
      if(!document.member_form.nick.value)
      {alert("닉네임을 입력하세요");    
       document.member_form.nick.focus();
       return;}
      if(!document.member_form.hp2.value || !document.member_form.hp3.value )
      {alert("휴대폰 번호를 입력하세요");    
       document.member_form.nick.focus();
       return;}
      if(document.member_form.pass.value != 
         document.member_form.pass_confirm.value)
      {alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;}
      document.member_form.submit();// insert.php 로 변수 전송
   }
   function reset_form()
   {  document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  document.member_form.pass.focus();
      return;}
</script>
<?
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);

    $hp = explode("-", $row[hp]);
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
</head>
<body>
	<article id="content">
         <div class='inner'>
	 <form  name="member_form" method="post" action="modify.php">    
     <h1 class="logo"><a href="../index.html">유한양행</a></h1>
      <h2 class="hidden">회원가입</h2>
      <p><span>*</span>모든 항목은 필수 입력 사항입니다.</p>
      <table>
      <caption class="hidden">회원수정</caption>
     	<tr>
     		<th scope="col"><label for="id">아이디</label></th>
     		<td>
                           <?=$row[id]?>
     		</td>
             
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass">비밀번호</label><span>*</span></th>
     		<td><input type="password" name="pass" id="pass" placeholder="비밀번호를 입력하세요" required></td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass_confirm">비밀번호확인</label><span>*</span></th>
     		<td><input type="password" name="pass_confirm" id="pass_confirm" placeholder="비밀번호를 확인하세요" required></td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="name">이름</label><span>*</span></th>
     		<td><input type="text" name="name" id="name" value="<?= $row[name] ?>" required></td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="nick">닉네임</label><span>*</span></th>
     		<td>
                 <input type="text" name="nick" id="nick" value="<?= $row[nick] ?>" required>
			     <div id="loadtext2"></div>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col">휴대폰<span>*</span></th>
     		<td>
     		<label class="hidden" for="hp1">전화번호앞3자리</label>
     		<select class="hp" name="hp1" id="hp1" value="<?= $hp1 ?>"> 
              <option value='010'>010</option>
              <option value='011'>011</option>
          </select> -
          <label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" value="<?= $hp2 ?>" required> - <label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" value="<?= $hp3 ?>" required>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col">이메일<span>*</span></th>
     		<td>
     		  <label class="hidden" for="email1">이메일아이디</label>
     			<input type="text" id="email1" name="email1" value="<?= $email1 ?>" required> @ 
     			<label class="hidden" for="email2">이메일주소</label>
     			<input type="text" name="email2" id="email2" value="<?= $email2 ?>" required>
     		</td>
     	</tr>
     	<!-- <tr>
     		<td colspan="2">
     			<a href="#"><img src="images/button_save.gif"  onclick="check_input()"></a>&nbsp;&nbsp;
				 <a href="#"><img src="images/button_reset.gif" onclick="reset_form()"></a>
     		</td>
     	</tr> -->
     </table>
     <div class="button">
                <button type="button" onclick="check_input()" class="ok">가입하기</button>
                <button type="button" onclick="reset_form()" class="cancel">취소하기</button>
            </div>
	 </form>	  
     </div> 
	</article>
</body>
</html>


