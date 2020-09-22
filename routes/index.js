'use strict'

const express = require('express');
const router = express.Router();
const reviewModel = require('../models/reviewDataInteractModel');
/* GET home page. */
    router.get("/", async (req, res, next) => {
        const reviewData = await reviewModel.getAll();
        console.log(reviewData);
        res.render('template', {
                locals: {
                    title: 'Restaurant Business Reviews',
                    data: reviewData,
                    is_logged_in: req.session.is_logged_in,
                },
                partials: {
                    partial: "partial-indexView",
                },
            })
        });
/* We want to load an entirely different partial for a single restaurant,
so we can add a new router.get() method, rather than going into conditional hell */
// router.get("/:slug", async function (req, res) {
//     const { slug } = req.params;
//     const data = await restaurantModel.getRestaurantBySlug(slug);
//     const reviewList = await restaurantModel.getReviewsByRestaurantId(data.id);
  
//     res.render("template", {
//       locals: {
//         title: data.name,
//         data,
//         reviewList,
//       },
//       partials: {
//         partial: "partial-single",
//       },
//     });
//   });
  
//   router.post("/", async function (req, res) {
//     const { restaurant_id, review_title, review_text } = req.body;
//     const idAsInt = parseInt(restaurant_id);
  
module.exports = router;
