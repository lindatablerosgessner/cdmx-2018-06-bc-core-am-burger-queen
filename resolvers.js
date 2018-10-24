const bcrypt = require("bcrypt");
// este encripta la contraseña
const jwt = require("jsonwebtoken");
// crea un token para guardar la sesión

const createToken = (user, secret, expiresIn) => {
  const { username, password } = user; 
  return jwt.sign({ username, password }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getUser: () => null,
    getSideList: async (_, args, { Side }) => {
      const sides = await Side.find({}).sort({
        name: "desc"
      });
      return sides;
    },
    getExtraList: async (_, args, { Extra }) => {
      const extras = await Extra.find({}).sort({
        name: "desc"
      });
      return extras;
    },
    getDrinkList: async (_, args, { Drink }) => {
        const drinks = await Drink.find({}).sort({
          name: "desc"
        });
        return drinks;
    },
    getFoodList: async (_, args, { Food }) => {
        const foods = await Food.find({}).sort({
          name: "desc"
        });
        return foods;
    },
    getOrderList: async (_, args, { Order }) => {
        const orders = await Order.find({}).sort({ name: "desc" });
        return orders;
    }
    },
  Mutation: {
    signupUser: async (_, { username, password }, { User }) => {
      // Aca se verifica si ya existe un usuario con este nombre
        const user = await User.findOne({ username });
        if (user) {
          throw new Error("User already exists");
        }
        //  Crea un nuevo usuario y le pasa los valores de los argumentpoa recibidos
        const newUser = await new User({ username, password }).save();
        return { token: createToken(newUser, process.env.SECRET, "8hr") };
    },
    signInUser: async (_, { username, password }, { User }) => {
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error("User not found");
        }
        // Aca compara la contraseña ingresada con la almacenada en la base
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Invalid Password");
        }
        return { token: createToken(user, process.env.SECRET, "8hr") };
    },
    addSide: async(_, { name, price }, { Side }) => {
      const side = await Side.findOne({ name });
      if (side) {
        throw new Error("Side already exists")
      }
      const newSide = await new Side({ name, price}).save();
      return newSide;
    },
    addExtra: async(_, { name, price }, { Extra }) => {
      const extra = await Extra.findOne({ name });
      if (extra) {
        throw new Error("Extra already exists")
      }
      const newExtra = await new Extra({ name, price}).save();
      return newExtra;
    },
    addDrink: async (_, { name, price }, { Drink }) => {
      const drink = await Drink.findOne({ name });
      if (drink) {
        throw new Error("Drink already exists");
      }
      const newDrink = await new Drink({ name, price }).save();
      return newDrink;
    },
    addFood: async (_, { name, price, shift, content }, { Food }) => {
      const food = await Food.findOne({ name });
      if (food) {
        throw new Error("Food already exists");
      }
      const newFood = await new Food({ name, price, shift, content }).save();
      return newFood;
    },
    addOrder: async ( _, { extra, side, food, drink, total, table, client, employee }, { Order }) => {
      const newOrder = await new Order({ extra, side, food, drink, total, table, client, employee }).save();
            return newOrder;
    }
  }
};