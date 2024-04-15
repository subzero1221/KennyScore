import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Matches from "./pages/Matches";

import Transfers from "./pages/Transfers";
import PageNotFound from "./pages/PageNotFound";
import PlayerStatistic from "./features/Clubs/PlayerStatistic";
import { FootBallProvider } from "./Context";
import Statistics from "./pages/Statistics";
import Clubs from "./features/Clubs/Clubs";
import Standings from "./pages/Standings";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100 * (60 * 100),
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <FootBallProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="Matches" element={<Matches />} />
              <Route path="standings" element={<Standings />} />
              <Route path="Transfers" element={<Transfers />} />
              <Route path="Matches/statistics" element={<Statistics />} />
              <Route path="Matches/statistics/:club" element={<Clubs />} />
              <Route
                path="Matches/statistics/:club/:player"
                element={<PlayerStatistic />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FootBallProvider>
    </QueryClientProvider>
  );
}

export default App;
