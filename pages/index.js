import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { TokenValidation } from "@/components/TokenValidation";

export default function app() {
  return (
    <TokenValidation>
      <Header />
      <Home />
    </TokenValidation>
  );
}
