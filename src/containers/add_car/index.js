import React from "react";
import { Form, Input, Button, Space, Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Layout from "../../components/Layout";
import "antd/dist/antd.css";
import "../../App.css";
import { Container } from "react-bootstrap";

class AddCar extends React.Component {

constructor(props){
  super(props)

   this.state = {
     car_name:null,
     car_img :null,
     specifications : [],
     specdtl :null
   }

}
loginSubmit=(e)=>{
  alert()
}




  render() {
    return (
      <Layout>
        <Container style={{ marginTop: "50px" }}>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 12, offset: 5 }}>

              <Form name="dynamic_form_nest_item" onSubmit={(e) => {alert()}} >


                <Form.Item label="Car Name">
                  <Input
                    placeholder="Car Name"
                    onChange = {e=>{this.setState({car_name:e.target.value})}}
                    style={{ marginBottom: "20px", width: "95%" }}
                    required
                  />
                </Form.Item>



                <Form.Item label="Car Image">
                  <Input
                    type="file"
                    style={{ marginBottom: "20px", width: "95%" }}
                    
                  />
                </Form.Item>




                <Form.Item label="spec__ file">
                  <Input
                    type="file"
                    onChange = {e=>{this.setState({car_img:e.target.files})}}
                    style={{ marginBottom: "20px", width: "95%" }}
                    
                  />
                </Form.Item>


                <Form.List name="users">
                  {(fields, { add, remove }) => {
                    return (
                      <div>
                        {fields.map((field) => (
                          <Space
                            key={field.key}
                            style={{ display: "flex", marginBottom: 8 }}
                            align="start"
                          >
                            <Form.Item
                              label="Icon"
                              {...field}
                              name={[field.name, "first"]}
                              fieldKey={[field.fieldKey, "first"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing first name",
                                },
                              ]}
                            >
                              <Input placeholder="First Name" type="file" />
                            </Form.Item>
                            <Form.Item
                              {...field}
                              label="Specification"
                              name={[field.name, "last"]}
                              fieldKey={[field.fieldKey, "last"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing last name",
                                },
                              ]}
                            >
                              <Input placeholder="Specification" />
                            </Form.Item>

                            <MinusCircleOutlined
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          </Space>
                        ))}

                        <Form.Item>
                          <Button
                            className="form-controll"
                            type="dashed"
                            onClick={() => {
                              add();
                            }}
                            style={{ marginBottom: "20px", width: "95%" }}
                          >
                            <PlusOutlined /> Add Specification
                          </Button>
                        </Form.Item>
                      </div>
                    );
                  }}
                </Form.List>

                <Form.Item>
                  <Input type="submit" value="submit"    style={{ marginBottom: "20px", width: "95%" }}/>
                  
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default AddCar;
