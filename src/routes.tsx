import { Outlet, RouteObject } from "react-router";
import MainLayout from "./components/common/MainLayout";
import SectionEditorList from "./components/edit/SectionEditorList";
import AdminPage from "./pages/AdminPage";
import { SurveyStoreProvider } from "./store";

export const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout>
        <SurveyStoreProvider>
          <Outlet />
        </SurveyStoreProvider>
      </MainLayout>
    ),
    children: [
      {
        path: "surveys/:surveyId",
        element: <AdminPage />,
        children: [
          {
            path: "edit",
            element: <SectionEditorList />,
          },
          {
            path: "responses",
            element: <div>응답</div>,
          },
        ],
      },
    ],
  },
];
