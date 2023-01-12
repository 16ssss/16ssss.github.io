import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import NonMemberLayout from "./NonMemberLayout";

export default function IndexLayout() {
    // 스크롤 맨위로 올리기
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const LayoutSeletor = () => {
        switch (null) {
            default:
                return <NonMemberLayout />;
        }
    };

    return <LayoutSeletor />;
}