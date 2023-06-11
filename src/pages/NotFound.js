import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

const NotFound = function () {
  const navigate = useNavigate();
  useEffect(() => {
    alert(`존재하지 않는 페이지입니다.\n메인화면으로 이동합니다.`);
    navigate('/');
  }, []);
  return <>당신은 잘못 들어왔습니다.</>;
};

export default NotFound;
