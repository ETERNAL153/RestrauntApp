
const orders = [
    {
      orderId: 5331,
      customerName: "Ram",
      deliveryAddress: "123 indiera",
      dateOrdered: "2024-09-21T20:15:26.786Z",
      restaurantName: "KFC",
      itemsOrdered: [
        {
          name: "Chicken Roast",
          quantity: 1,
          price: 120,
        },
        {
          name: "Chicken Do Pyaza",
          quantity: 1,
          price: 140,
        },
        {
          name: "Chicken Masala",
          quantity: 1,
          price: 120,
        },
      ],
      totalPrice: 380,
      orderStatus: "Placed",
    },
    {
      orderId: 5332,
      customerName: "Ram",
      deliveryAddress: "123 indiera",
      dateOrdered: "2024-09-21T20:15:26.786Z",
      restaurantName: "Pizza Hut",
      itemsOrdered: [
        {
          name: "Ambur Biryani",
          quantity: 1,
          price: 150,
        },
        {
          name: "Hyderabadi Biryani",
          quantity: 1,
          price: 160,
        },
        {
          name: "Egg Biryani",
          quantity: 1,
          price: 120,
        },
      ],
      totalPrice: 430,
      orderStatus: "Placed",
    },
    {
      orderId: 5333,
      customerName: "Ram",
      deliveryAddress: "123 indiera",
      dateOrdered: "2024-09-21T20:15:26.786Z",
      restaurantName: "Pizza Hut",
      itemsOrdered: [
        {
          name: "Mutton Biryani",
          quantity: 1,
          price: 400,
        },
        {
          name: "Memoni Biryani",
          quantity: 1,
          price: 200,
        },
        {
          name: "Mughlai Biryani",
          quantity: 1,
          price: 290,
        },
      ],
      totalPrice: 890,
      orderStatus: "Placed",
    },
    {
      orderId: 5334,
      customerName: "Ram",
      deliveryAddress: "123 indiera",
      dateOrdered: "2024-09-21T20:15:26.786Z",
      restaurantName: "Pizza Hut",
      itemsOrdered: [
        {
          name: "Chicken Curry",
          quantity: 1,
          price: 100,
        },
        {
          name: "Chicken Do Pyaza",
          quantity: 1,
          price: 140,
        },
        {
          name: "Chicken Masala",
          quantity: 1,
          price: 120,
        },
      ],
      totalPrice: 360,
      orderStatus: "Placed",
    },
    {
      orderId: 5335,
      customerName: "Ram",
      deliveryAddress: "123 indiera",
      dateOrdered: "2024-09-21T20:15:26.786Z",
      restaurantName: "Pizza Hut",
      itemsOrdered: [
        {
          name: "Matar Paneer",
          quantity: 1,
          price: 350,
        },
        {
          name: "Palak Paneer",
          quantity: 1,
          price: 200,
        },
        {
          name: "Paneer Butter Masala",
          quantity: 1,
          price: 150,
        },
      ],
      totalPrice: 700,
      orderStatus: "Placed",
    },
    {
      orderId: 5336,
      customerName: "Ram",
      deliveryAddress: "123 indiera",
      dateOrdered: "2024-09-21T20:15:26.786Z",
      restaurantName: "Pizza Hut",
      itemsOrdered: [
        {
          name: "Hyderabadi Paneer",
          quantity: 1,
          price: 250,
        },
        {
          name: "Paneer Lababdar",
          quantity: 1,
          price: 270,
        },
        {
          name: "Shahi Paneer",
          quantity: 1,
          price: 260,
        },
      ],
      totalPrice: 780,
      orderStatus: "Placed",
    },
    {
      orderId: 5337,
      customerName: "Ram",
      deliveryAddress: "123 indiera",
      dateOrdered: "2024-09-21T20:15:26.786Z",
      restaurantName: "Pizza Hut",
      itemsOrdered: [
        {
          name: "Navratan Korma",
          quantity: 1,
          price: 350,
        },
        {
          name: "Veg Biryani",
          quantity: 1,
          price: 130,
        },
        {
          name: "Veg Curry",
          quantity: 1,
          price: 100,
        },
      ],
      totalPrice: 580,
      orderStatus: "Placed",
    },
    {
      orderId: 5338,
      customerName: "Ram",
      deliveryAddress: "123 indiera",
      dateOrdered: "2024-09-21T20:15:26.786Z",
      restaurantName: "Pizza Hut",
      itemsOrdered: [
        {
          name: "Veg Masala",
          quantity: 1,
          price: 90,
        },
        {
          name: "Veg Pakora",
          quantity: 1,
          price: 80,
        },
        {
          name: "Momos",
          quantity: 1,
          price: 80,
        },
      ],
      totalPrice: 250,
      orderStatus: "Placed",
    }]
