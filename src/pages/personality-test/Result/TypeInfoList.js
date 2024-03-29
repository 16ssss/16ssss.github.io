import { List, ListItem, ListItemText, Typography } from '@mui/material';

const typeList = {
  INTJ: [
    '고집 셈, 융통성 부족, 자기 관심 분야 외 신경 쓰지 않음',
    '자신의 능력에 대해 자신감이 있으며 높이 평가함',
    '독립적인 성향이 강함 고 감정에 휘둘리는 거 싫어함',
    '타인에게 잘 보이고 싶다는 요구가 없음 (상대방은 다가가기 어려움)',
    '친구 고민 상담 잘 못 들어줌 (공감을 잘 못함)',
    '인싸들의 관심사에서 동떨어져 있음',
    '학교, 회사 등 조직생활에 적응하기 어려움',
    '혼자서 모든 것을 해결하려는 의지가 강함 (조별 과제 혼자 함)',
    '목표 지향적임 목표를 달성하면 큰 행복감을 느낌',
    '무신경하다는 소리 들음 근데 좋아하는 것에는 과몰입함',
    '효율성이 떨어지는 시스템을 보면 참지 못함',
    '매정할 만큼 객관적으로 판단하고 꼼수를 용납할 수 없음',
    '문제 해결을 위해 독창적이고 참신한 방법을 고안함',
    '공상 잦음, 어떤 사안이나 작품에 대해 다각도로 해석하는 거 좋아함',
    '‘나 오늘 뭐 바뀐 것 없어?’ 하고 물어보면 대답 못함',
  ],
  INTP: [
    '게으른 천재 많음 (미루기의 끝판왕)',
    '논리정연하게 말하고 사적인 감정을 잘 드러내지 않음',
    '남에게 피해주는 거 싫어하고 남에게 관심 별로 없음',
    '말이 별로 없으나 자기의 관심 분야에서는 말을 많이 함',
    '책 읽는 것을 좋아하지만 너무 게을러서 독서를 기피함',
    '성격 스텟을 배분할 때 창의력과 지능에 몰빵해서 나머지 사회성, 성실성, 외향성 등은... 할많하않',
    '비 논리적이고 어리석은 사람들 보면 화가 너무 남',
    '자기 주관 뚜렷, 호불호 확실, 할 말 앞에서 다 함 (팩폭 하지 말라는 소리들음)',
    '웬만한 일에 상처 안받음',
    '남이 내 욕하는 거 신경 안 쓰고 남 욕도 안 함 (타인에 관심이 없음)',
    '친한 친구라도 별 일 없으면 연락을 잘 안함',
    '기분이나 감정을 표현할 때도 꼭 생각하고 표현함',
    'MBTI에 관심이 많음 이유는 MBTI만큼 자기 자신을 잘 묘사하는 것이 없다고 생각하기 때문에',
  ],
  ENTJ: [
    '선천적 리더인 경우가 많아 학창시절에 한자리 하는 경우가 있음',
    '끈기, 책임감이 뛰어나 맡은 일을 끝까지 밀고 나감',
    '근데 자기가 책임지지 못할 것 같으면 과감하게 포기함',
    '조별 과제할 때 팀원들이 빤스런 하면 버스기사로 총대 멤',
    '나서서 하는 걸 좋아하는 게 아니라 남들 하는 게 맘에 안 들어서 나서는 거임',
    '감성팔이 절대 안 먹힘 (논리적인 팩트로 조짐)',
    '속까지 매의 눈으로 샅샅이 염두에 두고 상황 판단을 함',
    '자기 비전이 매우 확고, 자존감 아주 높음',
    '열등감 느낀 적 극히 드묾',
    '비효율적인 관습 제일 싫어함 (꼰대들한테 제일 많이 개김)',
    '우유부단하고 선택 장애 있는 사람, 능력 없으면서 고집부리는 사람 극혐함',
    '카리스마 넘치는 사람 같지만 의외로 사석에서 무장해제',
    '비능률, 비효율 용납 불가능, 반복되는 같은 실수를 참을 수 없음',
    '같은 ENTJ유형에 끌리는 경향이 있음',
    '해보지도 않고 못한다는 말을 가장 싫어함',
  ],
  ENTP: [
    '완벽주의자와는 거리가 멀고 관대, 느긋한 삶을 가짐',
    '일단 하고 봄, 일단 저지르고 생각은 나중에',
    '선입견 없음. 있는 그대로를 받아들임 (개방적)',
    '극한의 위기에서 상황 판단 단번에 하고 제일 먼저 탈출함',
    '임기응변에 능하고 말보다는 행동이 앞섬',
    '주변 환경에 따라 시시각각 맞출 수 있음',
    '직설적이고 솔직하게 표현하는 것에 거리낌이 없음',
    '그래서 상대 감정에 자주 생채기를 남기기도 하지만 정작 본인은 그런 말을 했는지조차 잊어버림',
    '물건 환불, 컴플레인 엄청 잘함 훌륭한 말싸움꾼',
    '토론이나 논쟁할 때 내 의견으로 끝나야 속이 시원',
    '좋아하는 사람 싫어하는 사람 명확히 구분됨',
    '모든 방면에서 재능이 있지만 엄청 잘하지는 않음',
    '‘재미’가 인생의 원동력',
    '기가 막히다고 생각하는 사업 아이템이나 아이디어 하나씩 갖고 있음',
  ],
  INFJ: [
    '겉으로는 이상적인 우정이나 사랑은 없다며 냉소적',
    '속으로는 누구보다도 순수한 소통을 갈망함 (인간 겉바속촉)',
    '인간관계를 잘 유지하기 위해 때로는 가면을 씀',
    '말할 때 비유나 은유 등 완곡한 표현을 많이 씀',
    '사람들 사이에서 직접 이끌고 리드하기보다는 그 사람이 좋아하는 말과 행동을 통해 주도권을 상대에게 넘겨줌',
    '기본적으로 모든 사람에게 다정다감, 친절, 호감을 삼',
    '하지만 그 이상은 선을 긋고 있어 차가우면서도 거리감 있다고 느껴짐',
    '절친이나 가족에게도 예외 없이 선이 있음',
    '직관을 통해 상대방의 감정을 단번에 읽음',
    '신중하고 완벽주의적인 성향, 상상력이 풍부함',
    '내적으로 고민, 갈등 많음 (행동하기 전 시뮬레이션 100번 함)',
    '감정 조절 능력, 스트레스 저항력 높음 (멘탈 튼튼)',
    '심리학, 철학, 인문학 등 추상적으로 생각할 수 있는 거 좋아함',
    '섬세함, 완벽주의적인 성향, 예리한 통찰력 그리고 가끔씩 나오는 허당미',
  ],
  INFP: [
    '이미지 출처 ,좋은일컴퍼니 DB 재미로 알아보는 MBTI 성격유형별 팩폭 모음',
    '대체적으로 적응력 좋고 관대하고 개방적, 이해심 많음',
    '나만의 신념, 가치관이 있음',
    '이해심과 관대함도 내적 신념이 위협 당하면 얄짤없음',
    '안 친한 사람에게 경계심과 의심이 많아 진입장벽이 존재함',
    '진입장벽을 넘은 친구, 연인에게는 모든 것을 오픈하는 편',
    '공감능력이 뛰어나고 배려심이 좋아 애늙은이 되는 경우도 있음',
    '내향 유형인데 사람들에게 관심받고 싶어 하는 경향이 있음',
    '감정 기복 엄청 심함, 멘탈 제일 약함',
    '우유부단함. 일을 미룸',
    '상대방이 내 사람이 되기 전까지는 마음을 표현하지 않음',
    '비도덕적인 것에 예민하게 반응함',
    '말 이면의 숨은 의도를 파악하려 함',
    '의미 부여를 잘함',
    '나의 가치를 존중해주는 사람이 있다면 올인함',
    '현실보다는 온라인에서 아주 흔하게 보임',
  ],
  ENFJ: [
    '사람들을 이끄는 것에 타고난 기질이 있고 좋아하기도 함',
    '미래와 현실을 동시에 고려하는 넓은 시야를 가져 타고난 지도자',
    '인류애, 정의감 넘침 (사람을 좋아함)',
    '말로 사람의 마음을 움직이게 하는 능력이 탁월함 (언변 능력)',
    '연애할 때는 그 사람에게 푹 빠져서 헌신함',
    '오지랖 심함',
    '싫은 소리 못함',
    '인정과 칭찬을 받으면 좋지만 비판에는 민감하게 반응함',
    '리액션이 좋고 나보다 상대를 먼저 생각해서 말과 행동을 함',
    '계획 세우는 것을 좋아하고 계획대로 사람들을 끌어가는 것에 능숙함',
    '의사소통에 능해서 표현하는 것에 천부적인 자질이 있음',
    '수업 시간에는 선생님 농담까지도 받아 적음',
    '직관력 발달, 눈치 좋음, 센스 있음',
    '다른 사람의 동기나 의도를 정확하게 파악함',
    '다른사람의 성장을 옆에서 돕고 영향을 미칠 때 보람을 느낌',
  ],
  ENFP: [
    '긍정적이며 낙천적임. 인싸인 경우가 많음',
    '친구들과 잘 어울리고 다른 사람들과 같이 있는 것을 좋아함',
    '새로운 인간관계에 두려움이 없음',
    '순간 집중력이 좋아서 벼락치기 해도 성과가 잘 나옴',
    '그러나 끈기가 없어 반복적인 일상을 매우 극혐함',
    '감정이 풍부하고 그 감정이 표정에서 다 드러남',
    '관종끼가 강하지만 의외로 내향성이 강하고 독립적인 편',
    '계획 세우기 귀찮아함, 즉흥적임',
    '충동구매 잘함',
    '한번 일을 하다 보면 금세 싫증을 내는 일이 많음 (용두사미)',
    '자유를 추구하고 구속받는 것을 싫어함',
    '거짓말 잘 못해서 입에 발린 말 잘 못함',
    '어린아이 같은 면이 있음',
    '익숙함 보다는 새로운 것이 좋음',
    '남 얘기에 리액션을 잘 해줘서 고민 상담하는 애들 많음',
  ],

  ISTJ: [
    '현실 감각이 뛰어나고 말투도 직설적이라 가끔 딱딱하다는 소리 들음',
    '내 얘기 하는 거 별로 안 좋아하고 남 얘기 들어주기도 힘듦',
    '마찬가지로 다른 사람 일에 관심 가지는 게 너무 귀찮음',
    '그래서 인간관계 얕고 넓음 (깊어지는 신경 쓸게 많아서 싫음)',
    '한번 일을 맡으면 모든 책임을 다하고 신중하게 처리함',
    '즉흥적인 것을 싫어함 계획 세우는 거 잘함',
    '앞뒤가 다른 사람, 약속을 어기는 사람을 매우 극혐함',
    '단기간에 많은 걸 암기해야 하는 시험 같은 거 잘 봄',
    '전통적인 가치관, 자신의 경험을 중시함, 고정 관념이 강함',
    '위와 같은 이유로 융통성 없는 꼰대가르송이 되기도 함',
    '남들이랑 같이 일하는 거보다 혼자 일하고 싶음 (협동 사절)',
    '물건 사면 안에 들어있는 사용설명서 꼭 읽어봄',
    '조별 과제 할 때 이야기 딴 데로 새는 걸 못 참음',
    '뭐든 한번 시작하면 끝을 봐야 직성이 풀림',
    'MBTI는 근거 없는 유사과학이라고 생각함',
  ],
  ISFJ: [
    '내향형인데 상황에 따라 외향적인 척 코스프레 가능함',
    '나서는 거 싫어하는데 관심받는 건 좋음',
    '다른 사람의 감정을 잘 캐치하고 공감도 잘해줌',
    '그래서 대화할 때 주로 듣는 입장임, 내 얘기 안 함',
    '대화가 지루하고 듣고 싶지 않아도 겉으로 티 안 냄',
    '부탁받으면 거절 진짜 못함 근데 내가 남한테 부탁하는 건 어려움',
    '착하고 친절하다는 얘기 자주 들음',
    "자기 전에 이불 속에서 '아 이때 이 말을 했어야 했는데' 이런 생각 함",
    '뒤끝 있음',
    '잘난척하는 사람 제일 극혐함',
    '기억력 엄청 좋음 옛날에 있었던 일들 다 기억해냄',
    '진짜 극혐하지 않는 이상 싫다고 얘기 잘 안 함',
    '계획 세우는 거 좋아하고 그 계획대로 일이 진행되어야 마음이 편함',
    '가성비 엄청 따짐 돈을 쓰면 뽕을 뽑아야 하는 마인드',
    '인간관계에서 상처, 스트레스를 많이 받음',
  ],
  ESTJ: [
    '고집 셈, 현실적, 이성적, 직설적, 호불호 확실',
    '주변 사람들한테 일해라 운동해라 공부해라 뼈 때림',
    '근데 본인도 책잡힐 짓 안 함',
    '일 못하면 나쁜 사람 일 잘하면 좋은 사람임',
    '누가 일 못하는 거 못 봄 차라리 내가 두세 배로 일 다 해놓음',
    '뭐든 확실한 게 좋음 딱 떨어지는 거',
    '목표를 한번 정하면 이룰 때까지 한 우물만 팜',
    '누가 고민 상담하면 상황분석하고 객관적인 판단을 함',
    '머릿속으로는 이미 누구의 잘잘못인지 판단 완료',
    '하지만 상처받을까 봐 얘기 안 하고 어설프게 위로함 (공감능력X)',
    '겉과 속이 일치함 내가 차라리 앞담을 하지 절대 뒷담 안 함',
    '도 아니면 모 확실한 거 좋아함 애매모호한 거 싫어함',
    '시간 약속, 규칙을 어기는 사람들 극혐함',
    '싸우는 거 싫어하지만 싸워서 지는 걸 더 싫어함',
    '일적으로 다른 사람에게 인정받는 거 좋아함',
  ],
  ESFJ: [
    '타고난 분위기 메이커',
    '새로운 사람 사귀는 것도 좋아하고 같이 노는 것도 좋아함',
    '스트레스 받으면 누구라도 만나야 됨',
    '어색한 거 못 참고 먼저 말 검',
    '친구, 가족, 내 사람 잘 챙김',
    '강의 때 제일 호응 많이 함',
    '남한테 싫은 소리 하는 거 싫어함',
    '생각은 진짜 창의적인데 그만큼 실행력이 따라가지를 못함',
    '감정 기복 심하고 감정이 얼굴에 다 드러남',
    '남 얘기에 리액션 잘해줘서 고민 상담하는 애들 있음',
    '어디 가서 사회생활 잘한다는 소리 들음',
    '다른 사람들한테 인정받을 때 기분 좋음',
    '누가 나한테 반대하거나 부탁을 거절하면 쉽게 마상 입음',
    '아직 안 일어난 상황에 대해 미리 걱정함',
    '인간관계에서 상처받아도 상대방 배려한다고 얘기 못함',
  ],
  ISTP: [
    '호불호 강함, 멀티 안됨, 자기주장 강함, 마이웨이',
    '관심 있고 하고 싶은 것만 함 하기 싫은 건 죽어도 안 함',
    '무미건조, 낯가림 근데 친해지면 말 많고 장난도 잘 침',
    '틀에 박힌 계획을 고수하지 않아 융통성이 있음',
    '효율성 엄청 따짐, 노오력도 절약하는 성향',
    '심지어 정서적인 표현도 효율적으로 함',
    "그래서 가족한테 '굳이' 사랑한다는 말도 안 함",
    '새로운 것에 대한 저항이 크지 않음',
    '벼락치기 개잘함',
    '감정적인 사람이랑 대화가 잘 안됨',
    '얘는 왜 이렇게 쓸데없는 말을 많이 하는지 이해가 안 됨',
    '위계질서 개 싫어하고 내가 간섭받으면 육성으로 욕 나옴',
    '상대방 기분 맞춰주려고 마음에도 없는 소리 하는 거 싫어함',
    '일반적으로 조용하지만 필요에 의해서는 사교적임',
    '카톡 할 말 없으면 읽씹함',
  ],
  ISFP: [
    '겸손하다는 말 자주 들음',
    '발등에 불이 떨어져서 타들어가도록 일을 끝까지 미룸',
    '결단력, 추진력, 주관 없음 선택 장애',
    '사람 만나는 거 좋은데 싫음 막상 만나면 잘 놈',
    '다른 사람 부탁 거절 잘 못함, 양보 잘함',
    '남한테 민폐 끼치는 거 싫어하고 싫은 소리 못함',
    '예술 계통에 최소 한 분야에는 재능이 있음',
    '말싸움에 약함 (감정이 앞서서 논리적이지 못함)',
    '나 안착한데 왜 사람들이 착하다고 하는지 모르겠음',
    '남한테 내 얘기 잘 안 함',
    '생각은 잘 하는데 생각한 것을 실천하진 않음',
    '만사가 귀찮음',
    '주변 의견, 주변 분위기 잘 따라감',
    '규칙이나 관습, 틀에 묶이는 것을 싫어함',
    '누가 나한테 부정적으로 말하는 거에 마상 쉽게 받음',
  ],
  ESTP: [
    '경쟁, 내기, 즉흥, 번개 좋아함',
    '스릴이 있어야 재밌음',
    '선입견 1도 없고 개방적임',
    '주변에 일어나는 일에 관심 많음',
    '깊게 생각하는 거 머리 아프고 싫어함',
    '남 눈치 안 봄 나 하고 싶은 거 하고 삶',
    '오늘의 할 일을 내일로 미룸 물론 내일도 안 함',
    '눈치 개빠름',
    '뒤끝 1도 없음 개쿨함',
    '당장 놀고먹는 게 너무 좋음 공부, 일은 뒷전',
    '조별 활동 조장이나 반장에 추천 많이 됨',
    '환불, 컴플레인 겁나 잘함 말싸움으로 다 발라버림',
    '갈등이 심해질수록 차가워지는 머리와 끓어오르는 피',
    '돌직구 던진다는 소리 자주 들음',
    '추상적으로 말하거나 감성팔이 유형 극혐함​',
  ],
  ESFP: [
    '서프라이즈, 깜짝파티 좋아함',
    '친구의 친구의 친구까지 껴서 술자리 가짐 사교성 개쩜',
    '집에 오래 있으면 무기력한 느낌이 듦 쉬는 날 집에 거의 안 붙어있음',
    '싫고 좋은 사람 구분이 뚜렷하고 표정에 다 드러남',
    '관종끼 많음, 주목받는 거 좋아함, 학교나 직장에서 나를 모르는 사람이 없음',
    '대화하다 침묵 흐르는 거 제일 싫어함',
    '정이 많고 건망증이 심함 고집 셈',
    '거절 잘 못함',
    '잘 먹고, 잘 자고, 생각이 단순함',
    '아무리 걱정되는 일 있어도 조금 고민하다가 잠듦',
    '좋은 게 좋은 거임',
    '화가 나면 쉽게 감정에 휩싸이고 흥분함',
    '쿠크다스 멘탈',
    '문찐이랑 거리가 멂 요즘 문화 모르는 게 없음',
    '혼자 있으면 지루해서 뭔갈 계속하고 있어야 함',
  ],
};

const TypeInfoList = function ({ type }) {
  return (
    <>
      <Typography variant='h4'> 당신을 위한 팩트폭격! </Typography>
      <List>
        {typeList[type].map((t, i) => (
          <ListItem
            key={`listItem-${i}`}
            sx={{ padding: 1 }}
          >
            <ListItemText
              sx={{ margin: 0 }}
              primary={`- ${t}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default TypeInfoList;
