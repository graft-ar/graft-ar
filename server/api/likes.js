const router = require("express").Router();
const { User, Art } = require("../database");

router.put("/", async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const currentArt = await Art.findById(req.body.artId);
    const dislikedArt = await currentArt.removeLikedBy(currentUser, {
      through: "likes"
    });
    res.status(201).json(dislikedArt);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const currentArt = await Art.findById(req.body.artId);
    const likedArt = await currentArt.addLikedBy(currentUser, {
      through: "likes"
    });
    res.status(201).json(currentUser);
  } catch (err) {
    next(err);
  }
});

// // get all users who liked this art
router.get("/", async (req, res, next) => {
  try {
    const currentArt = await Art.findAll({
      attributes: ["id", "title"],
      include: [
        {
          model: User,
          as: "likedBy",
          attributes: ["id"]
        }
      ]
    });
    res.json(currentArt);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
