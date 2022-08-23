package com.mindpower.emotiary.user;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserService {

	@Autowired
	private UserDao userDao;
	
	// 회원가입
	public String addUser(Map<String, Object> vo) throws Exception {
		return userDao.insertUser(vo);
	}
	
}
