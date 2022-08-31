package com.mindpower.emotiary.user;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.fasterxml.jackson.databind.JsonNode;
import com.mindpower.emotiary.common.HttpConnection;
import com.mindpower.emotiary.common.KakaoLoginOutput;
import com.mindpower.emotiary.common.SHA_256;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController // @ResponseBody 안 써도 됨
//@Controller
public class UserController {
	
	@Autowired
	UserService userService;
	
	// 회원가입 페이지
	// @GetMapping("/register")
	@RequestMapping(value = "/register", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView register() throws Exception {
		return new ModelAndView("/register");
	}
	
	// 일반 회원가입
	@PostMapping("/addUser")
	public String addUser(@RequestBody Map<String, Object> paramMap) throws Exception {
		
		SHA_256 sha_256 = new SHA_256();
		String pw = (String)paramMap.get("pw");
		String salt = sha_256.encrypt((String)paramMap.get("pw"));
		paramMap.put("salt", pw+salt);
		
		userService.addUser(paramMap);
		
		return "Join Success!";
       
	}
	
	// 아이디 중복체크
	@PostMapping("/idCheck")
	public int idCheck(@RequestBody String account) throws Exception {
		int num = userService.idCheck(account);
		if(num == 1) {
			return num;
		} else {
			return num;
		}
	}
	
	// 로그인 페이지
	HttpConnection conn = HttpConnection.getInstance();
	@RequestMapping(value = "/login", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView login() throws Exception {
		
		return new ModelAndView("/login");
	}
	
	
	// 일반(=이메일) 로그인
	@PostMapping("/loginCheck")
	public String login(@RequestBody Map<String, Object> paramMap, HttpServletRequest request) throws Exception {
	 
		String pw = (String)paramMap.get("pw");
		paramMap.put("salt", pw);
		
		Map<String, Object> userMap = userService.loginCheck(paramMap);
		HttpSession session = request.getSession();
		if (userMap != null) {
			session.setAttribute("userMap",userMap);
			return "Login Success!";
		} else {
			session.setAttribute("userMap",null);
			return "Login Failure";
		}
		
	}
	
	// 카카오 로그인
	@GetMapping("/kakaoLogin")
	public String kakao() {
		StringBuffer loginUrl = new StringBuffer();
		loginUrl.append("https://kauth.kakao.com/oauth/authorize?client_id=");
		loginUrl.append("1aecad2ec9281b4fa38d54505765097b"); //카카오 앱에 있는 REST KEY
		loginUrl.append("&redirect_uri=");
		loginUrl.append("http://localhost:8080/emotiary/kakaoLoginSuccess"); //카카오 앱에 등록한 redirect URL
		loginUrl.append("&response_type=code");
		
		return "redirect:"+loginUrl.toString();
	}
	
	// 카카오 로그인 성공
	@GetMapping("/kakaoLoginSuccess")
	public ModelAndView redirect(@RequestParam(value="code", required=false) String code, HttpSession session) throws IOException {
			
			Map<String, String> map = new HashMap<String, String>();
			map.put("grant_type", "=authorization_code");
			map.put("client_id", "=1aecad2ec9281b4fa38d54505765097b"); //카카오 앱에 있는 REST KEY
			map.put("redirect_uri", "=http://localhost:8080/emotiary/kakaoLoginSuccess"); //카카오 앱에 등록한 redirect URL
			map.put("code", "="+code);
			
			String out = conn.HttpPostConnection("https://kauth.kakao.com/oauth/token", map).toString();
			
			ObjectMapper mapper = new ObjectMapper();
			KakaoLoginOutput output = mapper.readValue(out, KakaoLoginOutput.class);
			
			System.out.println(output);
			session.setAttribute("access_token", output.getAccess_token());
			
			return new ModelAndView("/login");
		}
	
	// 카카오 로그아웃 // /kakaoLogout
	@RequestMapping(value="/kakaoLogout")
	public String access(HttpSession session) throws IOException {
		
		String access_token = (String)session.getAttribute("access_token");
		Map<String, String> map = new HashMap<String, String>();
		map.put("Authorization", "Bearer "+ access_token);
		
		String result = conn.HttpPostConnection("https://kapi.kakao.com/v1/user/logout", map).toString();
		System.out.println(result);
		
		return "Kakao Logout Success!";
	}
	
	// 이메일 로그인
	
	// 로그아웃
	@PostMapping("/logout")
	public String logout(HttpSession session) throws Exception {
		session.invalidate();
		return "Logout Success!";
	}

}
