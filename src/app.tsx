import { Container } from "./app.styled";
import { Sidebar } from "./components/sidebar";
import { GlobalStyles } from "./constants";
import { TablesDataProvider } from "./providers/TablesDataProvider";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <TablesDataProvider>
        <Container>
          <Sidebar />
          <div />
          {/* ReactFlow */}
        </Container>
      </TablesDataProvider>
    </>
  );
};
