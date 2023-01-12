import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from "react-router-dom";
import IndexLayout from "../layouts/root/IndexLoyout";
import MbtiTest from "../pages/MbtiTest";

export default function IndexRoute() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='' element={<IndexLayout/>}>
                <Route index element={<MbtiTest/>}/>
            </Route>
        ), {basename:"/mbti-test"}
    );

    return <RouterProvider router={router}/>;
}