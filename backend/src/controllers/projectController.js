import util from "util";
import child_process, { exec } from "child_process";
import fs from "fs/promises";
import uuid4 from "uuid4";

const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async (req, res) => {
  //   const { stdout, stderr } = await execPromisified("pwd");
  //   console.log("stdout", stdout);
  //   console.log("stderr", stderr);

  // Create a unique if and then inside the project folder create a new folder with the project id

  const projectId = uuid4();
  console.log("New project id", projectId);

  await fs.mkdir(`projects/${projectId}`);

  // After this call the npm create vite command in the newly created  project folder

  const response = await execPromisified(
    "npm create vite@latest sandbox -- --template react",
    {
      cwd: `projects/${projectId}`,
    }
  );

  return res.json({ message: "Project Created", data: projectId });
};
