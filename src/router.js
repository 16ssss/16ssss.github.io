import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import PersonalityTestIndex from './pages/personality-test/PersonalityTestIndex';
import NotFound from './pages/NotFound';
import PersonalityTestComment from './pages/personality-test/PersonalityTestComment';
import PersonalityTestQuestions from './pages/personality-test/PersonalityTestQuestions';
import PersonalityTestResult from './pages/personality-test/PersonalityTestResult';
import PersonalityTestLayouts from './components/layouts/PersonalityTestLayouts';
import Test from './pages/Test';
const router = createBrowserRouter(
  [
    {
      index: true,
      element: <Main />,
    },
    {
      path: '/personality-test',
      element: <PersonalityTestLayouts />,
      children: [
        { index: true, element: <PersonalityTestIndex /> },
        { path: 'questions', element: <PersonalityTestQuestions /> },
        { path: 'comment', element: <PersonalityTestComment /> },
        { path: 'result', element: <PersonalityTestResult /> },
      ],
    },
    {
      path: 'test',
      element: <Test />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
