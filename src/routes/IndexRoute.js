import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayout";
import QuestionLayout from "../components/layouts/QuestionLayout";
import MainPage from "../components/pages/MainPage";
import QuestionPage from "../components/pages/QuestionPage";
import ResultPage from "../components/pages/ResultPage";
import {useDispatch, useSelector} from "react-redux";
import {CallGetMBTIQuestionAPI} from "../services/apis/mbtiAPICalls";

export default function IndexRoute() {
    const mbti = useSelector(s => s.mbtiReducer);
    const dispatch = useDispatch();

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="" element={<MainLayouts/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="result" element={<ResultPage/>}/>
                </Route>
                <Route path="question" element={<QuestionLayout/>}>
                    <Route index element={<QuestionPage/>}/>
                </Route>
            </>
        ), {basename: "/mbti-test"}
    );

    return <RouterProvider router={router}/>;
}