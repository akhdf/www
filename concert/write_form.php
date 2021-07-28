<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	include "../lib/dbconn.php";
	if ($mode=="modify")  //수정 글쓰기면....
	{$sql = "select * from $table where num=$num";
    $result = mysql_query($sql, $connect);
	$row = mysql_fetch_array($result);       
	$item_subject     = $row[subject];
	$item_content     = $row[content];
	$item_file_0 = $row[file_name_0];
	$item_file_1 = $row[file_name_1];
	$item_file_2 = $row[file_name_2];
	$copied_file_0 = $row[file_copied_0];
	$copied_file_1 = $row[file_copied_1];
	$copied_file_2 = $row[file_copied_2];}
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>유한양행;제품소식</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub2common.css">
    <link rel="stylesheet" href="./css/write_form.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>
	    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
	<script>
    function check_input()
   {
      if (!document.board_form.subject.value)
      {
          alert("제목을 입력하세요!");    
          document.board_form.subject.focus();
          return;
      }

      if (!document.board_form.content.value)
      {
          alert("내용을 입력하세요!");    
          document.board_form.content.focus();
          return;
      }
      document.board_form.submit();
   }
    </script>
</head>
<body>
    <div class="wrap">
        <!-- 서브헤더영역 -->
        <? include "../common/sub_head.html" ?>
        <div class="visual"><img src="./common/images/visual_sub2.jpg" alt=""></div>
        <div class="sub_menu">
            <h3>제품소개</h3>
            <p>Let me introduce you to various products of Yuhan.</p>
            <ul class="sub_nav">
			<li class=""><a href="../sub2/sub2_1.html">제품정보</a></li>
                <li class="current"><a href="./list.php">제품소식</a></li>
                <li class=""><a href="../sub2/sub2_3.html">브랜드</a></li>
            </ul>
        </div>
        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    HOME &gt; 제품소개 &gt; <strong>제품소식</strong>
                </div>
                <h2>제품소식</h2>
                <p>(주)유한양행의 다양한 제품소식을 전달해 드립니다.</p>
            </div>
            <div class="content_area">
<?
	if($mode=="modify"){
?>
		<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data"> 
<?
	}else{
?>
		<form  name="board_form" method="post" action="insert.php?table=<?=$table?>" enctype="multipart/form-data"> 
<?
	}
?>
		<div id="write_form">
			<div class="write_line"></div>
			<div id="write_row1"><div class="col1"> 별명 </div><div class="col2"><?=$usernick?></div>
<?
	if( $userid && ($mode != "modify")){
?>
				<div class="col3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</div>
<?
	}
?>						
			</div>
			<div class="write_line"></div>
			<div id="write_row2"><div class="col1"> 제목   </div>
			                     <div class="col2"><input type="text" name="subject" value="<?=$item_subject?>" ></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row3"><div class="col1"> 내용   </div>
			                     <div class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row4"><div class="col1"> 이미지파일1   </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
			<div class="clear"></div>
<? 	if ($mode=="modify" && $item_file_0){
?>
			<div class="delete_ok"><?=$item_file_0?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="0"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>
			<div id="write_row5"><div class="col1"> 이미지파일2  </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
<? 	if ($mode=="modify" && $item_file_1){
?>
			<div class="delete_ok"><?=$item_file_1?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="1"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>
			<div class="clear"></div>
			<div id="write_row6"><div class="col1"> 이미지파일3   </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
<? 	if ($mode=="modify" && $item_file_2){
?>
			<div class="delete_ok"><?=$item_file_2?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="2"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
		<div class="write_line"></div>
		<div class="clear"></div>
		</div>
		<div id="write_button"><a href="#" onclick="check_input()">확인</a>&nbsp;
								<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
		</div>
		</form>
            </div>
        </article>
        <!-- 서브푸터영역 -->
        <? include "../common/sub_foot.html" ?>
    </div>
    <!--JQuery-->
    <script src="../common/js/fullnav.js"></script>
</body>
</html>