import React from "react";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";

function CreateProject() {
  const {createProjectMutation , isPending} = useCreateProject();

  async function handleCreateProject() {
    console.log("Going to Trigger the API");

    try {
        await createProjectMutation();
        console.log("Now We Should redirect to the Editor Page")
    } catch (error) {
      console.log("Error Creating Project", error);
        
    }
  }

  return (
    <div>
      <h1>Create Project</h1>
      <button onClick={handleCreateProject}>Create Project</button>
      {isPending && <p>Creating Project...</p>}
    </div>
  );
}

export default CreateProject;
