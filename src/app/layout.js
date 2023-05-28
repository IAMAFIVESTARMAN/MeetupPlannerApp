import Layout from "../../components/layout/Layout";

// export const metadata = {
//   title: "Next.js Walkthrough but no",
// };

export const metadata = {
  title: "Next.js Walkthrough but no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

// export default function DashboardLayout({ children }) {
//   return <Layout>{children}</Layout>;
// }
