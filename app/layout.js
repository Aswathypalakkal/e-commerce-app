import ReduxProvider from "../redux/ReduxProvider";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Next E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
