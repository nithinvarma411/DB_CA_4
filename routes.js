import { Router } from "express";
import { User } from "./user.model.js";
import { Book } from "./book.model.js";

const router = Router();

router.route("/users").post(async (req, res) => {
    const newUser = await User.create(req.body);

    if (newUser) {
        return res.status(200).send({"message": "user created successfully"})
    }

    return res.status(404).send({"message": "error creating user"});
})

router.route("/books").post(async (req, res) => {
    const newBook = await Book.create(req.body);

    if (newBook) {
        return res.status(200).send({"message": "book created successfully"});
    }

    return res.status(404).send({"message": "error creating book"});
})

router.route("/books/:userId").get(async (req, res) => {
    const booksData = await Book.find({userId: req.params.userId})

    if (!booksData) {
        return res.status(400).send({"message": "error fetching books"});
    }

    return res.status(200).send({"message": "book fetched successfully"});
})

export default router;