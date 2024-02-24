// import { Toaster } from "react-hot-toast";
// import { Providers } from "@/redux/provider";
import NextTopLoader from "nextjs-toploader";
import "@/app/globals.scss";

export const metadata = {
  title: "care connect",
  description: "care connect for You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {/* <Providers> */}
        {/* <Toaster /> */}
        {children}

        {/* </Providers> */}
      </body>
    </html>
  );
}
