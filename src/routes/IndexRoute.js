import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayout";
import QuestionLayout from "../components/layouts/QuestionLayout";
import MainPage from "../components/pages/MainPage";
import QuestionPage from "../components/pages/QuestionPage";
import ResultPage from "../components/pages/ResultPage";
import ResultPageV2 from "../components/pages/ResultPageV2";
import Test from "../pages/tests/Test";

export default function IndexRoute() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="" element={<MainLayouts/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="result" element={<ResultPage/>}/>
                    <Route path="result2" element={<ResultPageV2/>}/>
                </Route>
                <Route path="questions" element={<QuestionLayout/>}>
                    <Route index element={<QuestionPage/>}/>
                </Route>
                <Route path="test" element={<Test/>}>

                </Route>
            </>
        ),
    );

    return <RouterProvider router={router}/>;
}