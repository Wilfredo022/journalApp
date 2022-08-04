import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoute } from "../journal/routes/JournalRoute";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="journalApp/*" element={<JournalRoute />} />
      ) : (
        <Route path="journalApp/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
