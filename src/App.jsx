import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";
import EmailList from "./components/EmailList";

function App() {
  const [openEmail, setOpenEmail] = useState(null);

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <Sidebar />
          <EmailList SetOpenEmail={setOpenEmail} />
          {JSON.stringify(openEmail)}
          <Bottombar />
        </div>
      </Container>
    </>
  );
}

export default App;
