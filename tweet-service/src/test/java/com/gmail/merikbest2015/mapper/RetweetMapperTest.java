package com.gmail.merikbest2015.mapper;

import com.gmail.merikbest2015.TweetServiceTestHelper;
import com.gmail.merikbest2015.dto.HeaderResponse;
import com.gmail.merikbest2015.dto.response.TweetUserResponse;
import com.gmail.merikbest2015.dto.response.notification.NotificationResponse;
import com.gmail.merikbest2015.dto.response.user.UserResponse;
import com.gmail.merikbest2015.repository.projection.TweetUserProjection;
import com.gmail.merikbest2015.service.RetweetService;
import com.gmail.merikbest2015.util.TestConstants;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@RunWith(SpringRunner.class)
public class RetweetMapperTest {

    @Autowired
    private RetweetMapper retweetMapper;

    @MockBean
    private BasicMapper basicMapper;

    @MockBean
    private RetweetService retweetService;

    private final static PageRequest pageable = PageRequest.of(0, 20);

    @Test
    public void getUserRetweetsAndReplies() {
        List<TweetUserProjection> tweetUserProjections = TweetServiceTestHelper.createMockTweetUserProjectionList();
        Page<TweetUserProjection> pageableTweetUserProjections = new PageImpl<>(tweetUserProjections, pageable, 20);
        HeaderResponse<TweetUserResponse> headerResponse = new HeaderResponse<>(
                List.of(new TweetUserResponse(), new TweetUserResponse()), new HttpHeaders());
        when(retweetService.getUserRetweetsAndReplies(TestConstants.USER_ID, pageable)).thenReturn(pageableTweetUserProjections);
        when(basicMapper.getHeaderResponse(pageableTweetUserProjections, TweetUserResponse.class)).thenReturn(headerResponse);
        assertEquals(headerResponse, retweetMapper.getUserRetweetsAndReplies(TestConstants.USER_ID, pageable));
        verify(retweetService, times(1)).getUserRetweetsAndReplies(TestConstants.USER_ID, pageable);
        verify(basicMapper, times(1)).getHeaderResponse(pageableTweetUserProjections, TweetUserResponse.class);
    }

    @Test
    public void getRetweetedUsersByTweetId() {
        HeaderResponse<UserResponse> headerResponse = new HeaderResponse<>(
                List.of(new UserResponse(), new UserResponse()), new HttpHeaders());
        when(retweetService.getRetweetedUsersByTweetId(TestConstants.TWEET_ID, pageable)).thenReturn(headerResponse);
        assertEquals(headerResponse, retweetMapper.getRetweetedUsersByTweetId(TestConstants.TWEET_ID, pageable));
        verify(retweetService, times(1)).getRetweetedUsersByTweetId(TestConstants.TWEET_ID, pageable);
    }

    @Test
    public void retweet() {
        NotificationResponse notificationResponse = new NotificationResponse();
        when(retweetService.retweet(TestConstants.TWEET_ID)).thenReturn(notificationResponse);
        assertEquals(notificationResponse, retweetMapper.retweet(TestConstants.TWEET_ID));
        verify(retweetService, times(1)).retweet(TestConstants.TWEET_ID);
    }
}
