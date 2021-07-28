<?
   session_start();

   @extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

   include "../lib/dbconn.php";

   $sql = "select * from $table where num = $num";
   $result = mysql_query($sql, $connect);

   $row = mysql_fetch_array($result);

   $copied_name[0] = $row[file_copied_0];  // 2021_07_22_11_00_35_0.jpg
   $copied_name[1] = $row[file_copied_1];  // 2021_07_22_11_00_35_1.jpg
   $copied_name[2] = $row[file_copied_2];  //  ''

   for ($i=0; $i<3; $i++)
   {
		if ($copied_name[$i])
	   {
			$image_name = "./data/".$copied_name[$i];  //  './data/2021_07_22_11_00_35_0.jpg'
			unlink($image_name);  // 해당 경로에 파일 삭제
	   }
   }

   $sql = "delete from $table where num = $num";
   mysql_query($sql, $connect);
   mysql_close();
   echo "
	   <script>
	    location.href = 'list.php?table=$table';
	   </script>
	";
?>

