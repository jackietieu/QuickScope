{
  currentUser: {
    id: 0,
    username: "RickSanchez"
  },
  businesses: {
    1: {
      name: "Interplanetary Ice Cream Shop",
      profile_image_url: "imgur.com/ice-cream.jpg",
      description: "Greatest ice cream in the entire multiverse",
      avg_rating: 3,
      reviews: 1,
      tags: [1, 3] // Can be found under Food or Restaurants
    }
  },
  reviews: {
    1: {
      author_id: 1,
      user_profile_image_url: "imgur.com/person1.jpg",
      ratings: 3,
      content: "Ice cream contains flies ever since telepathic spiders took over the planet. It's alright."
    }
  },
  filters: {
    search: "Interplanetary", // Search string to match business names
    tag: 1 // Only one filter tag can be applied at a time
  }
}
