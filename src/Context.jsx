import { createContext, useReducer } from "react";

const FootballContext = createContext();
const initialState = {
  curPage: 10,
  stats: [],
  page: 31,
  statistics: {},
  club: "",
  pages: 38,
  week: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "set/week":
      return {
        ...state,
        week: action.paylaod,
      };

    case "set/pages":
      return {
        ...state,
        pages: action.payload,
      };
    case "prev/curPage":
      return {
        ...state,
        curPage:
          state.curPage !== action.payload
            ? state.curPage + 10
            : action.payload,
        page: state.page !== state.pages ? state.curPage / 10 : state.pages,
      };
    case "next/curPage":
      return {
        ...state,
        curPage: state.curPage !== 10 ? state.curPage - 10 : state.curPage,
        page: state.page !== 1 ? state.curPage / 10 : 1,
      };
    case "reset/curPage":
      return {
        ...state,
        curPage: 10,
        page: 1,
      };
    case "set/page":
      return {
        ...state,
        stats: action.payload,
      };
    case "set/stats":
      return {
        ...state,
        statistics: action.payload,
      };
    case "set/club":
      return {
        ...state,
        club: action.payload,
      };

    default:
      throw new Error("Something went wrong...");
  }
}

function FootBallProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FootballContext.Provider value={{ state, dispatch }}>
      {children}
    </FootballContext.Provider>
  );
}

export { FootBallProvider, FootballContext };
