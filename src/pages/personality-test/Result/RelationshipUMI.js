import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import UMIAvatarList from './UMIAvatarList';

const RelationshipUMI = function ({ relationship }) {
  // 타입에 따른 관계를
  return (
    <Grid2
      container
      rowGap={2}
    >
      <Grid2 xs={12}>
        <UMIAvatarList
          title={`나랑 잘맞는 UMI`}
          avatars={relationship.good}
          color='primary'
        />
      </Grid2>
      <Grid2 xs={12}>
        <UMIAvatarList
          title={`나랑 SOSO한 UMI`}
          avatars={relationship.soso}
        />
      </Grid2>
      <Grid2 xs={12}>
        <UMIAvatarList
          title={`나랑 안맞는 UMI`}
          avatars={relationship.bad}
          color='secondary'
        />
      </Grid2>
    </Grid2>
  );
};

export default RelationshipUMI;
