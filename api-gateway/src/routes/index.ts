/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from "./Users";

// User-route
const userRouter = Router();
userRouter.get("/user/all", getAllUsers);
userRouter.post("/user/add", addOneUser);
userRouter.put("/user/update/:id", updateOneUser);
userRouter.delete("/delete/:id", deleteOneUser);

// Media-route
const mediaRoute = Router();
mediaRoute.get("/all", getAllUsers);
mediaRoute.post("/add", addOneUser);
mediaRoute.put("/update/:id", updateOneUser);
mediaRoute.delete("/delete/:id", deleteOneUser);

// Course-route
const coursesRoute = Router();
coursesRoute.get("/all", getAllUsers);
coursesRoute.post("/add", addOneUser);
coursesRoute.put("/update/:id", updateOneUser);
coursesRoute.delete("/delete/:id", deleteOneUser);

// Payment-route
const paymentRoute = Router();
paymentRoute.get("/all", getAllUsers);
paymentRoute.post("/add", addOneUser);
paymentRoute.put("/update/:id", updateOneUser);
paymentRoute.delete("/delete/:id", deleteOneUser);

// Payment-route
const orderRoute = Router();
orderRoute.get("/all", getAllUsers);
orderRoute.post("/add", addOneUser);
orderRoute.put("/update/:id", updateOneUser);
orderRoute.delete("/delete/:id", deleteOneUser);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/users", userRouter);
baseRouter.use("/media", mediaRoute);
baseRouter.use("/courses", coursesRoute);
baseRouter.use("/payment", mediaRoute);

export default baseRouter;
