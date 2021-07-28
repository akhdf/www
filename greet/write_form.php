<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>유한양행;공지사항</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub6common.css">
    <link rel="stylesheet" href="./css/write_form.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"  integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>
    <script>
    function del(href) 
    {if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href; //'delete.php?num=1'
        }
    }
</script>
    <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
</head>
<body>
    <div class="wrap">
        <!-- 서브헤더영역 -->
        <? include "../common/sub_head.html" ?>
        <div class="visual"><img src="./common/images/visual_sub6.jpg" alt=""></div>
        <div class="sub_menu">
            <h3>고객센터</h3>
            <p>Trust and honesty are the way Yoo Hantreats customers.</p>
            <ul class="sub_nav">
                <li class="current"><a href="./list.php">공지사항</a></li>
                <li class=""><a href="../sub6/sub6_2.html">자주묻는질문</a></li>
                <li class=""><a href="../sub6/sub6_3.html">온라인상담</a></li>
                <li class=""><a href="../sub6/sub6_4.html">채용FAQ</a></li>
            </ul>
        </div>
        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    HOME &gt; 고객센터 &gt; <strong>공지사항</strong>
                </div>
                <h2>공지사항</h2>
                <p>'신뢰'와 '정직'은 유한이 고객을 대하는 마음입니다.</p>
            </div>
            <div class="content_area">
            <form  name="board_form" method="post" action="insert.php"> 
		<div id="write_form">
			<div class="write_line"></div>
			<div id="write_row1">
				<div class="col1"> 닉네임 </div>
				<div class="col2"><?=$usernick?></div>
				<div class="col3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</div>
			</div>
			<div class="write_line"></div>
			<div id="write_row2"><div class="col1"> 제목   </div>
			                     <div class="col2"><input type="text" name="subject"></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row3"><div class="col1"> 내용   </div>
			                     <div class="col2"><textarea rows="15" cols="79" name="content"></textarea></div>
			</div>
			<div class="write_line"></div>
		</div>
        <div id="write_button">
			<input type="submit" value="확인">&nbsp;
			<a href="list.php?page=<?=$page?>">목록</a>
		</div>
		</form>
            </div>
        </article>
        <!-- 서브푸터영역 -->
        <? include "../common/sub_foot.html" ?>
    </div>
    <!--JQuery-->
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../common/js/fullnav.js"></script>
</body>

</html>