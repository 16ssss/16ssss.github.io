import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayouts from '../components/layouts/MainLayout';
import QuestionLayout from '../components/layouts/QuestionLayout';
import MainPage from '../pages/MainPage';
import QuestionPage from '../pages/QuestionPage';
import ResultPageV2 from '../pages/ResultPageV2';
import Test from '../pages/tests/Test';
import Result from '../pages/questions/Result';
import MainLayout from '../components/layouts/MainLayout';

export default function IndexRoute() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path=''
          element={<MainLayouts />}
        >
          <Route
            index
            element={<MainPage />}
          />
          {/*<Route path="result" element={<ResultPage/>}/>*/}
          <Route
            path='result'
            element={<Result />}
          ></Route>
          s
        </Route>
        <Route
          path='questions'
          element={<QuestionLayout />}
        >
          <Route
            index
            element={<QuestionPage />}
          />
        </Route>
        <Route
          path='test'
          element={<Test />}
        ></Route>

        <Route
          path='test'
          element={<MainLayout />}
        >
          <Route
            path='result'
            element={<ResultPageV2 />}
          />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
