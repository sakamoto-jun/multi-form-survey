import clsx from "clsx";
import { PropsWithChildren } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useSurveyId from "../hooks/domain/useSurveyId";

const AdminPage = () => {
  const surveyId = useSurveyId();

  return (
    <div className="flex flex-col">
      <div className="flex justify-center gap-x-20">
        <Tab path={`/surveys/${surveyId}/edit`}>질문</Tab>
        <Tab path={`/surveys/${surveyId}/responses`}>응답</Tab>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

const Tab = ({ children, path }: PropsWithChildren<{ path: string }>) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "p-14 border-b-3",
          isActive ? "text-main border-main" : "text-gray500 border-transparent"
        )
      }
      to={{
        pathname: path,
      }}
    >
      {children}
    </NavLink>
  );
};

export default AdminPage;
