import { Box } from '@mui/material';
import { useEffect } from 'react';

const KakaoTalkShare = function () {
  /**
   * 카카오 api 연동
   * */

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        // kakao.init(process.env.REACT_APP_KAKAO_KEY)
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      window.Kakao.Link.sendCustom({
        templateId: 91596, // 내가 만든 템플릿 아이디를 넣어주면 된다
      });
      // kakao.Share.createCustomButton()({
      //     container: '#kakaotalk-sharing-btn',
      //     requestUrl: 'https://developers.kakao.com',
      // });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Box width={200}>
      <div
        className='kakaotalk-sharing-btn'
        onClick={createKakaoButton}
      >
        <img
          // src='https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png'
          src={process.env.PUBLIC_URL + `/btns/kakao-share-btn.png`}
          alt='카카오톡 공유 보내기 버튼'
          width='100%'
        />
      </div>
    </Box>
  );
};
export default KakaoTalkShare;
