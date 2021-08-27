<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>유한양행</title>
    <link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="css/pw_find.css">
<script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script>
	$(document).ready(function() {

         $(".find").click(function() {    // id입력 상자에 id값 입력시
            var id = $('#id').val(); //aaa
            var name = $('#name').val(); //aaa
            var hp1 = $('#hp1').val(); 
            var hp2 = $('#hp2').val(); 
            var hp3 = $('#hp3').val(); 

            $.ajax({
                type: "POST",
                url: "find2.php", /*매개변수인 check_id.php파일을 post방식으로 넘기세요*/
                data: "id="+ id+ "&name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  /*매개변수id도 같이 넘겨줌*/
                cache: false, 
                success: function(data) /*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
                {
                     $("#loadtext").html(data); /*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
                }
            });
             
        $("#loadtext").addClass('loadtexton');     
        }); 

    });
</script>
</head>
<body>
    <div id="wrap">
    <div class="login">
	<div class="form-container">
    <div class="id_pw_input"> 
        <form name="find" method="post" action="find2.php"> 
        <h1 class="logo"><a href="../index.html">유한양행</a></h1>
        <div id="title">
			<h2 class="hidden">비밀번호찾기</h2>
			<p>We will find your Password with the information you entered when you signed up.</p>
		</div>       
		<div id="login_form">
			 <div class="clear"></div>
			 <div id="login2">
				<div id="id_input_button">
					<fieldset>
                    <label class="hidden" for="name">이름</label>
                        <input type="text" name="name" id="name" placeholder="이름을 입력하세요">
                        <label class="hidden" for="id">아이디</label>
                        <input type="text" name="id" id="id" placeholder="ID를 입력하세요">
                        <div class="telBox">
                            <label class="hidden" for="hp1">연락처 앞3자리</label>
                            <select name="hp1" id="hp1" title="휴대폰 앞3자리를 선택하세요.">
                                <option>010</option>
                                <option>011</option>
                            </select> - 
                            <label class="hidden" for="hp2">연락처 가운데4자리</label>
                            <input type="text" id="hp2" name="hp2" title="연락처 가운데4자리를 입력하세요." maxlength="4" required> - 
                            <label class="hidden" for="hp3">연락처 마지막4자리</label>
                            <input type="text" id="hp3" name="hp3" title="연락처 마지막4자리를 입력하세요." maxlength="4" required>
                        </div>                     
                    </fieldset>
                    <p class="_find"><a href="id_find.php">Forget your ID?</a></p>
                    <div class="login_button"><input type="button" value="Find Password" class="find"></div>
                    <span id="loadtext"></span>
				</div>
			 </div>			 
             </div> <!-- end of form_login -->
	    </form>
        </div>
        </div>

        <div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel">
				<p class="main">Great Yuhan, Global Yuhan.</p>
				<p>A promise to strive for the health of the people. Trust and honesty are the way Yuhan treats customers.</p>          
                <div class="login_button"><a href="login_form.php">Sign In</a></div>
                <div id="join_button"><a href="../member/member_check.html">Can't access your account?</a></div>

	</div>
	</div> <!-- end of col2 -->
    </div>



</div> 
</div> <!-- end of wrap -->
</body>
</html>