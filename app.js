import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabse from "./database/mongodb.js";
 
const app = express();

app.use('/api/v1/auth', authRouter);
// /api/v1/auth

app.use('/api/v1/users', userRouter);
// /api/v1/users

app.use('/api/v1/subscriptions', subscriptionRouter);
// /api/v1/subscriptions

app.get('/', (req, res)=> {
    res.send('<h1>Welcome to the subscription tracker API</h1>');
});

app.listen(PORT, async ()=> {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
    await connectToDatabse();
});

export default app;