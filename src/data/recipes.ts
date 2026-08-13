export type Recipe = {
    id: string
    name: string
    ingredients: string[]
    timeMinutes: number
    steps: string[]
    tags: string[]

}
export const recipes: Recipe[] = [
    {
        id: '1',
        name: 'Sausage ragu',
        ingredients: ['pasta', 'onion', 'garlic', 'chilli', 'rosemary','chopped tomatoes', 'sugar', 'sausages', 'milk', 'lemon', 'parmesan'],
        timeMinutes: 45,
        steps: [
            'Heat 2 tbsp of the oil in a saucepan over a medium heat. Fry the onion with a pinch of salt for 7 mins. Add the garlic, chilli and rosemary, and cook for 1 min more. Tip in the tomatoes and sugar, and simmer for 20 mins.',
            'Heat the remaining oil in a medium frying pan over a medium heat. Squeeze the sausagemeat from the skins and fry, breaking it up with a wooden spoon, for 5-7 mins until golden. Add to the sauce with the milk and lemon zest, then simmer for a further 5 mins. To freeze, leave to cool completely and transfer to large freezerproof bags.',
            'Cook the pasta following pack instructions. Drain and toss with the sauce. Scatter over the parmesan and parsley leaves to serve.',
        ],
        tags: ['dinner'],
    },
    {
        id: '2',
        name: 'Omelette',
        ingredients: ['eggs', 'butter', 'salt'],
        timeMinutes: 10,
        steps: [
            'Beat the eggs with salt.',
            'Melt butter in a pan.',
            'Cook until set, fold, serve.',
        ],
        tags: ['breakfast'],
    },
    {
        id: '3',
        name: 'Honey chicken',
        ingredients: ['chicken', 'honey', 'soy sauce', 'garlic', 'ginger', 'lemon', 'sunflower','vegetables','rice','flour'],
        timeMinutes: 20,
        steps: [
            'Tip the chicken into a bowl, sprinkle over the flour and some seasoning and toss until the chicken is evenly coated.',
            'Combine the ginger, garlic, soy, honey and half the lemon juice in a bowl. Heat the oil in a large frying pan or wok over a high heat and fry the chicken for 3-4 mins until lightly golden. Tip in the honey sauce and stir-fry for 10 mins, or until the chicken is cooked through and the sauce has reduced enough to coat the back of a spoon. Taste for seasoning and squeeze over the remaining lemon juice, if needed, then serve with rice and steamed broccoli, if you like.',
        ],
        tags: ['dinner'],
    },
    {
        id: '4',
        name: 'American pancakes',
        ingredients: ['baking powder', 'sugar', 'eggs', 'butter', 'milk', 'lemon', 'oil','maple syrup','flour'],
        timeMinutes: 20,
        steps: [
            'Mix 200g self-raising flour, 1 ½ tsp baking powder, 1 tbsp golden caster sugar and a pinch of salt together in a large bowl.',
            'Create a well in the centre with the back of your spoon then add 3 large eggs, 25g melted butter and 200ml milk.',
            'Whisk together either with a balloon whisk or electric hand beaters until smooth then pour into a jug.',
            'Heat a small knob of butter and 1 tsp of oil in a large, non-stick frying pan over a medium heat. When the butter looks frothy, pour in rounds of the batter, approximately 8cm wide. Make sure you don’t put the pancakes too close together as they will spread during cooking. Cook the pancakes on one side for about 1-2 mins or until lots of tiny bubbles start to appear and pop on the surface. Flip the pancakes over and cook for a further minute on the other side. Repeat until all the batter is used up.',
            'Serve your pancakes stacked up on a plate with a drizzle of maple syrup and any of your favourite toppings.',
        ],
        tags: ['breakfast'], 
    },
    {
        id: '5',
        name: 'Spicy chicken & avocado wraps',
        ingredients: ['chicken', 'chilli powder', 'garlic', 'oil', 'wraps', 'avocado', 'oil','pepper','coriander'],
        timeMinutes: 10,
        steps: [
            'Mix the chicken with the lime juice, chilli powder and garlic.',
            'Heat the oil in a non-stick frying pan then fry the chicken for a couple of mins – it will cook very quickly so keep an eye on it. Meanwhile, warm the wraps following the pack instructions or, if you have a gas hob, heat them over the flame to slightly char them. Do not let them dry out or they are difficult to roll.',
            'Squash half an avocado onto each wrap, add the peppers to the pan to warm them through then pile onto the wraps with the chicken, and sprinkle over the coriander. Roll up, cut in half and eat with your fingers.',
        ],
        tags: ['lunch'],    
    }
]