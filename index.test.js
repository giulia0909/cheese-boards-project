const { sequelize } = require("./db");
const { User, Board, Cheese } = require("./index");

describe("User, Board and Cheese Models", () => {
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("should create a new user", async () => {
    const user = await User.create({
      name: "Elvis Presley",
      email: "elvis.presley@example.com",
    });
    expect(user.name).toBe("Elvis Presley");
    expect(user.email).toBe("elvis.presley@example.com");
  });

  test("should create a new cheese board", async () => {
    const Board1 = await Board.create({
      type: "Cheese board",
      description: "A mix of cheese and crackers",
      rating: 4.7,
    });
    expect(Board1.type).toBe("Cheese board");
    expect(Board1.description).toBe("A mix of cheese and crackers");
    expect(Board1.rating).toBe(4.7);
  });

  test("should create a new cheese", async () => {
    const cheese = await Cheese.create({
      title: "Brie",
      description: "Soft and creamy cheese from France",
    });
    expect(cheese.title).toBe("Brie");
    expect(cheese.description).toBe("Soft and creamy cheese from France");
  });
});
