import styles from "./App.module.less";
import { useQuery } from "@apollo/client";
import userFind from "./graphql/userQuery";
import { Button, Form, Input } from "antd-mobile";

function App() {
  const { loading, data } = useQuery(userFind, {
    variables: { id: "7b3a14f0-3c13-442e-9cfa-bed8b05f9276" },
  });

  return (
    <>
      <p>data: {JSON.stringify(data)}</p>
      <p className={styles.container}>loading: {loading}</p>
      <Form
        layout="horizontal"
        onFinish={() => {}}
        footer={
          <Button block type="submit" color="primary" size="large">
            Submit
          </Button>
        }
      >
        <Form.Item name="name" label="name">
          <Input></Input>
        </Form.Item>
        <Form.Item name="desc" label="description">
          <Input></Input>
        </Form.Item>
      </Form>
    </>
  );
}

export default App;
