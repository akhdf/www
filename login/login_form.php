<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
	<link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="css/login.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
   
</head>
<body>    
<div class="login">
	<div class="form-container">
    <div id="id_pw_input" class="id_pw_input"> 
    <form name="member_form" method="post" action="login.php"> 
    <h1 class="logo"><a href="../index.html">유한양행</a></h1>
    <label class="hidden" for="id">Username</label>
 <input type="text" name="id" class="login_input" id="id" placeholder="아이디를 입력하세요" required>
 <label class="hidden"  for="pass">Password</label>
<input type="password" name="pass" class="login_input" id="pass" placeholder="비밀번호를 입력하세요" required>
<ul class="_find">
        <li><a href="id_find.php">Forget your ID?</a></li>
		<li><a href="pw_find.php">Forget your Password?</a></li>
   </ul>
<button type="submit">Sign In</button>
		</form>

	</div>
    </div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel">
				<p class="main">Great Yuhan, Global Yuhan.</p>
				<p>A promise to strive for the health of the people. Trust and honesty are the way Yuhan treats customers.</p>
        <div id="join_button"><a href="../member/member_check.html">Sign up</a></div>
</div>
		</div>
	</div>
</div>
</body>
</html>