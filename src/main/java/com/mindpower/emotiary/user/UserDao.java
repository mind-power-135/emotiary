package com.mindpower.emotiary.user;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mindpower.emotiary.common.CommonDao;

@Repository
public class UserDao extends CommonDao {
	
	// 회원 목록
	public List<Map<String, Object>> selectUsersList(Map<String, Object> paramMap) throws SQLException {
		return sqlSession.selectList(UserDao.class.getName() + ".selectUsersList", paramMap);
	}
	
	// 회원가입
	public Map<String, Object> insertUser(Map<String, Object> paramMap) throws SQLException {
		return sqlSession.selectOne(UserDao.class.getName() + ".insertUser", paramMap);
	}
	
	// 아이디 중복체크
	public int idCheck(String account) throws SQLException {
		return sqlSession.selectOne(UserDao.class.getName() + ".idCheck", account);
	}
	
	// 로그인
	public Map<String, Object> loginCheck(Map<String, Object> paramMap) throws SQLException {
		return sqlSession.selectOne(UserDao.class.getName() + ".loginCheck", paramMap);
	}

}
