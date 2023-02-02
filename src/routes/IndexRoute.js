import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import IndexLayout from "../layouts/root/IndexLoyout";
import MbtiTest from "../pages/MbtiTest";
import MbtiResult from "../pages/MbtiResult";

export default function IndexRoute() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='' element={<IndexLayout/>}>
                <Route index element={<MbtiTest/>}/>
                <Route path="result" element={<MbtiResult/>}/>
            </Route>
        ), {basename: "/mbti-test"}
    );

    return <RouterProvider router={router}/>;
}