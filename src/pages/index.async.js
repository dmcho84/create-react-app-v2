import withSplitting from "../lib/withSplitting";

export const HomePage = withSplitting(() => import("./HomePage"));
export const AboutPage = withSplitting(() => import("./AboutPage"));
export const GamePage = withSplitting(() => import("./GamePage"));

export const NoMatch = withSplitting(() => import("./NoMatch"));
