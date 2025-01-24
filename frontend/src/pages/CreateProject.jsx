import React from "react";
import { Button, Col, Flex, Row } from "antd";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";

function CreateProject() {
  const { createProjectMutation, isPending } = useCreateProject();

  async function handleCreateProject() {
    console.log("Going to Trigger the API");

    try {
      await createProjectMutation();
      console.log("Now We Should redirect to the Editor Page");
    } catch (error) {
      console.log("Error Creating Project", error);
    }
  }

  return (
    <Row>
      <Col span={24}>
        <Flex justify="center" align="center">
          <Button type="primary" onClick={handleCreateProject}>
            Create PlayGround
          </Button>
        </Flex>
      </Col>
    </Row>
  );
}

export default CreateProject;
