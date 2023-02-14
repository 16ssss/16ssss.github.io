import {Route} from "react-router-dom";
import MbtiTestV2QuestionPage from "../pages/MbtiTestV2/MbtiTestV2QuestionPage";

export default () => {



    return (
        <Route path={":step"} element={<MbtiTestV2QuestionPage/>}/>

    );
}