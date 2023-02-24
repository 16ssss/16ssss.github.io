import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import IndexLayout from "../layouts/root/IndexLoyout";
import MbtiTest from "../pages/MbtiTest";
import MbtiResult from "../pages/MbtiResult";
import MbtiTestV2Main from "../pages/MbtiTestV2/MbtiTestV2Main";
import MbtiTestLayout from "../layouts/MbtiTest/MbtiTestLayout";
import MbtiTestV2Question from "../pages/MbtiTestV2/MbtiTestV2Question";
import MbtiTestV2QuestionSlide from "../pages/MbtiTestV2/MbtiTestV2QuestionSlide";

export default function IndexRoute() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='' element={<IndexLayout/>}>
                    <Route index element={<MbtiTestV2Main/>}/>
                    <Route path="v1" element={<MbtiTest/>}/>
                    <Route path="result" element={<MbtiResult/>}/>
                </Route>
                <Route path='questions' element={<MbtiTestLayout/>}>
                    <Route index element={<MbtiTestV2Question/>}/>
                    <Route path="slide" element={<MbtiTestV2QuestionSlide/>}/>
                </Route>

            </>
        ), {basename: "/mbti-test"}
    );

    return <RouterProvider router={router}/>;
}