package com.mindpower.emotiary.mapper;

import com.mindpower.emotiary.common.CommonDao;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Repository
public class UserDao extends CommonDao {
	
	// 회원 목록
	public List<Map<String, Object>> selectUsersList(Map<String, Object> paramMap) throws SQLException {
		return sqlSession.selectList("selectUsersList", paramMap);
	}
	
	// 회원가입
	public Map<String, Object> insertUser(Map<String, Object> paramMap) throws SQLException {
		return sqlSession.selectOne("insertUser", paramMap);
	}
	
	// 아이디 중복체크
	public int idCheck(String account) throws SQLException {
		return sqlSession.selectOne("idCheck", account);
	}
	
	// 이름 존재여부 체크
	public int nameCheck(String account) throws SQLException {
		return sqlSession.selectOne("nameCheck", account);
	}
	
	// 로그인
	public Map<String, Object> loginCheck(Map<String, Object> paramMap) throws SQLException {
		return sqlSession.selectOne("loginCheck", paramMap);
	}
	
	// 비밀번호 찾기
	public Map<String, Object> updatePassword(Map<String, Object> paramMap) throws SQLException {
		return sqlSession.selectOne("updatePassword", paramMap);
	}
	
	// 학교 정보
	public Map<String, Object> insertSchool(Map<String, Object> paramMap) throws SQLException {
		return sqlSession.selectOne("insertSchool", paramMap);
	}

}
