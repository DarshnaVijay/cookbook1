import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.page.html',
  styleUrls: ['./single-dish.page.scss'],
})
export class SingleDishPage implements OnInit {

  dishName: any;
  dishId: any;
  pageName: any;
  recipeArray: any = [];
  recipeTime: any;
  serves: any;
  ingredients: any;
  directions: any;
  comments: any;
  image: any;
  showIconYellow: any = true;
  hideIconYellow: any = false;
  showComment: any = true;
  backButtonSubscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public platform: Platform
  )
  {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // this.dishId = this.router.getCurrentNavigation().extras.state.dishId;
        this.dishName = this.router.getCurrentNavigation().extras.state.dishName;
        this.pageName = this.router.getCurrentNavigation().extras.state.pageName;
      }
    });
   }

  ngOnInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/single-dish', true) && this.router.url === '/single-dish') {
        this.router.navigate(['/dishes']);
      }
    });

    if (this.dishName === 'POHA') {
      this.recipeTime = 20;
      this.serves = 5;
      this.image = 'assets/img/dishes/poha.jpg';
      this.ingredients = '2-3 cups (when dry) (thick) Poha (flattened rice), A pinch asafoetida, 1 teaspoon mustard seeds, 1-2 green chilies (chopped small) (or according to desired level of heat – can leave out if you prefer),1 onion (small dice), 1 potato (small dice – use the waxy kind, i.e. red bliss, Yukon gold, eastern white. Avoid boiling potatoes, which don’t retain their shape once cooked), 1/2 cup peanuts or cashews, 3/4 teaspoon turmeric, 4-5 curry leaves, Salt to taste, 1/2 cup fresh cilantro (chopped) for garnish, Fresh lemon (to squeeze at end)';
      this.directions = '<p>To a strainer, add flattened rice (poha). Rinse it under running water until it turns soft.</p><p>To check if it’s done, press a flake between your thumb and index finger, it should break easily.</p><p>Add turmeric and 1/2 teaspoon salt to the poha and toss to combine. Set it aside while you make the tempering in the pan.</p><p> Heat oil in a pan on medium heat. Once the oil is hot, add the mustard seeds and let them pop.</p><p>Then add the peanuts and saute for a minute or two until they start turning brown, add the chopped onion, green chili and curry leaves. Cook for 2 minutes until the onions soften.</p><p>Add the green peas (which had been soaked in warm water for 10 minutes prior) and mix. Cook for 2 minutes until raw smell of peas goes away.</p><p> Then add in the rinsed poha and toss to combine. Taste test some poha and if it feels dry, sprinkle little water all over (I usually do that). Cook for 1-2 minutes.  Also tastes test and add more salt as needed at this point (I added around 1/8 teaspoon). Also add the sugar (if using) and cilantro.</p><p> And then cover the pan with a lid and turn heat to low. Let it be like that for 2 minutes. Then turn off the heat.</p>';
    }
    else if (this.dishName === 'CHOW MEIN') {
      this.recipeTime = 20;
      this.serves = 2;
      this.image = 'assets/img/dishes/img1.jpg';
      this.ingredients = '8 ounces thin lo mein noodles, 1 tablespoon peanut oil, 1 carrot, julienned, 1/2 head napa cabbage (sliced thin), 1/2 onion, (sliced), 1/4 cup chicken (broth), 1/4 cup low-sodium soy sauce, 1 teaspoon sesame oil,  Sliced green onions, for topping';
      this.directions = '<p>Bring a pot of water to a boil and cook the noodles according to the package directions. Drain and set aside.</p><p>When the noodles are cooking, you can chop & grate the veggies. Keep aside.</p><p>Prepare corn flour paste with 2 teaspoons corn flour and 2 tablespoons water. Keep aside. Corn flour in India is what is known as corn starch outside India.</p><p>Heat a skillet over medium-high heat and add the peanut oil. Add the carrots, cabbage and onions and cook for 1 minute. Then add black pepper or white pepper., soy sauce and sesame oil, then toss in the noodles. Top with sliced green onions.</p>';
    }
    else if (this.dishName === 'MIXED VEGETABLE DAL') {
      this.recipeTime = 25;
      this.serves = 3;
      this.image = 'assets/img/dishes/daal1.jpg';
      this.ingredients = 'Toor Dal – 1/4 cup, Moong Dal – 1/4 cup, Urad Dal – 1/4 cup, Onion chopped – 1, Garlic cloves chopped – 3, Green chili chopped – 1, Ginger finely chopped – 1 inch, Cashews – 1 tbsp, Bay leaf – 1, Turmeric powder – 1/2 tsp, Cumin seeds – 1 tsp, Red chile powder – 1 tsp, Garam masala powder – 1/2 tsp, Kitchen king masala  – 1/2 tsp (optional), Broccoli florets / Cauliflower chopped – 8, Carrot chopped – 1, Capsicum chopped – 1, Frozen green peas – 1/4 cup, Coriander leaves chopped – 2 strands, Salt – to taste, Vegetable oil / Butter – 1 tbsp';
      this.directions = '<p>In a pressure cooker wash and add moong dal, urad dal, toor dal and water, bring it to a nice boil. Close the lid and pressure cook for about 8 minutes or 2 whistles. See that the water is at least half inch above the dal.</p><p>Once the cooker is cooled down, remove the lid and whisk the cooked dal until it is blended into a smooth pate</p><p>Meanwhile in a non-stick pan add bay leaf, vegetable oil, cumin seeds and cashews and saute till it becomes light golden in color.</p><p>Now add the onion, green chilli, ginger, garlic cloves and turmeric powder, pinch of salt and saute till it becomes translucent.</p><p>Add all the chopped vegetables and saute it for 2 minutes. You can use any veggies of your choice.</p><p>Now add the cooked dal, red chilli powder, garam masala powder, kitchen king masala, water for desired consistency, salt to taste and bring it to a nice boil. Finally add the coriander leaves and mix well.</p><p>Mixed Vegetable Dal is now ready. Serve hot and enjoy.</p>';
    }
    else if (this.dishName === 'MOMOS') {
      this.recipeTime = '1 hour 20';
      this.serves = 3;
      this.image = 'assets/img/dishes/momos.jpg';
      this.ingredients = '2 cups maida, 1/2 tsp salt, 1/2 tsp baking powder, 1 cup carrots, grated, 1 cup cabbage, grated, 1 tbsp oil, 1/2 cup onion, finely chopped, 1 tsp garlic, chopped, 1 tsp soya sauce, salt, 1/4 tsp vinegar, 1/4 tsp black pepper';
      this.directions = '<p>Mix the maida, salt and baking powder and knead to a stiff dough with water.</p><p>Heat oil and add the onion and garlic.</p><p>Saute over high heat and add the carrot and cabbage. Turn around over high heat till glossy.</p><p>Take it off the heat and mix in the soya sauce, salt, vinegar and black pepper.</p><p>Roll the dough thin (translucent) and cut into 4"-5" rounds.</p><p>Take a round, wet edges and place some filling in the center.</p><p>Bring edges together to cover the filling. Twist to seal and fill the rest in the same way.</p><p>Steam for about 10 minutes and serve with soya sauce and chilli sauce.</p>';
    }
    else if (this.dishName === 'MANCHURIAN') {
      this.recipeTime = 45;
      this.serves = 4;
      this.image = 'assets/img/dishes/manchurian.jpg';
      this.ingredients = '2 tablespoon shredded cabbage, 2 tablespoon cauliflower, 1 1/2 teaspoon green chilli, 1/2 teaspoon garlic paste, 1 tablespoon green beans, salt as required, 2 teaspoon light soya sauce, 3 tablespoon all purpose flour, 5 tablespoon water, 1/2 tablespoon red bell pepper, 1/4 tablespoon capsicum (green pepper), 1 tablespoon tomato ketchup, 1 teaspoon white vinegar, 2 tablespoon chopped, grated carrot, 2 tablespoon paneer, 1/2 teaspoon ginger paste, 3 tablespoon coriander leaves, 1 1/2 teaspoon soy sauce, 1 gm white pepper powder, 2 tablespoon corn starch, 1 cup vegetable oil, 1 tablespoon onion, 1/4 piece yellow bell pepper, 4 cloves garlic, 1/2 tablespoon red chilli sauce, 1/2 tablespoon broth powder';
      this.directions = '<p>making veg manchurian balls, frying veg manchurian balls, making manchurian gravy or sauce</p><p>Take the finely chopped or grated veggies in a bowl.  you will need ½ cup finely chopped red cabbage, ½ cup grated carrot, ¼ cup finely chopped capsicum (green bell pepper), ¼ cup finely chopped french beans and ¼ cup finely chopped spring onions. You can also add regular green cabbage instead of red or purple cabbage.</p><p>Then add the dry ingredients – 2 tablespoons corn starch, 2 tablespoons all purpose flour (maida), ½ teaspoon black pepper and ½ teaspoon salt or add as required.</p><p>Mix and gather the whole mixture together. Then kind of mix and knead so that the veggies leave the water and you get a dough-like mixture. But do not knead like that a bread or roti dough. Gluten strands can form that will give a dense chewy texture in the fried veggie balls. So just mix very well and press so that the veggies release their juices.</p><p>Then take a small portion of the mixture in your hands. Press and roll it in your palm and make a round veggie ball. Make all veggie balls this way and keep aside. You can spread some oil on your palms while making the vegetable balls.</p><p>Heat oil for deep frying in a kadai or pan. Add a small piece of a ball to the hot oil. If the balls does not stick or settle down at the bottom of the pan, but comes up steadily the oil is ready for frying these veggie balls. If the balls break, then some more binding agent is required. So you can add 2 to 3 teaspoons of some more all-purpose flour (maida).</p><p>When cooked from one side, turn the balls with a slotted spoon.</p>';
    }
    else if (this.dishName === 'CHOCOLATE SHAKE') {
      this.recipeTime = 5;
      this.serves = 2;
      this.image = 'assets/img/dishes/choclate.jpg';
      this.ingredients = '2 cups vanilla ice cream, 1/4 cup chocolate syrup, 1/2 cup whole milk (cold), Garnish: whipped cream, shaved chocolate, Optional: 1/4 cup chocolate chips';
      this.directions = '<p>Gather the ingredients. Place the ice cream, milk, and chocolate syrup into the blender. If using chocolate chips, add those as well. Be mindful that the harder the ice cream is, the better, as the blending process can liquefy the ice cream too much and make the milkshake too thin.</p><p>Blend the ingredients until completely smooth.</p><p>Pour into your glasses immediately, top with whipped cream, and decorate with shaved chocolate. Enjoy!</p>';
    }
    else if (this.dishName === 'FRUIT RAYTA') {
      this.recipeTime = 10;
      this.serves = 4;
      this.image = 'assets/img/dishes/fruitrayta.jpg';
      this.ingredients = '2 Cup Plain Curd/ Yoghurt, 1/2 Cup Milk, 1 Teaspoon Sugar, 1/2 Teaspoon Kala Namak/ Rock Salt, 1/2 Teaspoon Kali Mirch/ Black Pepper Powder, 1/2 Teaspoon Chaat Masala, 1/2 Teaspoon Bhuna Jeera/ Roasted Cumin Powder, 1 Cup Fruits, like bananas, grapes, apples, pears etc.';
      this.directions = '<p>Take 2 cups of curd in a mixing bowl.</p><p>Add around 1/2 cup of milk in small increments. You can also use water instead of milk.</p><p>Beat the curd and milk into a smooth mixture. Adjust the quantity of milk to get a thick pouring consistency.</p><p>Now add sugar, kala namak (rock salt), kali mirch (black pepper powder), chaat masala and bhuna jeera (roasted cumin powder).</p><p>Add 1 cup of any fruits of your choice. I have added diced bananas, grapes, apples and pears. You can also add finely cut dry fruits like cashews and almonds. Fruit raita is ready. Serve it chilled.</p>';
    }
    else if (this.dishName === 'GARLIC TAWA NAAN') {
      this.recipeTime = 30;
      this.serves = 4;
      this.image = 'assets/img/dishes/naan.jpg';
      this.ingredients = '1 cup all purpose flour, 1 tablespoon butter, 1/2 teaspoon salt, 1/2 cup water, 1/2 tablespoon refined oil, 1/4 cup yoghurt (curd), 1/4 teaspoon baking soda, milk as required';
      this.directions = '<p>This naan bread or flatbread can also be used as base to prepare pizza. Use naan as pizza base and add your favorite cheese, sauce and toppings.</p><p>Sprinkle some water on one side of the rolled flat bread, and then place the wet side down on the preheated tava or skillet.</p><p>Once bubble starts to form on the surface of the naan (or flat bread), flip the tava / skillet such that the top surface of the naan is about 1 inch from the flame and gets directly roasted over the flame for about 30 seconds to 1 minute or until it develops desired color.</p><p>Flip the tava back, remove the naan using a flat spatula and transfer it to a plate. Immediately garnish with a mixture of melted butter (or ghee or desi ghee) and herbs.</p>';
    }
  }

  addComment() {
    this.showComment = false;
  }

  favClick() {
    this.showIconYellow = false;
    this.hideIconYellow = true;
  }

}
