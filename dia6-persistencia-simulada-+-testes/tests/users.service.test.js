const test = require("node:test");
const assert = require("node:assert");

const { createUserService } = require("../src/services/users.service");

test("Deve criar um novo usuário", () => {
    const user = createUserService({ name: "Maria", age: 32 });

    assert.strictEqual(user.name, "Maria");
    assert.strictEqual(user.age, 32);
    assert.strictEqual(user.active, true);
})
