package com.mindpower.emotiary.user;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

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
	
	
	// 카카오 회원가입
	
	// 이메일 회원가입
	
	// 로그인 페이지
	//@GetMapping("/login")
	@RequestMapping(value = "/login", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView login() throws Exception {
		return new ModelAndView("/login");
	}
	
	
	// 일반 로그인
	// @ResponseBody // 필요한가?
	@PostMapping("/loginCheck")
	public ModelAndView login(@RequestBody Map<String, Object> paramMap, HttpServletRequest request) throws Exception {
	 
		String pw = (String)paramMap.get("pw");
		paramMap.put("salt", pw);
		
		/*
		Map<String, Object> userMap = userService.loginCheck(paramMap);
		HttpSession session = request.getSession();
		if (userMap != null) {
			session.setAttribute("userMap",userMap);
			return "/main"; // 페이지 이동이 왜 안 되지? setViewName 도 안 먹고 이것도 안 먹네. 여기선 post인데 이동하는 page들은 get이라 그런가? 일반회원가입 post에서 return "/main" 안 먹히는데 get에서 /main하면 먹힘. getMapping("/login")을 또 하면 500에러 나는데... 다 post로 바꿔도 똑같을 텐데.. 화면 보여지는 부분은 get, 데이터 전달되는 부분은 post로 해서 post가 get으로 가게 어떻게 해야 하지?
		} else {
			session.setAttribute("userMap",null);
			return "/register";
		}
		*/
		
		ModelAndView mv = new ModelAndView();
		Map<String, Object> userMap = userService.loginCheck(paramMap);
		mv.addObject("userMap",userMap);
		
		// 로그인 성공
		if (userMap != null) {
			//mv.setView(new RedirectView("/emotiary/main"));
			//mv.setViewName("main");
			mv.setViewName("/main");
			//mv.setViewName("redirect:/main");
		} else { // 로그인 실패
			mv.addObject("message", "로그인 실패");
			mv.setViewName("/register");
			//mv.setViewName("register");
			//mv.setView(new RedirectView("/register"));
			//mv.setViewName("redirect:/register");
		}
	 	return mv;
	 	
	}
	
	// 카카오 로그인
	
	// 이메일 로그인
	
	// 로그아웃

}
