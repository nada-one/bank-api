const app = require("../server");
const Record = require("../models/record");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeEach(async () => {
  await mongoose.connect("mongodb+srv://admin_10:admin_10@cluster0.nzoac.mongodb.net/bank-api?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });
});

afterEach(async () => {
    await mongoose.connection.close()
    await app.close()
});

test("GET /records", async () => {
  await supertest(app).get("/records")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(Array.isArray(response.body)).toBeTruthy();
    });
});

test("GET /records limit", async () => {
    await supertest(app).get("/records?limit=1")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBe(1);
      });
  });

  test("POST /records", async () => {
    const rec = {account_type: "Savings", balance: 2000, first_name: "Lily", last_name: "Collins"}
    await supertest(app).post("/records").send(rec)
      .expect(201)
      .then((response) => {
        // Check type and length
        expect(response.body.id).toBeTruthy();
      });
  });  

  test("PUT /records/{id}", async () => {
    const rec = await Record.create({account_type: "Savings", balance: 2000, first_name: "Lily", last_name: "Collins"});
    await supertest(app).put(`/records/${rec._id}`).send({})
    .expect(200);
  }); 

  test("DELETE /records/{id}", async () => {
    const rec = await Record.create({account_type: "Savings", balance: 2000, first_name: "Lily", last_name: "Collins"});
    await supertest(app).delete(`/records/${rec._id}`)
    .expect(200);
  });   