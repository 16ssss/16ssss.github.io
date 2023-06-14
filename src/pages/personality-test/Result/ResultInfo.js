import TypeRatio from './TypeRatio';

const ResultInfo = function ({ type, ratio }) {
  return (
    <>
      <TypeRatio
        value={ratio[0] > 50 ? ratio[0] : 100 - ratio[0]}
        type={ratio[0] > 50 ? 'left' : 'right'}
        leftLabel='E'
        rightLabel='I'
      />
      <br />
      <TypeRatio
        value={ratio[1] > 50 ? ratio[1] : 100 - ratio[1]}
        type={ratio[1] > 50 ? 'left' : 'right'}
        leftLabel='S'
        rightLabel='N'
      />
      <br />
      <TypeRatio
        value={ratio[2] > 50 ? ratio[2] : 100 - ratio[2]}
        type={ratio[2] > 50 ? 'left' : 'right'}
        leftLabel='T'
        rightLabel='F'
      />
      <br />
      <TypeRatio
        value={ratio[3] > 50 ? ratio[3] : 100 - ratio[3]}
        type={ratio[3] > 50 ? 'left' : 'right'}
        leftLabel='J'
        rightLabel='P'
      />
    </>
  );
};

export default ResultInfo;
