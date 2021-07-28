<? 
   session_start();   
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   $ripple = "free_ripple";
   /*
      $_SESSION['userid']
      $_SESSION['username']
      $_SESSION['usernick']
      $_SESSION['userlevel']
      $num=1  (나야나~~~~~)
      $page=1
   */
   include "../lib/dbconn.php";
   $sql = "select * from greet where num=$num";
   $result = mysql_query($sql, $connect);
   $row = mysql_fetch_array($result);  // 하나의 레코드 가져오기   
   $item_num     = $row[num];
   $item_id      = $row[id];
   $item_name    = $row[name];
   $item_nick    = $row[nick];
   $item_hit     = $row[hit];
   $item_date    = $row[regist_day];
   $item_subject = str_replace(" ", "&nbsp;", $row[subject]);
   $item_content = $row[content];
   $is_html      = $row[is_html];
   if ($is_html!="y")
   {$item_content = str_replace(" ", "&nbsp;", $item_content);
    $item_content = str_replace("\n", "<br>", $item_content);}   
   $new_hit = $item_hit + 1;
   $sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
   mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>유한양행;제품소식</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub6common.css">
    <link rel="stylesheet" href="./css/view.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>
    <script>
    function del(href) 
    {if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")){document.location.href = href; //'delete.php?num=1'
    }}
    function check_input(){if(!document.ripple_form.ripple_content.value){
         alert("내용을 입력하세요!");    
         document.ripple_form.ripple_content.focus();
         return;}
      document.ripple_form.submit();}
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
            <div class="inner">
            <div id="view_title">
			<div id="view_title1"><?= $item_subject ?></div>
			<div id="view_title2"><i class="far fa-user"></i>&nbsp;&nbsp;<?= $item_nick ?><span><?= $item_date ?>&nbsp;&nbsp;<i class="far fa-eye"></i>&nbsp;&nbsp;<?= $item_hit ?></span></div>
	    	</div>
		<div id="view_content"><?= $item_content ?></div>
        <div id="ripple">
<?
        $sql = "select * from $ripple where parent=$item_num";
        $result2 = mysql_query($sql, $connect); 
        $num_ripple = mysql_num_rows($result2);     
?>
<p><i class="far fa-comment-dots"></i>&nbsp;&nbsp;댓글
<?            
if ($num_ripple) 
 echo " [<span>$num_ripple</span>]";        
?>          
</p>            
<?
       $sql = "select * from free_ripple where parent='$item_num'";
       $ripple_result = mysql_query($sql);
      while ($row_ripple = mysql_fetch_array($ripple_result)){
         $ripple_num     = $row_ripple[num];
         $ripple_id      = $row_ripple[id];
         $ripple_nick    = $row_ripple[nick];
         $ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
         $ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
         $ripple_date    = $row_ripple[regist_day];
?>
         <ul class="ripple_writer_title">
         <li class="writer_title1"><?=$ripple_nick?></li>
         <li class="writer_title2"><?=$ripple_content?></li>
         <li class="writer_title3"><span><?=$ripple_date?></span>
         <span>
<? 
if($userid==$ripple_id || $userid=="master" || $userlevel==1)
echo "<a href='delete_ripple.php?table=$table&num=$item_num&ripple_num=$ripple_num'> 삭제하기</a>";
 ?>
</span>
         </li>
         </ul>
<?
}
?>         
<!-- 리플작성하는 부분 시작 -->
         <form  name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>">  
         <div id="ripple_box">
                       <label for="ripple_content" class="hidden">댓글내용</label>
                       <textarea rows="5" cols="65" id="ripple_content" name="ripple_content" placeholder="댓글을 입력해주세요."></textarea>
                       <a href="#" onclick="check_input()">댓글등록</a>
                    </div>
         </form>
      </div> <!-- end of ripple -->

      <div id="view_button">
		<a href="list.php?page=<?=$page?>">목록보기</a>&nbsp;
<? 
	if($userid==$item_id || $userlevel==1 || $userid=="master"){
?>
				<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
				<a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>&nbsp;
<?
	}
?>

<? 
	if($userid){
?>
				<a href="write_form.php?page=<?=$page?>">글쓰기</a>
<?
	}
?>
</div>
		</div>        
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