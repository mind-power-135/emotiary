package com.mindpower.emotiary.main;

import com.mindpower.emotiary.common.CommonDao;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * MainDao.java
 * Class 설명을 작성하세요.
 *
 * @author 이유나
 * @since 2023.03.18
 */
@Repository
public class MainDao extends CommonDao {
    public List<Map<String, Object>> selectEmotionsList(){
        return sqlSession.selectList("selectEmotionsList");
    }
}
