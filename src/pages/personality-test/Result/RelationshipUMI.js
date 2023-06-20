import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import UMIAvatarList from './UMIAvatarList';

const relationship = {
  ENTJ: {
    good: ['ISFP', 'INFP', 'ESFP', 'ESTP'],
    soso: ['ISTP', 'INTP', 'ENFP', 'INFJ', 'INTJ', 'ENFJ', 'ISTJ', 'ENTP'],
    bad: ['ESTJ', 'ENTJ', 'ESFJ', 'ISFJ'],
  },
  ENTP: {
    good: ['ISFJ', 'ISTJ', 'ENTP', 'ESTJ'],
    soso: ['ESFJ', 'INFJ', 'INTJ', 'INFP', 'ENFJ', 'INTP', 'ISTP', 'ENFP'],
    bad: ['ESTP', 'ENTJ', 'ESFP', 'ISFP'],
  },
  INTJ: {
    good: ['ESFP', 'ESTP', 'ISFP', 'INFP'],
    soso: ['INFJ', 'ENFP', 'ENTP', 'ISTP', 'ENFJ', 'INTJ', 'ISTJ', 'ENTJ'],
    bad: ['INTP', 'ESTJ', 'ISFJ', 'ESFJ'],
  },
  INTP: {
    good: ['ESFJ', 'ENFJ', 'ISFJ', 'INFJ'],
    soso: ['ESTJ', 'ISTJ', 'ENTJ', 'ENFP', 'ENTP', 'INTP', 'INTJ', 'ISTP'],
    bad: ['INFP', 'ESTP', 'ISFP', 'ESFP'],
  },
  ESTJ: {
    good: ['INFP', 'ISFP', 'INTP', 'ENTP'],
    soso: ['ISTP', 'ESFP', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'INTJ'],
    bad: ['ENTJ', 'ESTP', 'ENFJ', 'INFJ'],
  },
  ESFJ: {
    good: ['INTP', 'ISTP', 'ENTP', 'ENFP'],
    soso: ['INFP', 'ISTJ', 'ESFJ', 'ESTP', 'ISFP', 'ENFJ', 'ISFJ', 'INFJ'],
    bad: ['ESTJ', 'ESFP', 'ENTJ', 'INTJ'],
  },
  ISTJ: {
    good: ['ENFP', 'ENTP', 'ISFP', 'INFP'],
    soso: ['ESTP', 'ESFP', 'INTP', 'ESTJ', 'ESFJ', 'ISTJ', 'INTJ', 'ISFJ'],
    bad: ['ISTP', 'ENTJ', 'INFJ', 'ENFJ'],
  },
  ISFJ: {
    good: ['ENTP', 'ENFP', 'INTP', 'ISTP'],
    soso: ['ESFP', 'ESTP', 'ESTJ', 'INFP', 'ESFJ', 'ISTJ', 'ISFJ', 'ENFJ'],
    bad: ['INFJ', 'ISFP', 'INTJ', 'ENTJ'],
  },
  ENFJ: {
    good: ['ISTP', 'INTP', 'ESTP', 'ESFP'],
    soso: ['ENFJ', 'INFP', 'ISFP', 'ENTP', 'INTJ', 'ESFJ', 'INFJ', 'ENFP'],
    bad: ['ENTJ', 'ISFJ', 'ESTJ', 'ISTJ'],
  },
  ENFP: {
    good: ['ISTJ', 'ISFJ', 'ESFJ', 'ESTJ'],
    soso: ['INFJ', 'INTJ', 'ENTJ', 'ISFP', 'ENFP', 'INTP', 'INFP', 'ENFJ'],
    bad: ['ENTP', 'ESFP', 'ESTP', 'ISTP'],
  },
  INFJ: {
    good: ['ESTP', 'ESFP', 'ISTP', 'INTP'],
    soso: ['ENFP', 'ENTP', 'INTJ', 'ENTJ', 'INFJ', 'ISFP', 'ENFJ', 'ESFJ'],
    bad: ['ISFJ', 'INFP', 'ISTJ', 'ESTJ'],
  },
  INFP: {
    good: ['ESTJ', 'ENTJ', 'INTJ', 'ISTJ'],
    soso: ['ENFJ', 'ESFJ', 'ENTP', 'INFP', 'ISFJ', 'INTP', 'ESFP', 'ENFP'],
    bad: ['ISFP', 'INFJ', 'ISTP', 'ESTP'],
  },
  ESTP: {
    good: ['INFJ', 'INTJ', 'ENFJ', 'ENTJ'],
    soso: ['ISFJ', 'ISTP', 'ISTJ', 'ESFJ', 'ESTP', 'ISFP', 'ESFP', 'INTP'],
    bad: ['ENTP', 'ESTJ', 'ENFP', 'INFP'],
  },
  ESFP: {
    good: ['INTJ', 'INFJ', 'ENTJ', 'ENFJ'],
    soso: ['ESTJ', 'ISTJ', 'ISFJ', 'ISFP', 'ISTP', 'INFP', 'ESFP', 'ESTP'],
    bad: ['ESFJ', 'ENFP', 'ENTP', 'INTP'],
  },
  ISTP: {
    good: ['ENFJ', 'ESFJ', 'INFJ', 'ISFJ'],
    soso: ['ENTJ', 'ESTJ', 'ESFP', 'ESTP', 'INTJ', 'ISTP', 'INTP', 'ENTP'],
    bad: ['ISTJ', 'ISFP', 'INFP', 'ENFP'],
  },
  ISFP: {
    good: ['ENTJ', 'ESTJ', 'INTJ', 'ISTJ'],
    soso: ['ENFJ', 'ESFJ', 'INFJ', 'ESFP', 'ISFP', 'ESTP', 'ENFP', 'INFP'],
    bad: ['ISTP', 'ISFJ', 'INTP', 'ENTP'],
  },
};

const RelationshipUMI = function ({ type }) {
  // 타입에 따른 관계를
  return (
    <Grid2
      container
      rowGap={2}
    >
      <Grid2 xs={12}>
        <UMIAvatarList
          title={`나랑 잘맞는 UMI`}
          avatars={relationship[type].good}
          color='primary'
          rel='good'
        />
      </Grid2>
      <Grid2 xs={12}>
        <UMIAvatarList
          title={`나랑 SOSO한 UMI`}
          avatars={relationship[type].soso}
          rel='normal'
        />
      </Grid2>
      <Grid2 xs={12}>
        <UMIAvatarList
          title={`나랑 안맞는 UMI`}
          avatars={relationship[type].bad}
          color='secondary'
          rel='bad'
        />
      </Grid2>
    </Grid2>
  );
};

export default RelationshipUMI;