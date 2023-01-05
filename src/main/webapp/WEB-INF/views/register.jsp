<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<title>회원가입</title>
<script type="text/javascript">

$(document).ready(function(){
	
	clean();
	
});

function join(){
	
	var email = $("#email").val();
	var firstPw = $("#firstPw").val();
	var pw = $("#pw").val();
	var userName = $("#name").val();
	var certificationNumber = $(".mail-check-input").val();
	
	if(email==""){
		alert("Email 주소를 입력해주세요.");
	} if(firstPw==""){
		alert("패스워드를 입력해주세요.");
	} if(pw==""){
		alert("패스워드 확인을 입력해주세요.");
	} if(userName==""){
		alert("이름을 입력해주세요.");
	} if(certificationNumber==""){
		alert("인증번호를 입력해주세요.")
	}
	
	const user ={
		email: $("#email").val(),
		pw: $("#pw").val(),
		userName: $("#name").val()
	}
	
	console.log(JSON.stringify(user));
	
	if(firstPw!=""&pw!=""){
		if(firstPw==pw && email!="" && userName!="" && certificationNumber!="") {
			
			if(firstPw.length < 8 || firstPw.length > 15){
			  alert("비밀번호는 8자리 이상 15자리 이내로 입력해주세요.");
			  return false;
			} else if(firstPw.search(/\s/) != -1){
			  alert("비밀번호는 공백 없이 입력해주세요.");
			  return false;
			}
			
			else {
				$.ajax({
					  type: "POST",
					  url: "/emotiary/addUser",
					  //dataType:'json',  // @ResponseBody 붙여야 함
					  dataType: 'text',
					  data : JSON.stringify(user),
					  contentType : "application/json; charset=UTF-8",
					  success : function(data) {
						  alert(data); // Controller의 return
						},
					  error :function(request,status,error){
						  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
				});
			}
		} else if(firstPw!=pw) {
			alert("비밀번호와 비밀번호 재확인이 같지 않습니다. 다시 입력해주세요.")
			$("#firstPw").empty();
			$("#pw").empty();
		}
	}
	
}

function idCheck(){
	
	//console.log(JSON.stringify({"id":$('#id').val()}));
	
	var email = $("#email").val();
	
	$.ajax({
	  type: "POST",
	  url: "/emotiary/idCheck",
	  dataType: 'text',
	  data : email,
	  contentType : "text/plain; charset=UTF-8",
	  success : function(data){
			if(data == 1){
				alert("이미 존재하는 이메일입니다. 다른 아이디를 입력해주세요.");
			}else if(data == 0){
				$("#idChk").attr("value", "Y");
				alert("사용 가능한 이메일입니다.");
			}
		},
	  error :function(request,status,error){
		  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});
	
}

function emailVerify(){
	const eamil = $('#email').val(); // 이메일 주소값 얻어오기
	console.log('완성된 이메일 : ' + eamil); // 이메일 오는지 확인
	const checkInput = $('.mail-check-input') // 인증번호 입력하는곳 
	
	$.ajax({
		type : 'get',
		url : "/emotiary/emailVerify?email="+eamil, // GET방식
		success : function (data) {
			console.log("data : " +  data);
			checkInput.attr('disabled',false);
			code =data;
			alert('인증번호가 전송되었습니다.')
		}			
	}); // end ajax
	
	// 인증번호 비교 
	// blur -> focus가 벗어나는 경우 발생
	$('.mail-check-input').blur(function () {
		const inputCode = $(this).val();
		const $resultMsg = $('#mail-check-warn');
		
		if(inputCode === code){
			$resultMsg.html('인증번호가 일치합니다.');
			$resultMsg.css('color','green');
			$('#mail-Check-Btn').attr('disabled',true);
			$('#email').attr('readonly',true);
			$('#submit').attr('disabled',false);
		}else{
			$resultMsg.html('인증번호가 불일치 합니다. 다시 확인해주세요.');
			$resultMsg.css('color','red');
			$('#submit').attr('disabled',true);
		}
	});
}

function clean(){
	$("#firstPw").empty();
	$("#pw").empty();
	$("#name").empty();
	$("#email").empty();
}

// 학교 검색
function schoolSearch(){
	
	const searchSchoolInfo = {
			gubun: $("#schoolGubun").val(),
			name: $("#schoolName").val(),
			region: $("#schoolRegion").val(),
			page: 1,
			pageSize: 15
		}
	
	// console.log(searchSchoolInfo);
	
    $.ajax({
    	dataType: 'json',
   		// contentType : "text/plain; charset=UTF-8", // 이렇게 하면 415 에러
   		contentType : "application/json; charset=UTF-8",
		url: "./school/list.json",     
		type: "post",    
		data : JSON.stringify(searchSchoolInfo),
		success: function (data) {
			$("#school-grid").empty();
			$("#school-grid-total-count").empty();
			$("#school-grid-total-count").append("총 "+data.totalCount+"개의 학교를 찾았어요!");			
			
			$.each(data.items, function(index, item) {
				// console.log(item);
				$("#school-grid").append(
					"<label>" +
					"<input type='radio' name='schoolRadio' value='"+item.name+'/'+item.region+'/'+item.address+"'/>" +
					item.name + "(" + item.address + ")" +
					"</label>" +
					"<br/>"
				);
			});
			
		},
 		error :function(request,status,error){
 			  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
   	});
}

// 학교 등록
function schooleSubmit(){
	
	const schoolRadioValue = $('input[name=schoolRadio]:checked').val();
	const arr = schoolRadioValue.split("/");
	var schoolName = arr[0];
	var region = arr[1];
	var address = arr[2];
	var schoolType = "";
	
	//console.log(schoolName);
	
	if (schoolRadioValue.includes("초등학교")==true) {
		schoolType = "elementary";
	} else if (schoolRadioValue.includes("중학교")==true) {
		schoolType = "middle";
	} else if (schoolRadioValue.includes("고등학교")==true) {
		schoolType = "high";
	} else {
		schoolType = null;
	}
	
	const registerSchoolInfo = {
			
		schoolName: schoolName,
		region: region,
		address: address,
		schoolType: schoolType
	}
	console.log(registerSchoolInfo);
	
	$.ajax({
		type : 'post',
		url : "/emotiary/addSchool",
		data : JSON.stringify(registerSchoolInfo),
		dataType: 'text',
   		contentType : "application/json; charset=UTF-8",
		success : function (data) {
			// console.log("data : " +  data);
			$("#school").val(schoolName);
			alert('학교 정보 등록 완료!')
		},
		error :function(request,status,error){
			  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
      	}
	});
}

</script>
<style>
.modal .window {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.modalBox {
  position: absolute;
  background-color: #fff;
  width: 400px;
  height: 200px;
  padding: 15px;
}

.modalBox button {
  display: block;
  width: 80px;
  margin: 0 auto;
}

.hidden {
  display: none;
}
</style>
</head>
<body>
<div class="container">
	<div class="form-group">
      <label for="id">ID(Email)</label>
      <input type="text" id="email" name="email" placeholder="ID로 사용할 이메일 주소" autocomplete="no"/>
      <input type="button" id="idChk" value="이메일 중복확인" onclick="javascript:idCheck()"/>
      <input type="button" id="emailVerify" value="이메일 인증" onclick="javascript:emailVerify()"/>
      <br/>
      <input class="mail-check-input" placeholder="인증번호 6자리를 입력하고 엔터를 눌러주세요." disabled="disabled" maxlength="6" style="width:280px;"/>
	  <span id="mail-check-warn"></span>
	  <br/>
      <label for="firstPw">PW</label>
      <input type="password" id="firstPw" name="firstPw" placeholder="암호를 입력하세요" maxlength="15" autocomplete="new-password"/>
      <br/>
      <label for="pw">PW재확인</label>
      <input type="password" id="pw" name="pw" placeholder="암호를 다시 입력하세요" autocomplete="new-password"/>
      <br/>
      <label for="name">이름</label>
      <input type="text" id="name" name="name" placeholder="이름을 입력하세요"/>
      <br/>
      <label for="school">학교명</label>
      <input type="text" id="school" name="school" placeholder="학교를 검색하세요"/>
      <br/>
	</div>
	<input type="button" id="submit" value="등록" onclick="javascript:join()"/>
	
	<br/>
	<br/>
	<br/>
	<button class="openBtn">학교찾기 모달창 open</button>
	
	<!-- 학교검색 커리어넷 Open API 모달 -->
	<div class="modal hidden">
		<div class="window">
			<div class="modalBox">
				<div class="form-horizontal" id="search-block">
					<div class="margin-bottom-5">
				    <select class="form-control form-group-margin" id="schoolGubun" placeholder="구분">
				        <option value="elem_list">초등학교</option>
				        <option value="midd_list">중학교</option>
				        <option value="high_list">고등학교</option>
				       </select>  
				    </div>
				    <div class="margin-bottom-5">
						<select class="form-control form-group-margin" id="schoolRegion" placeholder="지역">
					        <option value="">전체</option>
					        <option value="100260">서울특별시</option>
					        <option value="100267">부산광역시</option>
					        <option value="100269">인천광역시</option>
					        <option value="100271">대전광역시</option>
					        <option value="100272">대구광역시</option>
					        <option value="100273">울산광역시</option>
					        <option value="100275">광주광역시</option>
					        <option value="100276">경기도</option>
					        <option value="100278">강원도</option>
					        <option value="100280">충청북도</option>
					        <option value="100281">충청남도</option>
					        <option value="100282">전라북도</option>
					        <option value="100283">전라남도</option>
					        <option value="100285">경상북도</option>
					        <option value="100291">경상남도</option>
					        <option value="100292">제주도</option>
					       </select>              
					</div>
					<div class="margin-bottom-5">
						<input class="form-control" id="schoolName" placeholder="학교이름" type="text">
				    </div>
					<div class="margin-bottom-5">
					<input type="button" id="schoolSearch" value="학교 검색" onclick="javascript:schoolSearch()"/>
					<input type="button" id="schoolSubmit" value="학교 등록" onclick="javascript:schooleSubmit()"/>
					</div>
				</div>
				<div id="school-grid-total-count"></div>
				<div id="school-grid" style="width:2000px;"></div>
				<button class="closeBtn">닫기</button>
			</div>
		</div>
	</div>
</div> <!-- /container -->
</body>
<script>
  const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
  }

  const close = () => {
    document.querySelector(".modal").classList.add("hidden");
  }

  document.querySelector(".openBtn").addEventListener("click", open);
  document.querySelector(".closeBtn").addEventListener("click", close);

</script>
</html>