package com.mindpower.emotiary.main;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * MainService.java
 * Class 설명을 작성하세요.
 *
 * @author 이유나
 * @since 2023.03.18
 */
@RequiredArgsConstructor
@Service
public class MainService {
    private final MainDao mainDao;

    public List<Map<String, Object>> selectEmotionsList() {
        return mainDao.selectEmotionsList();
    }
}
