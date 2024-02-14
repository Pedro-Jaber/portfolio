require("dotenv").config();
const PORT = process.env.PORT;

test("GET to /status should return 200", async () => {
  const response = await fetch(`http://localhost:${PORT}/home`);
  expect(response.status).toBe(200);
});

test("GET to /home should return 200", async () => {
  const response = await fetch(`http://localhost:${PORT}/status`);
  expect(response.status).toBe(200);
});

test("GET to /projects/beginner/bin2dec return 200", async () => {
  const response = await fetch(
    `http://localhost:${PORT}/projects/beginner/bin2dec`,
  );
  expect(response.status).toBe(200);
});
