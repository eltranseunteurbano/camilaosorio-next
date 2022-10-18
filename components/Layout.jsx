import NavBar from "./NavBar";


export const Layout = ({ children }) => (
  <div
    css={{
      maxW: "100%",
      boxSizzing: "border-box"
    }}
  >
    <NavBar />
    {children}
  </div>
);