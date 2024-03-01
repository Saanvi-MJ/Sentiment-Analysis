import { Routes, Route } from "react-router-dom";

import { AxiosService } from "./libs/axios";
import { useQuery } from "@tanstack/react-query";

import NavBar from "@/components/custom/NavBar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Stats from "@/pages/Stats";
import Footer from "@/components/custom/Footer";
import Wrapper from "@/components/custom/Wrapper";

function App() {
  const { error } = useQuery({
    queryKey: ["wake"],
    queryFn: async () => await AxiosService.wakeServer(),
    refetchInterval: 1000 * 60 * 10, // 10 Minutes
  });

  if (error) return;

  return (
    <>
      <NavBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
