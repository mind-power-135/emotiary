package com.mindpower.emotiary.main;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * MainController.java
 * 메인 화면을 위한 controller
 *
 * @author 이유나
 * @since 2023.03.18
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/main")
public class MainController {
    private final MainService mainService;

    @PostMapping("/emotions")
    public List<Map<String, Object>> emotionsList(){
        return mainService.selectEmotionsList();
    }
}