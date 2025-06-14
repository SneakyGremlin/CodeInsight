# Endeavour

## The Main README.md

> Bear with me, please: Tests remain, "clear" remains, and finally there is the react page that ALLOWS you to visit the various pages. At present you can visit them using hardcode. Also, I have to check if docker still composes as intended.

---

> Note: In the context of this application, unless explicitly indicated otherwise, the type `number` refers to integers.

### Team (22) member:

<ul>
  <li> Ch Muhammad Daud Virk </li>
</ul>

---

At its core, Endeavour is a code comprehension application targeted towards students in their first year of university without prior programming experience. Users will be asked to give their explanation in plain English to what a provided code snippet does, then code will be generated based on their explanation which is then run against pre-written test cases for the provided code snippet to measure functional equivalence. The student will receive feedback in the form of what Ollama generates and the list of test case that they pass or fail. If the test cases pass, the student will move on to the next code sample, if they don’t then they will either

- keep working on the present problem.
- ask for a new problem.

The user's progress will be kept track of, in the form of a JSON file that mimics a Firebase (NoSQL) record.
**Note:** For the minimally viable product there needs to be only one user.

**Note:** This may be treated as a way to keep track of progress. After a MVP has been realized, this README.md will be relegated to progress tracking and a new README.md will be constructed that will adequately capture the functionality of the MVP, and thereafter if there is time, the finalized version of the project.

---

Highly desired (additional) functionality:

- Scrollable interface (expounded on later).
- A trivial login page (which may or may not enhance the application from an SPA).
- At least some of Prometheus's features (hints, and messages of encouragement).

---

## Docker Compose.

Instructions for Docker Compose.

**VERY IMPORTANT:** Depending on your IDE configuration, the `entrypoint.sh` script may automatically adopt `CRLF` line endings. This is very troublesome: the script _must_ be in `LF` for composition to properly execute. I do take precautions with .gitignore, however.

Ensure you are in the root directory i.e. where the Docker and docker-compose.yml files reside. 

The file that I use for this is called docker-compose.yml .

All that needs to be done is that you input into the terminal `docker-compose up --build` and all should be copacetic. You will find your docker image "installed," inside docker desktop, or it should be, at the very least visible to you inside the Docker extension for VS Code. The containers should be spun up, and you should be able to use the application. The image should be called `project-groups-22-lab-d-app`.

> Note: Intend to remove: issue with sync fixed (at least without docker). Only need to optimize Ollama (make sure it still works).

---

# Tests

## React

- React Components; ensure coherence of state, via console logs, and visual inspection, and state integrity.

## Ollama

- Ensure all requests are handled properly; code parsed correctly.

- ollama container build.

- docker ctrl+c / terminating the docker containers.
  ✔ Container project-groups-22-lab-d-app-1 Stopped 5.2s
  ✔ Container ollama Stopped 11.6s
