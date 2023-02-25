import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayout";
import QuestionLayout from "../components/layouts/QuestionLayout";
import MainPage from "../components/pages/MainPage";
import QuestionPage from "../components/pages/QuestionPage";

export default function IndexRoute() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="" element={<MainLayouts/>}>
                    <Route index element={<MainPage/>}/>
                </Route>
                <Route path="question" element={<QuestionLayout/>}>
                    <Route index element={<QuestionPage/>}/>
                </Route>
            </>
        ), {basename: "/mbti-test"}
    );

    return <RouterProvider router={router}/>;
}