const express = require('express');

const router = express.Router();
const prisma = require ("../client");


// GET api/cart --> gets the current cart for the user (Need a token)
// POST api/cart/ --> Add product to cart
// PUT api/cart/:id --> Add product to cart
// DELETE api/cart/:id --> Delete item from cart


// ROUTE: api/cart --> gets the current cart for the user (Need a token)
router.get('/', async (req, res, next) => {
  if (!req.user) {
    res.status(401).send("You're a guest, but please keep on shopping. Feel free to register!")
    return;
    //get guest cart from local storage
    //logic in front end?
    //TBD
  }

  //This is a logged-in user. 
  //see if they have an active cart (aka orderDetail) =>
    // is there an orderDetail with their id & a 'false' for is complete?
    // If not make a new cart that will be false.
  try {
    const userCart = await prisma.orderDetail.findUnique({
      where: {
        userId:+req.user.id,
      },
      select: {
        isComplete:false,
      },
  })

  if (userCart) { 
    return res.send(userCart);
  };
  
  // If no active cart, create a new one
  
    // router.post await prisma.orderDetail.create({
      const newCart = await prisma.orderDetail.create({
      data:{
        isComplete:false,
        userId:+req.user.id,
      }
    });

  return res.send(newCart);
  

  } catch (error) {
    console.error(error)
    next(error);
  } 

});


// PUT api/cart/:id --> Add product to cart
//look got userID


// router.get('/', async (req, res, next) =>

// ROUTE: api/cart




module.exports = router;

