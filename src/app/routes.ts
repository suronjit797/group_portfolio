import express from "express";
import userRouter from "./modules/user/user.routes";
import upload from "../helper/uploads";
// import uploadToBunny from "./middleware/uploadToBunny";
import { auth } from "./middleware/auth";
import blogRouter from "./modules/blog/blog.routes";
import workRouter from "./modules/work/work.routes";
import teamRouter from "./modules/team/team.routes";
import contactRouter from "./modules/contact/contact.routes";

const router = express.Router();

const moduleRoute = [
  { path: "/users", routes: userRouter },
  { path: "/blogs", routes: blogRouter, auth: true },
  { path: "/works", routes: workRouter, auth: true },
  { path: "/teams", routes: teamRouter, auth: true },
  { path: "/contact", routes: contactRouter, auth: true },
];

moduleRoute.forEach((route) =>
  route?.auth ? router.use(route.path, auth(), route.routes) : router.use(route.path, route.routes)
);

// upload
// router.post("/upload", auth(), upload.single("photos"), uploadToBunny);
router.post("/upload", upload.single("photos"), (req, res, next) => {
  res.send({
    success: true,
    message: "File uploaded successfully",
    data: {
      uri: "/uploads/images/" + req.file?.filename,
    },
  });
  console.log(req.file);
});

export default router;
