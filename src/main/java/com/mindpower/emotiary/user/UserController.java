package com.mindpower.emotiary.user;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import com.mindpower.emotiary.common.SHA_256;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class UserController {
	
	@Autowired
	UserService userService;
	
	// ȸ������ ������
	@GetMapping("/register")
	public ModelAndView register() throws Exception {
		return new ModelAndView("/register");
	}
	
	// �Ϲ� ȸ������
	@PostMapping("/register")
	public String addUser(@RequestBody Map<String, Object> paramMap) throws Exception {
		
		SHA_256 sha_256 = new SHA_256();
		String pw = sha_256.encrypt((String)paramMap.get("pw"));
		System.out.print("��ȣȭ�� pw:"+pw);
		paramMap.put("pw", pw);
		
		userService.addUser(paramMap);
		
        return "/register";
	}
	
	// īī�� ȸ������
	
	// �̸��� ȸ������
	
	// �α���
	/*
	 * @PostMapping("/login") public String login(@RequestBody Map<String, String>
	 * paramMap) throws Exception {
	 * 
	 * String id = (String)paramMap.get("id")
	 * 
	 * User member = userRepository.findByEmail(user.get("email")) .orElseThrow(()
	 * -> new IllegalArgumentException("���Ե��� ���� E-MAIL �Դϴ�.")); if
	 * (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
	 * throw new IllegalArgumentException("�߸��� ��й�ȣ�Դϴ�."); } return
	 * jwtTokenProvider.createToken(member.getUsername(), member.getRoles()); }
	 */

}