const restaurants = [
    {
        "name": "Burger King",
        "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=600&h=-1&s=1",
        "address": "123 Main St",
        "phone": "555-555-5555",
        "email": "bk@example.com",
        "rating": 4.5,
        "itemsAvailables": [
            {
                id: 1,
                name: 'Ambur Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 150,
                img: 'https://w7.pngwing.com/pngs/917/228/png-transparent-biryani-indian-cuisine-biryani-buffet-take-out-kebab-biryani-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 2,
                name: 'Hyderabadi Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 160,
                img: 'https://e7.pngegg.com/pngimages/972/654/png-clipart-chicken-with-rice-kabsa-hyderabadi-biryani-thai-cuisine-pilaf-fried-chicken-soup-food.png',
                quantity: 1
            },
            {
                id: 4,
                name: 'Goan Fish Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 140,
                img: 'https://www.us2guntur.com/images//10071img/fbfriendcircle_B_020920.jpg',
                quantity: 1
            },
            {
                id: 5,
                name: 'Mutton Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 400,
                img: 'https://w7.pngwing.com/pngs/230/838/png-transparent-hyderabadi-biryani-indian-cuisine-hyderabadi-cuisine-barbecue-barbecue-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 7,
                name: 'Kashmiri Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 130,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTjepgWFWiHKb_WV7VidJ9K6pb3p1lOkLDBCBN-XXfudXUoRdkOqqeez9taMDnZuXM20&usqp=CAU',
                quantity: 1
            },
            {
                id: 8,
                name: 'Memoni Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 200,
                img: 'https://www.mistay.in/travel-blog/content/images/2020/05/memoni-mutton-biryani_14634.jpg',
                quantity: 1
            },
            {
                id: 9,
                name: 'Mughlai Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 290,
                img: 'https://static.wixstatic.com/media/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg',
                quantity: 1
            },
            {
                id: 10,
                name: 'Chicken Roast',
                category : 'chicken',
                rating : 4.3,
                price: 120,
                img: 'https://e7.pngegg.com/pngimages/300/150/png-clipart-fried-chicken-roasted-chicken-food-chicken-thumbnail.png',
                quantity: 1
            },
            {
                id: 12,
                name: 'Chicken Do Pyaza',
                category : 'chicken',
                rating : 4.3,
                price: 140,
                img: 'https://www.seekpng.com/png/detail/270-2703209_chicken-curry.png',
                quantity: 1
            },
            {
                id: 13,
                name: 'Chicken Masala',
                category : 'chicken',
                rating : 4.3,
                price: 120,
                img: 'https://static.toiimg.com/thumb/94794110.cms?width=400&height=300&resizemode=4&imgsize=96406',
                quantity: 1
            },
            {
                id: 15,
                name: 'Murgh Musallam',
                category : 'chicken',
                rating : 4.3,
                price: 500,
                img: 'https://img.favpng.com/0/3/11/chicken-karahi-naan-saag-tikka-png-favpng-HhrJMva4r4Ew9t0gBYkn9RSNm.jpg',
                quantity: 1
            },
            {
                id: 16,
                name: 'Matar Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 350,
                img: 'https://png.pngtree.com/png-clipart/20230518/ourmid/pngtree-kadai-paneer-curry-png-image_7101714.png',
                quantity: 1
            
            },
            {
                id: 17,
                name: 'Palak Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 200,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7L8Y2a6sbUdrQw4VtDlw6DIg8ni_V9zJhIIZQ_PBp8IBlS828vbZzCYR9dtSROWjR-8&usqp=CAU',
                quantity: 1
            },
            {
                id: 18,
                name: 'Paneer Butter Masala',
                category : 'paneer',
                rating : 4.3,
                price: 150,
                img: 'https://img1.wsimg.com/isteam/ip/53198215-02ca-4f20-a741-5e559a19f796/Tandoor%20Paneer%20tikka.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true',
                quantity: 1
            
            },
            {
                id: 20,
                name: 'Hyderabadi Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 250,
                img: 'https://w7.pngwing.com/pngs/633/993/png-transparent-mattar-paneer-indian-cuisine-paneer-tikka-masala-shahi-paneer-karahi-non-veg-food-food-recipe-tomato-thumbnail.png',
                quantity: 1
            },
            {
                id: 21,
                name: 'Paneer Lababdar',
                category : 'paneer',
                rating : 4.3,
                price: 270,
                img: 'https://previews.123rf.com/images/rickysoni/rickysoni1806/rickysoni180600443/102577631-indian-healthy-cuisine-palak-paneer-made-up-of-spinach-and-cottage-cheese-isolated-on-white.jpg',
                quantity: 1
            },
            {
                id: 22,
                name: 'Shahi Paneer',
                age: '32',
                category : 'paneer',
                rating : 4.3,
                price: 260,
                img: 'https://e7.pngegg.com/pngimages/734/796/png-clipart-dish-with-sauce-on-plate-shahi-paneer-indian-cuisine-karahi-korma-vegetarian-cuisine-samosa-cream-food.png',
                quantity: 1
            },
            {
                id: 23,
                name: 'Navratan Korma',
                category : 'vegetable',
                rating : 4.3,
                price: 350,
                img: 'https://e7.pngegg.com/pngimages/987/643/png-clipart-cooked-noodles-with-green-mint-on-platter-hyderabadi-biryani-naan-butter-chicken-chicken-tikka-masala-biryani-food-recipe.png',
                quantity: 1
            },
            {
                id: 25,
                name: 'Veg Biryani',
                category : 'vegetable',
                rating : 4.3,
                price: 130,
                img: 'https://thebellyrulesthemind.net/wp-content/uploads/2020/01/navratan-korma_-vegetable-korma-3.png',
                quantity: 1
            },
            {
                id: 26,
                name: 'Veg Curry',
                category : 'vegetable',
                rating : 4.3,
                price: 100,
                img: 'https://p.kindpng.com/picc/s/732-7327263_yellow-curry-hd-png-download.png',
                quantity: 1
            },
            {
                id: 27,
                name: 'Veg Kolhapur',
                category : 'vegetable',
                rating : 4.3,
                price: 150,
                img: 'https://img.freepik.com/premium-photo/mix-vegetable-curry-indian-main-course-recipe-contains-carrots-cauliflower-green-peas-beans-baby-corn-capsicum-paneer-cottage-cheese-with-traditional-masala-curry_466689-35432.jpg',
                quantity: 1
            },
            {
                id: 29,
                name: 'Veg Pakora',
                category : 'vegetable',
                rating : 4.3,
                price: 80,
                img: 'https://p1.hiclipart.com/preview/401/929/156/indian-food-indian-cuisine-roti-paratha-vegetarian-cuisine-recipe-chapati-curry-png-clipart.jpg',
                quantity: 1
            },
            {
                id: 30,
                name: 'Momos',
                category : 'chinese',
                rating : 4.3,
                price: 80,
                img: 'https://e7.pngegg.com/pngimages/788/786/png-clipart-orange-spaghetti-chinese-noodles-vegetarian-cuisine-food-australian-food-food-recipe-thumbnail.png',
                quantity: 1
            },
            {
                id: 31,
                name: 'Chicken Manchurian',
                category : 'chinese',
                rating : 4.3,
                price: 90,
                img: 'https://p.kindpng.com/picc/s/191-1914728_15-chinese-food-png-for-free-download-on.png',
                quantity: 1
            },
            {
                id: 33,
                name: 'Chowmein',
                category : 'chinese',
                rating : 4.3,
                price: 160,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiRMZw3YzY-xFGu5OtmNGFvCKpm2R2P1Ig2hcrG1pUA&s',
                quantity: 1
            },
            {
                id: 34,
                name: 'Spring Roll',
                category : 'chinese',
                rating : 4.3,
                price: 140,
                img: 'https://www.seriouseats.com/thmb/rzNjTG9gMj4Dl5t6quw_IeFlmhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__08__20160811-fast-food-recipes-roundup-07-f0cefd1607e14522a7c6e1586c414a67.jpg',
                quantity: 1
            },
            {
                id: 36,
                name: 'Fried Rice',
                category : 'chinese',
                rating : 4.3,
                price: 110,
                img: 'https://www.aheadofthyme.com/wp-content/uploads/2021/02/general-tsos-chicken-3.jpg',
                quantity: 1
            },
            {
                id: 38,
                name: 'Idli',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/334/621/png-transparent-breakfast-idli-tiffin-food-vegetarian-cuisine-idly-recipe-fruit-ice-cream.png',
                quantity: 1
            },
            {
                id: 39,
                name: 'Masala Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 120,
                img: 'https://banner2.cleanpng.com/20190609/kpt/kisspng-masala-dosa-indian-cuisine-food-dosa-png-vector-clipart-psd-peoplepng-com-5cfda415dfd947.7580192415601264859169.jpg',
                quantity: 1
            },
            {
                id: 40,
                name: 'Mysore Bonda',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/431/796/png-transparent-bonda-south-indian-cuisine-tiffin-others-food-fruit-desktop-wallpaper.png',
                quantity: 1
            },
            {
                id: 41,
                name: 'Onion Uttapam',
                category : 'south-indian',
                rating : 4.3,
                price: 80,
                img: 'https://www.shutterstock.com/image-photo/south-indian-food-uttapam-ooththappam-260nw-487469653.jpg',
                quantity: 1
            },
            {
                id: 42,
                name: 'Plain Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 50,
                img: 'https://thumbs.dreamstime.com/b/south-indian-tasty-plain-dosa-coconut-chutney-chilly-banana-leaf-plate-224858230.jpg',
                quantity: 1
            },
            {
                id: 43,
                name: 'Rava Uttapam',
                category : 'south-indian',
                rating : 4.3,
                price: 60,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo80bCu1BEnWu3jRBXymOZiKQ_1FV8599J10RcTiYuvWBv8KAj2tKI9aRcMs6RAlZnzws&usqp=CAU',
                quantity: 1
            },
            {
                id: 44,
                name: 'Sambhar Vada',
                category : 'south-indian',
                rating : 4.3,
                price: 60,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjolRODANcnyxJF4HFQFxa1VNEDiYlaaC14WJKOfVmnCDQXZbxbFi4c9d9SPpStpCGKjQ&usqp=CAU',
                quantity: 1
            }
        ]
    },
    {
        "name": "McDonald's",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fzJ8gy5HWn7_XyJQA7LZGzHF87nj9yLzQw&s",
        "address": "456 Elm St",
        "phone": "555-123-4567",
        "email": "mcd@example.com",
        "rating": 4.2,
        "itemsAvailables": [
            {
                id: 1,
                name: 'Ambur Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 150,
                img: 'https://w7.pngwing.com/pngs/917/228/png-transparent-biryani-indian-cuisine-biryani-buffet-take-out-kebab-biryani-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 2,
                name: 'Hyderabadi Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 160,
                img: 'https://e7.pngegg.com/pngimages/972/654/png-clipart-chicken-with-rice-kabsa-hyderabadi-biryani-thai-cuisine-pilaf-fried-chicken-soup-food.png',
                quantity: 1
            },
            {
                id: 3,
                name: 'Egg Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 120,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ_llc5v30rT4oEb8Wa8JJ5yxH1A9Pq3KHcaIuTMhp5rF5lhxJzqwgZFZIDKYh_W_2QU&usqp=CAU',
                quantity: 1
            },
            {
                id: 4,
                name: 'Goan Fish Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 140,
                img: 'https://www.us2guntur.com/images//10071img/fbfriendcircle_B_020920.jpg',
                quantity: 1
            },
            {
                id: 5,
                name: 'Mutton Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 400,
                img: 'https://w7.pngwing.com/pngs/230/838/png-transparent-hyderabadi-biryani-indian-cuisine-hyderabadi-cuisine-barbecue-barbecue-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 6,
                name: 'Kamrupi Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 120,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNraLAXFFPBRJKEeuXogLSFkZsKsKw0VGSTbS8Sa_SbcVgQTGh4oPvzKOACic3_TnP5RE&usqp=CAU',
                quantity: 1
            },
            {
                id: 7,
                name: 'Kashmiri Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 130,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTjepgWFWiHKb_WV7VidJ9K6pb3p1lOkLDBCBN-XXfudXUoRdkOqqeez9taMDnZuXM20&usqp=CAU',
                quantity: 1
            },
            {
                id: 9,
                name: 'Mughlai Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 290,
                img: 'https://static.wixstatic.com/media/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg',
                quantity: 1
            },
            {
                id: 10,
                name: 'Chicken Roast',
                category : 'chicken',
                rating : 4.3,
                price: 120,
                img: 'https://e7.pngegg.com/pngimages/300/150/png-clipart-fried-chicken-roasted-chicken-food-chicken-thumbnail.png',
                quantity: 1
            },
            {
                id: 11,
                name: 'Chicken Curry',
                category : 'chicken',
                rating : 4.3,
                price: 100,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2t9CWjX5fKCF3VFgzgr2I1yMq0WPcpT3mTUW92siD5zkfV3dbnF05GSMJLcwVQKQyad8&usqp=CAU',
                quantity: 1
            },
            {
                id: 12,
                name: 'Chicken Do Pyaza',
                category : 'chicken',
                rating : 4.3,
                price: 140,
                img: 'https://www.seekpng.com/png/detail/270-2703209_chicken-curry.png',
                quantity: 1
            },
            {
                id: 13,
                name: 'Chicken Masala',
                category : 'chicken',
                rating : 4.3,
                price: 120,
                img: 'https://static.toiimg.com/thumb/94794110.cms?width=400&height=300&resizemode=4&imgsize=96406',
                quantity: 1
            },
            {
                id: 15,
                name: 'Murgh Musallam',
                category : 'chicken',
                rating : 4.3,
                price: 500,
                img: 'https://img.favpng.com/0/3/11/chicken-karahi-naan-saag-tikka-png-favpng-HhrJMva4r4Ew9t0gBYkn9RSNm.jpg',
                quantity: 1
            },
            {
                id: 16,
                name: 'Matar Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 350,
                img: 'https://png.pngtree.com/png-clipart/20230518/ourmid/pngtree-kadai-paneer-curry-png-image_7101714.png',
                quantity: 1
            
            },
            {
                id: 18,
                name: 'Paneer Butter Masala',
                category : 'paneer',
                rating : 4.3,
                price: 150,
                img: 'https://img1.wsimg.com/isteam/ip/53198215-02ca-4f20-a741-5e559a19f796/Tandoor%20Paneer%20tikka.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true',
                quantity: 1
            
            },
            {
                id: 20,
                name: 'Hyderabadi Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 250,
                img: 'https://w7.pngwing.com/pngs/633/993/png-transparent-mattar-paneer-indian-cuisine-paneer-tikka-masala-shahi-paneer-karahi-non-veg-food-food-recipe-tomato-thumbnail.png',
                quantity: 1
            },
            {
                id: 21,
                name: 'Paneer Lababdar',
                category : 'paneer',
                rating : 4.3,
                price: 270,
                img: 'https://previews.123rf.com/images/rickysoni/rickysoni1806/rickysoni180600443/102577631-indian-healthy-cuisine-palak-paneer-made-up-of-spinach-and-cottage-cheese-isolated-on-white.jpg',
                quantity: 1
            },
            {
                id: 23,
                name: 'Navratan Korma',
                category : 'vegetable',
                rating : 4.3,
                price: 350,
                img: 'https://e7.pngegg.com/pngimages/987/643/png-clipart-cooked-noodles-with-green-mint-on-platter-hyderabadi-biryani-naan-butter-chicken-chicken-tikka-masala-biryani-food-recipe.png',
                quantity: 1
            },
            {
                id: 25,
                name: 'Veg Biryani',
                category : 'vegetable',
                rating : 4.3,
                price: 130,
                img: 'https://thebellyrulesthemind.net/wp-content/uploads/2020/01/navratan-korma_-vegetable-korma-3.png',
                quantity: 1
            },
            {
                id: 26,
                name: 'Veg Curry',
                category : 'vegetable',
                rating : 4.3,
                price: 100,
                img: 'https://p.kindpng.com/picc/s/732-7327263_yellow-curry-hd-png-download.png',
                quantity: 1
            },
            {
                id: 27,
                name: 'Veg Kolhapur',
                category : 'vegetable',
                rating : 4.3,
                price: 150,
                img: 'https://img.freepik.com/premium-photo/mix-vegetable-curry-indian-main-course-recipe-contains-carrots-cauliflower-green-peas-beans-baby-corn-capsicum-paneer-cottage-cheese-with-traditional-masala-curry_466689-35432.jpg',
                quantity: 1
            },
            {
                id: 28,
                name: 'Veg Masala',
                category : 'vegetable',
                rating : 4.3,
                price: 90,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sVYZ2pXEcflpNnHNcVjn752YM0ic05pZx37GTKN4RCntRANrfIB5mwC1WpGuNJiT_YI&usqp=CAU',
                quantity: 1
            },
            {
                id: 29,
                name: 'Veg Pakora',
                category : 'vegetable',
                rating : 4.3,
                price: 80,
                img: 'https://p1.hiclipart.com/preview/401/929/156/indian-food-indian-cuisine-roti-paratha-vegetarian-cuisine-recipe-chapati-curry-png-clipart.jpg',
                quantity: 1
            },
            {
                id: 30,
                name: 'Momos',
                category : 'chinese',
                rating : 4.3,
                price: 80,
                img: 'https://e7.pngegg.com/pngimages/788/786/png-clipart-orange-spaghetti-chinese-noodles-vegetarian-cuisine-food-australian-food-food-recipe-thumbnail.png',
                quantity: 1
            },
            {
                id: 32,
                name: 'Chili Chicken',
                category : 'chinese',
                rating : 4.3,
                price: 160,
                img: 'https://w7.pngwing.com/pngs/137/39/png-transparent-dish-on-plate-gobi-manchurian-indian-chinese-cuisine-chilli-chicken-chicken-food-animals-recipe-thumbnail.png',
                quantity: 1
            },
            {
                id: 34,
                name: 'Spring Roll',
                category : 'chinese',
                rating : 4.3,
                price: 140,
                img: 'https://www.seriouseats.com/thmb/rzNjTG9gMj4Dl5t6quw_IeFlmhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__08__20160811-fast-food-recipes-roundup-07-f0cefd1607e14522a7c6e1586c414a67.jpg',
                quantity: 1
            },
            {
                id: 35,
                name: 'Szechuan Chicken',
                category : 'chinese',
                rating : 4.3,
                price: 140,
                img: 'https://media.gettyimages.com/id/155278138/photo/sweet-and-sour-pork.jpg?s=612x612&w=gi&k=20&c=Nz2TaxW5tlH-CHNDQ-hhLoCrpg7FcXLRvD1LLIkt52g=',
                quantity: 1
            },
            {
                id: 36,
                name: 'Fried Rice',
                category : 'chinese',
                rating : 4.3,
                price: 110,
                img: 'https://www.aheadofthyme.com/wp-content/uploads/2021/02/general-tsos-chicken-3.jpg',
                quantity: 1
            },
            {
                id: 37,
                name: 'Butter Masala Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 85,
                img: 'https://w7.pngwing.com/pngs/519/447/png-transparent-pancit-chinese-cuisine-lor-mee-malaysian-cuisine-chowking-chinese-style-food-recipe-cooking-thumbnail.png',
                quantity: 1
            },
            {
                id: 38,
                name: 'Idli',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/334/621/png-transparent-breakfast-idli-tiffin-food-vegetarian-cuisine-idly-recipe-fruit-ice-cream.png',
                quantity: 1
            },
            {
                id: 39,
                name: 'Masala Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 120,
                img: 'https://banner2.cleanpng.com/20190609/kpt/kisspng-masala-dosa-indian-cuisine-food-dosa-png-vector-clipart-psd-peoplepng-com-5cfda415dfd947.7580192415601264859169.jpg',
                quantity: 1
            },
            {
                id: 40,
                name: 'Mysore Bonda',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/431/796/png-transparent-bonda-south-indian-cuisine-tiffin-others-food-fruit-desktop-wallpaper.png',
                quantity: 1
            },
            {
                id: 41,
                name: 'Onion Uttapam',
                category : 'south-indian',
                rating : 4.3,
                price: 80,
                img: 'https://www.shutterstock.com/image-photo/south-indian-food-uttapam-ooththappam-260nw-487469653.jpg',
                quantity: 1
            },
            {
                id: 42,
                name: 'Plain Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 50,
                img: 'https://thumbs.dreamstime.com/b/south-indian-tasty-plain-dosa-coconut-chutney-chilly-banana-leaf-plate-224858230.jpg',
                quantity: 1
            },
            {
                id: 43,
                name: 'Rava Uttapam',
                category : 'south-indian',
                rating : 4.3,
                price: 60,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo80bCu1BEnWu3jRBXymOZiKQ_1FV8599J10RcTiYuvWBv8KAj2tKI9aRcMs6RAlZnzws&usqp=CAU',
                quantity: 1
            },
            {
                id: 44,
                name: 'Sambhar Vada',
                category : 'south-indian',
                rating : 4.3,
                price: 60,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjolRODANcnyxJF4HFQFxa1VNEDiYlaaC14WJKOfVmnCDQXZbxbFi4c9d9SPpStpCGKjQ&usqp=CAU',
                quantity: 1
            }
        ]
    },
    {
        "name": "KFC",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloc0K433F8VnreFpZ2YuFR1gCTqxT4ouQbA&s",
        "address": "789 Oak St",
        "phone": "555-901-2345",
        "email": "kfc@example.com",
        "rating": 4.8,
        "itemsAvailables": [
            {
                id: 1,
                name: 'Ambur Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 150,
                img: 'https://w7.pngwing.com/pngs/917/228/png-transparent-biryani-indian-cuisine-biryani-buffet-take-out-kebab-biryani-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 2,
                name: 'Hyderabadi Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 160,
                img: 'https://e7.pngegg.com/pngimages/972/654/png-clipart-chicken-with-rice-kabsa-hyderabadi-biryani-thai-cuisine-pilaf-fried-chicken-soup-food.png',
                quantity: 1
            },
            {
                id: 3,
                name: 'Egg Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 120,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ_llc5v30rT4oEb8Wa8JJ5yxH1A9Pq3KHcaIuTMhp5rF5lhxJzqwgZFZIDKYh_W_2QU&usqp=CAU',
                quantity: 1
            },
            {
                id: 5,
                name: 'Mutton Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 400,
                img: 'https://w7.pngwing.com/pngs/230/838/png-transparent-hyderabadi-biryani-indian-cuisine-hyderabadi-cuisine-barbecue-barbecue-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 6,
                name: 'Kamrupi Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 120,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNraLAXFFPBRJKEeuXogLSFkZsKsKw0VGSTbS8Sa_SbcVgQTGh4oPvzKOACic3_TnP5RE&usqp=CAU',
                quantity: 1
            },
            {
                id: 7,
                name: 'Kashmiri Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 130,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTjepgWFWiHKb_WV7VidJ9K6pb3p1lOkLDBCBN-XXfudXUoRdkOqqeez9taMDnZuXM20&usqp=CAU',
                quantity: 1
            },
            {
                id: 8,
                name: 'Memoni Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 200,
                img: 'https://www.mistay.in/travel-blog/content/images/2020/05/memoni-mutton-biryani_14634.jpg',
                quantity: 1
            },
            {
                id: 9,
                name: 'Mughlai Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 290,
                img: 'https://static.wixstatic.com/media/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg',
                quantity: 1
            },
            {
                id: 10,
                name: 'Chicken Roast',
                category : 'chicken',
                rating : 4.3,
                price: 120,
                img: 'https://e7.pngegg.com/pngimages/300/150/png-clipart-fried-chicken-roasted-chicken-food-chicken-thumbnail.png',
                quantity: 1
            },
            {
                id: 11,
                name: 'Chicken Curry',
                category : 'chicken',
                rating : 4.3,
                price: 100,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2t9CWjX5fKCF3VFgzgr2I1yMq0WPcpT3mTUW92siD5zkfV3dbnF05GSMJLcwVQKQyad8&usqp=CAU',
                quantity: 1
            },
            {
                id: 12,
                name: 'Chicken Do Pyaza',
                category : 'chicken',
                rating : 4.3,
                price: 140,
                img: 'https://www.seekpng.com/png/detail/270-2703209_chicken-curry.png',
                quantity: 1
            },
            {
                id: 13,
                name: 'Chicken Masala',
                category : 'chicken',
                rating : 4.3,
                price: 120,
                img: 'https://static.toiimg.com/thumb/94794110.cms?width=400&height=300&resizemode=4&imgsize=96406',
                quantity: 1
            },
            {
                id: 14,
                name: 'Handi Chicken',
                category : 'chicken',
                rating : 4.3,
                price: 170,
                img: 'https://icon2.cleanpng.com/20180528/vh/kisspng-pakistani-cuisine-chicken-karahi-gosht-indian-cuis-chicken-biriyani-5b0c16e06b5759.8612231715275189444397.jpg',
                quantity: 1
            },
            {
                id: 17,
                name: 'Palak Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 200,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7L8Y2a6sbUdrQw4VtDlw6DIg8ni_V9zJhIIZQ_PBp8IBlS828vbZzCYR9dtSROWjR-8&usqp=CAU',
                quantity: 1
            },
            {
                id: 18,
                name: 'Paneer Butter Masala',
                category : 'paneer',
                rating : 4.3,
                price: 150,
                img: 'https://img1.wsimg.com/isteam/ip/53198215-02ca-4f20-a741-5e559a19f796/Tandoor%20Paneer%20tikka.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true',
                quantity: 1
            
            },
            {
                id: 19,
                name: 'Paneer Do Pyaza',
                category : 'paneer',
                rating : 4.3,
                price: 180,
                img: 'https://www.spicemantraonline.com/images/indian/PaneerTikka1.png',
                quantity: 1
            
            },
            {
                id: 21,
                name: 'Paneer Lababdar',
                category : 'paneer',
                rating : 4.3,
                price: 270,
                img: 'https://previews.123rf.com/images/rickysoni/rickysoni1806/rickysoni180600443/102577631-indian-healthy-cuisine-palak-paneer-made-up-of-spinach-and-cottage-cheese-isolated-on-white.jpg',
                quantity: 1
            },
            {
                id: 22,
                name: 'Shahi Paneer',
                age: '32',
                category : 'paneer',
                rating : 4.3,
                price: 260,
                img: 'https://e7.pngegg.com/pngimages/734/796/png-clipart-dish-with-sauce-on-plate-shahi-paneer-indian-cuisine-karahi-korma-vegetarian-cuisine-samosa-cream-food.png',
                quantity: 1
            },
            {
                id: 24,
                name: 'Veg Jalfrezi',
                category : 'vegetable',
                rating : 4.3,
                price: 170,
                img: 'https://png.pngitem.com/pimgs/s/121-1214876_jasmine-rice-png-download-veg-biryani-images-png.png',
                quantity: 1
            },
            {
                id: 25,
                name: 'Veg Biryani',
                category : 'vegetable',
                rating : 4.3,
                price: 130,
                img: 'https://thebellyrulesthemind.net/wp-content/uploads/2020/01/navratan-korma_-vegetable-korma-3.png',
                quantity: 1
            },
            {
                id: 26,
                name: 'Veg Curry',
                category : 'vegetable',
                rating : 4.3,
                price: 100,
                img: 'https://p.kindpng.com/picc/s/732-7327263_yellow-curry-hd-png-download.png',
                quantity: 1
            },
            {
                id: 27,
                name: 'Veg Kolhapur',
                category : 'vegetable',
                rating : 4.3,
                price: 150,
                img: 'https://img.freepik.com/premium-photo/mix-vegetable-curry-indian-main-course-recipe-contains-carrots-cauliflower-green-peas-beans-baby-corn-capsicum-paneer-cottage-cheese-with-traditional-masala-curry_466689-35432.jpg',
                quantity: 1
            },
            {
                id: 29,
                name: 'Veg Pakora',
                category : 'vegetable',
                rating : 4.3,
                price: 80,
                img: 'https://p1.hiclipart.com/preview/401/929/156/indian-food-indian-cuisine-roti-paratha-vegetarian-cuisine-recipe-chapati-curry-png-clipart.jpg',
                quantity: 1
            },
            {
                id: 31,
                name: 'Chicken Manchurian',
                category : 'chinese',
                rating : 4.3,
                price: 90,
                img: 'https://p.kindpng.com/picc/s/191-1914728_15-chinese-food-png-for-free-download-on.png',
                quantity: 1
            },
            {
                id: 32,
                name: 'Chili Chicken',
                category : 'chinese',
                rating : 4.3,
                price: 160,
                img: 'https://w7.pngwing.com/pngs/137/39/png-transparent-dish-on-plate-gobi-manchurian-indian-chinese-cuisine-chilli-chicken-chicken-food-animals-recipe-thumbnail.png',
                quantity: 1
            },
            {
                id: 33,
                name: 'Chowmein',
                category : 'chinese',
                rating : 4.3,
                price: 160,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiRMZw3YzY-xFGu5OtmNGFvCKpm2R2P1Ig2hcrG1pUA&s',
                quantity: 1
            },
            {
                id: 35,
                name: 'Szechuan Chicken',
                category : 'chinese',
                rating : 4.3,
                price: 140,
                img: 'https://media.gettyimages.com/id/155278138/photo/sweet-and-sour-pork.jpg?s=612x612&w=gi&k=20&c=Nz2TaxW5tlH-CHNDQ-hhLoCrpg7FcXLRvD1LLIkt52g=',
                quantity: 1
            },
            {
                id: 36,
                name: 'Fried Rice',
                category : 'chinese',
                rating : 4.3,
                price: 110,
                img: 'https://www.aheadofthyme.com/wp-content/uploads/2021/02/general-tsos-chicken-3.jpg',
                quantity: 1
            },
            {
                id: 37,
                name: 'Butter Masala Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 85,
                img: 'https://w7.pngwing.com/pngs/519/447/png-transparent-pancit-chinese-cuisine-lor-mee-malaysian-cuisine-chowking-chinese-style-food-recipe-cooking-thumbnail.png',
                quantity: 1
            },
            {
                id: 38,
                name: 'Idli',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/334/621/png-transparent-breakfast-idli-tiffin-food-vegetarian-cuisine-idly-recipe-fruit-ice-cream.png',
                quantity: 1
            },
            {
                id: 39,
                name: 'Masala Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 120,
                img: 'https://banner2.cleanpng.com/20190609/kpt/kisspng-masala-dosa-indian-cuisine-food-dosa-png-vector-clipart-psd-peoplepng-com-5cfda415dfd947.7580192415601264859169.jpg',
                quantity: 1
            },
            {
                id: 40,
                name: 'Mysore Bonda',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/431/796/png-transparent-bonda-south-indian-cuisine-tiffin-others-food-fruit-desktop-wallpaper.png',
                quantity: 1
            },
            {
                id: 41,
                name: 'Onion Uttapam',
                category : 'south-indian',
                rating : 4.3,
                price: 80,
                img: 'https://www.shutterstock.com/image-photo/south-indian-food-uttapam-ooththappam-260nw-487469653.jpg',
                quantity: 1
            },
            {
                id: 42,
                name: 'Plain Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 50,
                img: 'https://thumbs.dreamstime.com/b/south-indian-tasty-plain-dosa-coconut-chutney-chilly-banana-leaf-plate-224858230.jpg',
                quantity: 1
            },
            {
                id: 43,
                name: 'Rava Uttapam',
                category : 'south-indian',
                rating : 4.3,
                price: 60,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo80bCu1BEnWu3jRBXymOZiKQ_1FV8599J10RcTiYuvWBv8KAj2tKI9aRcMs6RAlZnzws&usqp=CAU',
                quantity: 1
            }
        ]
    },
    {
        "name": "Subway",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFJOj4F78mDho3TAyX4jpBfnLEZl39NZgyw&s",
        "address": "321 Pine St",
        "phone": "555-111-2222",
        "email": "subway@example.com",
        "rating": 4.1,
        "itemsAvailables": [
            {
                id: 1,
                name: 'Ambur Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 150,
                img: 'https://w7.pngwing.com/pngs/917/228/png-transparent-biryani-indian-cuisine-biryani-buffet-take-out-kebab-biryani-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 2,
                name: 'Hyderabadi Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 160,
                img: 'https://e7.pngegg.com/pngimages/972/654/png-clipart-chicken-with-rice-kabsa-hyderabadi-biryani-thai-cuisine-pilaf-fried-chicken-soup-food.png',
                quantity: 1
            },
            {
                id: 3,
                name: 'Egg Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 120,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ_llc5v30rT4oEb8Wa8JJ5yxH1A9Pq3KHcaIuTMhp5rF5lhxJzqwgZFZIDKYh_W_2QU&usqp=CAU',
                quantity: 1
            },
            {
                id: 4,
                name: 'Goan Fish Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 140,
                img: 'https://www.us2guntur.com/images//10071img/fbfriendcircle_B_020920.jpg',
                quantity: 1
            },
            {
                id: 5,
                name: 'Mutton Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 400,
                img: 'https://w7.pngwing.com/pngs/230/838/png-transparent-hyderabadi-biryani-indian-cuisine-hyderabadi-cuisine-barbecue-barbecue-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 6,
                name: 'Kamrupi Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 120,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNraLAXFFPBRJKEeuXogLSFkZsKsKw0VGSTbS8Sa_SbcVgQTGh4oPvzKOACic3_TnP5RE&usqp=CAU',
                quantity: 1
            },
            {
                id: 7,
                name: 'Kashmiri Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 130,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTjepgWFWiHKb_WV7VidJ9K6pb3p1lOkLDBCBN-XXfudXUoRdkOqqeez9taMDnZuXM20&usqp=CAU',
                quantity: 1
            },
            {
                id: 8,
                name: 'Memoni Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 200,
                img: 'https://www.mistay.in/travel-blog/content/images/2020/05/memoni-mutton-biryani_14634.jpg',
                quantity: 1
            },
            {
                id: 9,
                name: 'Mughlai Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 290,
                img: 'https://static.wixstatic.com/media/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg',
                quantity: 1
            },
            {
                id: 10,
                name: 'Chicken Roast',
                category : 'chicken',
                rating : 4.3,
                price: 120,
                img: 'https://e7.pngegg.com/pngimages/300/150/png-clipart-fried-chicken-roasted-chicken-food-chicken-thumbnail.png',
                quantity: 1
            },
            {
                id: 11,
                name: 'Chicken Curry',
                category : 'chicken',
                rating : 4.3,
                price: 100,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2t9CWjX5fKCF3VFgzgr2I1yMq0WPcpT3mTUW92siD5zkfV3dbnF05GSMJLcwVQKQyad8&usqp=CAU',
                quantity: 1
            },
            {
                id: 12,
                name: 'Chicken Do Pyaza',
                category : 'chicken',
                rating : 4.3,
                price: 140,
                img: 'https://www.seekpng.com/png/detail/270-2703209_chicken-curry.png',
                quantity: 1
            },
            {
                id: 13,
                name: 'Chicken Masala',
                category : 'chicken',
                rating : 4.3,
                price: 120,
                img: 'https://static.toiimg.com/thumb/94794110.cms?width=400&height=300&resizemode=4&imgsize=96406',
                quantity: 1
            },
            {
                id: 14,
                name: 'Handi Chicken',
                category : 'chicken',
                rating : 4.3,
                price: 170,
                img: 'https://icon2.cleanpng.com/20180528/vh/kisspng-pakistani-cuisine-chicken-karahi-gosht-indian-cuis-chicken-biriyani-5b0c16e06b5759.8612231715275189444397.jpg',
                quantity: 1
            },
            {
                id: 15,
                name: 'Murgh Musallam',
                category : 'chicken',
                rating : 4.3,
                price: 500,
                img: 'https://img.favpng.com/0/3/11/chicken-karahi-naan-saag-tikka-png-favpng-HhrJMva4r4Ew9t0gBYkn9RSNm.jpg',
                quantity: 1
            },
            {
                id: 16,
                name: 'Matar Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 350,
                img: 'https://png.pngtree.com/png-clipart/20230518/ourmid/pngtree-kadai-paneer-curry-png-image_7101714.png',
                quantity: 1
            
            },
            {
                id: 17,
                name: 'Palak Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 200,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7L8Y2a6sbUdrQw4VtDlw6DIg8ni_V9zJhIIZQ_PBp8IBlS828vbZzCYR9dtSROWjR-8&usqp=CAU',
                quantity: 1
            },
            {
                id: 18,
                name: 'Paneer Butter Masala',
                category : 'paneer',
                rating : 4.3,
                price: 150,
                img: 'https://img1.wsimg.com/isteam/ip/53198215-02ca-4f20-a741-5e559a19f796/Tandoor%20Paneer%20tikka.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true',
                quantity: 1
            
            },
            {
                id: 19,
                name: 'Paneer Do Pyaza',
                category : 'paneer',
                rating : 4.3,
                price: 180,
                img: 'https://www.spicemantraonline.com/images/indian/PaneerTikka1.png',
                quantity: 1
            
            },
            {
                id: 20,
                name: 'Hyderabadi Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 250,
                img: 'https://w7.pngwing.com/pngs/633/993/png-transparent-mattar-paneer-indian-cuisine-paneer-tikka-masala-shahi-paneer-karahi-non-veg-food-food-recipe-tomato-thumbnail.png',
                quantity: 1
            },
            {
                id: 21,
                name: 'Paneer Lababdar',
                category : 'paneer',
                rating : 4.3,
                price: 270,
                img: 'https://previews.123rf.com/images/rickysoni/rickysoni1806/rickysoni180600443/102577631-indian-healthy-cuisine-palak-paneer-made-up-of-spinach-and-cottage-cheese-isolated-on-white.jpg',
                quantity: 1
            },
            {
                id: 22,
                name: 'Shahi Paneer',
                age: '32',
                category : 'paneer',
                rating : 4.3,
                price: 260,
                img: 'https://e7.pngegg.com/pngimages/734/796/png-clipart-dish-with-sauce-on-plate-shahi-paneer-indian-cuisine-karahi-korma-vegetarian-cuisine-samosa-cream-food.png',
                quantity: 1
            },
            {
                id: 23,
                name: 'Navratan Korma',
                category : 'vegetable',
                rating : 4.3,
                price: 350,
                img: 'https://e7.pngegg.com/pngimages/987/643/png-clipart-cooked-noodles-with-green-mint-on-platter-hyderabadi-biryani-naan-butter-chicken-chicken-tikka-masala-biryani-food-recipe.png',
                quantity: 1
            },
            {
                id: 24,
                name: 'Veg Jalfrezi',
                category : 'vegetable',
                rating : 4.3,
                price: 170,
                img: 'https://png.pngitem.com/pimgs/s/121-1214876_jasmine-rice-png-download-veg-biryani-images-png.png',
                quantity: 1
            },
            {
                id: 25,
                name: 'Veg Biryani',
                category : 'vegetable',
                rating : 4.3,
                price: 130,
                img: 'https://thebellyrulesthemind.net/wp-content/uploads/2020/01/navratan-korma_-vegetable-korma-3.png',
                quantity: 1
            },
            {
                id: 26,
                name: 'Veg Curry',
                category : 'vegetable',
                rating : 4.3,
                price: 100,
                img: 'https://p.kindpng.com/picc/s/732-7327263_yellow-curry-hd-png-download.png',
                quantity: 1
            },
            {
                id: 27,
                name: 'Veg Kolhapur',
                category : 'vegetable',
                rating : 4.3,
                price: 150,
                img: 'https://img.freepik.com/premium-photo/mix-vegetable-curry-indian-main-course-recipe-contains-carrots-cauliflower-green-peas-beans-baby-corn-capsicum-paneer-cottage-cheese-with-traditional-masala-curry_466689-35432.jpg',
                quantity: 1
            },
            {
                id: 28,
                name: 'Veg Masala',
                category : 'vegetable',
                rating : 4.3,
                price: 90,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sVYZ2pXEcflpNnHNcVjn752YM0ic05pZx37GTKN4RCntRANrfIB5mwC1WpGuNJiT_YI&usqp=CAU',
                quantity: 1
            },
            {
                id: 29,
                name: 'Veg Pakora',
                category : 'vegetable',
                rating : 4.3,
                price: 80,
                img: 'https://p1.hiclipart.com/preview/401/929/156/indian-food-indian-cuisine-roti-paratha-vegetarian-cuisine-recipe-chapati-curry-png-clipart.jpg',
                quantity: 1
            },
            {
                id: 30,
                name: 'Momos',
                category : 'chinese',
                rating : 4.3,
                price: 80,
                img: 'https://e7.pngegg.com/pngimages/788/786/png-clipart-orange-spaghetti-chinese-noodles-vegetarian-cuisine-food-australian-food-food-recipe-thumbnail.png',
                quantity: 1
            },
            {
                id: 31,
                name: 'Chicken Manchurian',
                category : 'chinese',
                rating : 4.3,
                price: 90,
                img: 'https://p.kindpng.com/picc/s/191-1914728_15-chinese-food-png-for-free-download-on.png',
                quantity: 1
            },
            {
                id: 32,
                name: 'Chili Chicken',
                category : 'chinese',
                rating : 4.3,
                price: 160,
                img: 'https://w7.pngwing.com/pngs/137/39/png-transparent-dish-on-plate-gobi-manchurian-indian-chinese-cuisine-chilli-chicken-chicken-food-animals-recipe-thumbnail.png',
                quantity: 1
            },
            {
                id: 33,
                name: 'Chowmein',
                category : 'chinese',
                rating : 4.3,
                price: 160,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiRMZw3YzY-xFGu5OtmNGFvCKpm2R2P1Ig2hcrG1pUA&s',
                quantity: 1
            },
            {
                id: 34,
                name: 'Spring Roll',
                category : 'chinese',
                rating : 4.3,
                price: 140,
                img: 'https://www.seriouseats.com/thmb/rzNjTG9gMj4Dl5t6quw_IeFlmhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__08__20160811-fast-food-recipes-roundup-07-f0cefd1607e14522a7c6e1586c414a67.jpg',
                quantity: 1
            },
            {
                id: 35,
                name: 'Szechuan Chicken',
                category : 'chinese',
                rating : 4.3,
                price: 140,
                img: 'https://media.gettyimages.com/id/155278138/photo/sweet-and-sour-pork.jpg?s=612x612&w=gi&k=20&c=Nz2TaxW5tlH-CHNDQ-hhLoCrpg7FcXLRvD1LLIkt52g=',
                quantity: 1
            },
            {
                id: 36,
                name: 'Fried Rice',
                category : 'chinese',
                rating : 4.3,
                price: 110,
                img: 'https://www.aheadofthyme.com/wp-content/uploads/2021/02/general-tsos-chicken-3.jpg',
                quantity: 1
            },
            {
                id: 37,
                name: 'Butter Masala Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 85,
                img: 'https://w7.pngwing.com/pngs/519/447/png-transparent-pancit-chinese-cuisine-lor-mee-malaysian-cuisine-chowking-chinese-style-food-recipe-cooking-thumbnail.png',
                quantity: 1
            },
            {
                id: 38,
                name: 'Idli',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/334/621/png-transparent-breakfast-idli-tiffin-food-vegetarian-cuisine-idly-recipe-fruit-ice-cream.png',
                quantity: 1
            },
            {
                id: 39,
                name: 'Masala Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 120,
                img: 'https://banner2.cleanpng.com/20190609/kpt/kisspng-masala-dosa-indian-cuisine-food-dosa-png-vector-clipart-psd-peoplepng-com-5cfda415dfd947.7580192415601264859169.jpg',
                quantity: 1
            },
            {
                id: 40,
                name: 'Mysore Bonda',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/431/796/png-transparent-bonda-south-indian-cuisine-tiffin-others-food-fruit-desktop-wallpaper.png',
                quantity: 1
            },
            {
                id: 41,
                name: 'Onion Uttapam',
                category : 'south-indian',
                rating : 4.3,
                price: 80,
                img: 'https://www.shutterstock.com/image-photo/south-indian-food-uttapam-ooththappam-260nw-487469653.jpg',
                quantity: 1
            },
            {
                id: 42,
                name: 'Plain Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 50,
                img: 'https://thumbs.dreamstime.com/b/south-indian-tasty-plain-dosa-coconut-chutney-chilly-banana-leaf-plate-224858230.jpg',
                quantity: 1
            },
            {
                id: 43,
                name: 'Rava Uttapam',
                category : 'south-indian',
                rating : 4.3,
                price: 60,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo80bCu1BEnWu3jRBXymOZiKQ_1FV8599J10RcTiYuvWBv8KAj2tKI9aRcMs6RAlZnzws&usqp=CAU',
                quantity: 1
            },
            {
                id: 44,
                name: 'Sambhar Vada',
                category : 'south-indian',
                rating : 4.3,
                price: 60,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjolRODANcnyxJF4HFQFxa1VNEDiYlaaC14WJKOfVmnCDQXZbxbFi4c9d9SPpStpCGKjQ&usqp=CAU',
                quantity: 1
            }
        ]
    },
    {
        "name": "Pizza Hut",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWlTsNQulm0hVVl7svD6R6ChhRc2y5mJ_Xw&s",
        "address": "901 Maple St",
        "phone": "555-777-8888",
        "email": "pizzahut@example.com",
        "rating": 4.6,
        "itemsAvailables": [
            {
                id: 1,
                name: 'Ambur Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 150,
                img: 'https://w7.pngwing.com/pngs/917/228/png-transparent-biryani-indian-cuisine-biryani-buffet-take-out-kebab-biryani-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 2,
                name: 'Hyderabadi Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 160,
                img: 'https://e7.pngegg.com/pngimages/972/654/png-clipart-chicken-with-rice-kabsa-hyderabadi-biryani-thai-cuisine-pilaf-fried-chicken-soup-food.png',
                quantity: 1
            },
            {
                id: 3,
                name: 'Egg Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 120,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ_llc5v30rT4oEb8Wa8JJ5yxH1A9Pq3KHcaIuTMhp5rF5lhxJzqwgZFZIDKYh_W_2QU&usqp=CAU',
                quantity: 1
            },
            {
                id: 5,
                name: 'Mutton Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 400,
                img: 'https://w7.pngwing.com/pngs/230/838/png-transparent-hyderabadi-biryani-indian-cuisine-hyderabadi-cuisine-barbecue-barbecue-food-recipe-cuisine-thumbnail.png',
                quantity: 1
            },
            {
                id: 8,
                name: 'Memoni Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 200,
                img: 'https://www.mistay.in/travel-blog/content/images/2020/05/memoni-mutton-biryani_14634.jpg',
                quantity: 1
            },
            {
                id: 9,
                name: 'Mughlai Biryani',
                category : 'biryani',
                rating : 4.3,
                price: 290,
                img: 'https://static.wixstatic.com/media/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_b44aab0c38364d05b4d66a563af1aa6b~mv2.jpg',
                quantity: 1
            },
            {
                id: 11,
                name: 'Chicken Curry',
                category : 'chicken',
                rating : 4.3,
                price: 100,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2t9CWjX5fKCF3VFgzgr2I1yMq0WPcpT3mTUW92siD5zkfV3dbnF05GSMJLcwVQKQyad8&usqp=CAU',
                quantity: 1
            },
            {
                id: 12,
                name: 'Chicken Do Pyaza',
                category : 'chicken',
                rating : 4.3,
                price: 140,
                img: 'https://www.seekpng.com/png/detail/270-2703209_chicken-curry.png',
                quantity: 1
            },
            {
                id: 13,
                name: 'Chicken Masala',
                category : 'chicken',
                rating : 4.3,
                price: 120,
                img: 'https://static.toiimg.com/thumb/94794110.cms?width=400&height=300&resizemode=4&imgsize=96406',
                quantity: 1
            },
            {
                id: 15,
                name: 'Murgh Musallam',
                category : 'chicken',
                rating : 4.3,
                price: 500,
                img: 'https://img.favpng.com/0/3/11/chicken-karahi-naan-saag-tikka-png-favpng-HhrJMva4r4Ew9t0gBYkn9RSNm.jpg',
                quantity: 1
            },
            {
                id: 16,
                name: 'Matar Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 350,
                img: 'https://png.pngtree.com/png-clipart/20230518/ourmid/pngtree-kadai-paneer-curry-png-image_7101714.png',
                quantity: 1
            
            },
            {
                id: 17,
                name: 'Palak Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 200,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7L8Y2a6sbUdrQw4VtDlw6DIg8ni_V9zJhIIZQ_PBp8IBlS828vbZzCYR9dtSROWjR-8&usqp=CAU',
                quantity: 1
            },
            {
                id: 18,
                name: 'Paneer Butter Masala',
                category : 'paneer',
                rating : 4.3,
                price: 150,
                img: 'https://img1.wsimg.com/isteam/ip/53198215-02ca-4f20-a741-5e559a19f796/Tandoor%20Paneer%20tikka.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true',
                quantity: 1
            
            },
            {
                id: 20,
                name: 'Hyderabadi Paneer',
                category : 'paneer',
                rating : 4.3,
                price: 250,
                img: 'https://w7.pngwing.com/pngs/633/993/png-transparent-mattar-paneer-indian-cuisine-paneer-tikka-masala-shahi-paneer-karahi-non-veg-food-food-recipe-tomato-thumbnail.png',
                quantity: 1
            },
            {
                id: 21,
                name: 'Paneer Lababdar',
                category : 'paneer',
                rating : 4.3,
                price: 270,
                img: 'https://previews.123rf.com/images/rickysoni/rickysoni1806/rickysoni180600443/102577631-indian-healthy-cuisine-palak-paneer-made-up-of-spinach-and-cottage-cheese-isolated-on-white.jpg',
                quantity: 1
            },
            {
                id: 22,
                name: 'Shahi Paneer',
                age: '32',
                category : 'paneer',
                rating : 4.3,
                price: 260,
                img: 'https://e7.pngegg.com/pngimages/734/796/png-clipart-dish-with-sauce-on-plate-shahi-paneer-indian-cuisine-karahi-korma-vegetarian-cuisine-samosa-cream-food.png',
                quantity: 1
            },
            {
                id: 23,
                name: 'Navratan Korma',
                category : 'vegetable',
                rating : 4.3,
                price: 350,
                img: 'https://e7.pngegg.com/pngimages/987/643/png-clipart-cooked-noodles-with-green-mint-on-platter-hyderabadi-biryani-naan-butter-chicken-chicken-tikka-masala-biryani-food-recipe.png',
                quantity: 1
            },
            {
                id: 25,
                name: 'Veg Biryani',
                category : 'vegetable',
                rating : 4.3,
                price: 130,
                img: 'https://thebellyrulesthemind.net/wp-content/uploads/2020/01/navratan-korma_-vegetable-korma-3.png',
                quantity: 1
            },
            {
                id: 26,
                name: 'Veg Curry',
                category : 'vegetable',
                rating : 4.3,
                price: 100,
                img: 'https://p.kindpng.com/picc/s/732-7327263_yellow-curry-hd-png-download.png',
                quantity: 1
            },
            {
                id: 28,
                name: 'Veg Masala',
                category : 'vegetable',
                rating : 4.3,
                price: 90,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sVYZ2pXEcflpNnHNcVjn752YM0ic05pZx37GTKN4RCntRANrfIB5mwC1WpGuNJiT_YI&usqp=CAU',
                quantity: 1
            },
            {
                id: 29,
                name: 'Veg Pakora',
                category : 'vegetable',
                rating : 4.3,
                price: 80,
                img: 'https://p1.hiclipart.com/preview/401/929/156/indian-food-indian-cuisine-roti-paratha-vegetarian-cuisine-recipe-chapati-curry-png-clipart.jpg',
                quantity: 1
            },
            {
                id: 30,
                name: 'Momos',
                category : 'chinese',
                rating : 4.3,
                price: 80,
                img: 'https://e7.pngegg.com/pngimages/788/786/png-clipart-orange-spaghetti-chinese-noodles-vegetarian-cuisine-food-australian-food-food-recipe-thumbnail.png',
                quantity: 1
            },
            {
                id: 31,
                name: 'Chicken Manchurian',
                category : 'chinese',
                rating : 4.3,
                price: 90,
                img: 'https://p.kindpng.com/picc/s/191-1914728_15-chinese-food-png-for-free-download-on.png',
                quantity: 1
            },
            {
                id: 32,
                name: 'Chili Chicken',
                category : 'chinese',
                rating : 4.3,
                price: 160,
                img: 'https://w7.pngwing.com/pngs/137/39/png-transparent-dish-on-plate-gobi-manchurian-indian-chinese-cuisine-chilli-chicken-chicken-food-animals-recipe-thumbnail.png',
                quantity: 1
            },
            {
                id: 33,
                name: 'Chowmein',
                category : 'chinese',
                rating : 4.3,
                price: 160,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiRMZw3YzY-xFGu5OtmNGFvCKpm2R2P1Ig2hcrG1pUA&s',
                quantity: 1
            },
            {
                id: 36,
                name: 'Fried Rice',
                category : 'chinese',
                rating : 4.3,
                price: 110,
                img: 'https://www.aheadofthyme.com/wp-content/uploads/2021/02/general-tsos-chicken-3.jpg',
                quantity: 1
            },
            {
                id: 38,
                name: 'Idli',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/334/621/png-transparent-breakfast-idli-tiffin-food-vegetarian-cuisine-idly-recipe-fruit-ice-cream.png',
                quantity: 1
            },
            {
                id: 39,
                name: 'Masala Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 120,
                img: 'https://banner2.cleanpng.com/20190609/kpt/kisspng-masala-dosa-indian-cuisine-food-dosa-png-vector-clipart-psd-peoplepng-com-5cfda415dfd947.7580192415601264859169.jpg',
                quantity: 1
            },
            {
                id: 40,
                name: 'Mysore Bonda',
                category : 'south-indian',
                rating : 4.3,
                price: 40,
                img: 'https://w7.pngwing.com/pngs/431/796/png-transparent-bonda-south-indian-cuisine-tiffin-others-food-fruit-desktop-wallpaper.png',
                quantity: 1
            },
            {
                id: 41,
                name: 'Onion Uttapam',
                category : 'south-indian',
                rating : 4.3,
                price: 80,
                img: 'https://www.shutterstock.com/image-photo/south-indian-food-uttapam-ooththappam-260nw-487469653.jpg',
                quantity: 1
            },
            {
                id: 42,
                name: 'Plain Dosa',
                category : 'south-indian',
                rating : 4.3,
                price: 50,
                img: 'https://thumbs.dreamstime.com/b/south-indian-tasty-plain-dosa-coconut-chutney-chilly-banana-leaf-plate-224858230.jpg',
                quantity: 1
            },
            {
                id: 44,
                name: 'Sambhar Vada',
                category : 'south-indian',
                rating : 4.3,
                price: 60,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjolRODANcnyxJF4HFQFxa1VNEDiYlaaC14WJKOfVmnCDQXZbxbFi4c9d9SPpStpCGKjQ&usqp=CAU',
                quantity: 1
            }
        ]
    }
];
export {orders,restaurants};
