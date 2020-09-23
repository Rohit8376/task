import React from "react";
import { Container, Table } from "react-bootstrap";
import Layout from "../../components/Layout";
import axios from "axios";
// import { ExcelRenderer, OutTable } from "react-excel-renderer"

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = { specification: [] };
  }

  fileHandler = (fileObj) => {
    const tempdata = fileObj.map((data) => {
      return {
        spec: data["Feature List / Models"],
        value:
          data["C 220d Progressive"] !== undefined
            ? data["C 220d Progressive"]
            : "Na",
      };
    });

    this.setState({ specification: tempdata });
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:2000/getfile/Mercedes.xlsx");

    this.fileHandler(res.data);
  }

  
  render() {
    return (
      <>
        <Layout>
          <Container>
            <br />

            <h1>Mercedes-Benz c220d</h1>
            <img
              src="https://cdn.bigboytoyz.com/products/resized/61FA25EA-450B-4B1D-BA46-6CB3C7427336.jpeg"
              style={{ width: "600px", height: "300px" }}
              alt=""
            />
            <br />
            <br />

            <h1>Genric Specification </h1>
            <br></br>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>specification</td>
                  <td>values</td>
                </tr>
              </thead>
              <tbody>
                {this.state.specification.map((res, index) => (
                  <tr key={index}>
                    <td>{res.spec}</td>
                    <td>{res.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Layout>
      </>
    );
  }
}
export default Signin;
