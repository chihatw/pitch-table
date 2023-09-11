import { ReactNode, createContext, useContext } from "react";

type PitchLineContext = {
  pitches: string[][];
  isOdaka: boolean;
  width: number;
};

export const PitchLineContext = createContext<PitchLineContext>({
  pitches: [],
  isOdaka: false,
  width: 0,
});

export const usePitchLineContext = () => {
  const context = useContext(PitchLineContext);
  if (!context)
    throw new Error("usePitchLineContext must use within PitchLineContext");
  return context;
};

const PitchLineContextProvider = ({
  children,
  pitches,
  isOdaka,
  width,
}: {
  children: ReactNode;
  pitches: string[][];
  isOdaka: boolean;
  width: number;
}) => {
  return (
    <PitchLineContext.Provider value={{ pitches, isOdaka, width }}>
      {children}
    </PitchLineContext.Provider>
  );
};

export default PitchLineContextProvider;
