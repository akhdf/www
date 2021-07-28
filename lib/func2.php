<?
   //"greet", 5, 20

   function latest_article($table, $loop, $char_limit, $cnt)    //테이블명, 게시물 개수, 문자개수
   {
		include "dbconn.php";    //디비열결

		$sql = "select * from $table order by num desc limit $loop";  
                                        // $table 테이블에서 num필드를 기준으로 $loop 개수 만큼만  내림차순 정렬 
		$result = mysql_query($sql, $connect); // 검색 쿼리 적용

		while ($row = mysql_fetch_array($result))   //읽어드린 레코드 만큼..
		{
			$num = $row[num];    // 번호를 저장 각각의 글 클릭시 해당 글번호에 view 로 이동....
			$len_subject = strlen($row[subject]);  // 제목의 길이를 구한다.
			$subject = $row[subject];    // 제목을 저장한다    50자......

			if ($len_subject > $char_limit)   //제목의 길이가 지정한 길이보다 크면
			{
				$subject = mb_substr($row[subject], 0, $char_limit, 'utf-8');   // 첫번째 문자부터 $char_limit만큼 잘라낸다.
                                                  //mb_substr 은 입력받은 문자열을 정해진 길이만큼 잘라서 리턴하는데 
                                                  //2byte 문자인 한글에 대해서도 처리가 가능한 함수입니다. 

				$subject = $subject."...";   // 잘라낸 문자열에 ...을 추가한다.
			}

			$regist_day = substr($row[regist_day], 0, 10);  // 2015-04-29 날짜만 잘라내서 저장한다.
            
			if($cnt==2){
			   $file_copied = $row[file_copied_0];  //2021_07_23_09_37_02_0.jpg 
			   if($file_copied){  //첨부된 첫번째 이미지가 있으면
			      $file_copied = './'.$table.'/data/'.$file_copied; // './concert/data/2021_07_23_09_37_02_0.jpg' 
			   }else{  // 첨부된 이미지가 없으면
				  $file_copied = './'.$table.'/data/default.jpg';
			   }	
			}

			if($cnt==1){
					echo "      
						<li>
							<a href='./$table/view.php?table=$table&num=$num'>
								$subject <span>$regist_day</span>
							</a>
						</li>
					";
			}else if($cnt==2){
					echo "      
						<li>
							<a href='./$table/view.php?table=$table&num=$num'>
							   <img src='$file_copied' alt=''>	
							   $subject <span>$regist_day</span>
							</a>
						</li>
					";
			}
		}
		mysql_close();  
   }
?>