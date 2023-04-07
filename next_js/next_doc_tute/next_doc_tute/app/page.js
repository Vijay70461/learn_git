import { Inter } from "next/font/google";
import "./page.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <h1>vijay</h1>
        <div>
          <ul>
            <li>React JS</li>
            <li>Anguler JS</li>
            <li>Node JS</li>
            <li>Next JS</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
