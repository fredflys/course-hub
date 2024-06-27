import "./App.css";
import { useQuery } from "@apollo/client";
import userFind from "./graphql/userQuery";

function App() {
  const { loading, data } = useQuery(userFind, {
    variables: { id: "7b3a14f0-3c13-442e-9cfa-bed8b05f9276" },
  });

  return (
    <>
      <p>data: {JSON.stringify(data)}</p>
      <p>loading: {loading}</p>
    </>
  );
}

export default App;
