export const categories = ["All", "Coffee", "Breakfast", "Lunch", "Pastries"] as const;
export type Category = (typeof categories)[number];

export const menuItems: { name: string; category: Exclude<Category, "All">; price: string; description: string }[] = [
  { name: "Fern Flat White", category: "Coffee", price: "$4.50", description: "Double ristretto, velvet microfoam, a whisper of raw sugar." },
  { name: "Iced Cardamom Latte", category: "Coffee", price: "$5.00", description: "House cardamom syrup, cold brew, oat milk over clear ice." },
  { name: "Mushroom Sourdough", category: "Breakfast", price: "$12.00", description: "Toasted sourdough, garlic mushrooms, poached farm egg, chives." },
  { name: "Ricotta & Honey", category: "Breakfast", price: "$9.00", description: "Whipped ricotta, warm honeycomb, toasted seeds, lemon zest." },
  { name: "Green Goddess Bowl", category: "Lunch", price: "$14.00", description: "Quinoa, avocado, charred broccolini, toasted hazelnut, herb yoghurt." },
  { name: "Smoked Trout Sourdough", category: "Lunch", price: "$11.00", description: "Smoked trout, dill crème, pickled cucumber, rye sourdough." },
  { name: "Almond Croissant", category: "Pastries", price: "$4.50", description: "Twice-baked, frangipane centre, a snow of icing sugar." },
  { name: "Lemon Olive Oil Cake", category: "Pastries", price: "$4.00", description: "Tender crumb, candied peel, a drizzle of grassy olive oil." },
];

export const specials: { name: string; category: Exclude<Category, "All">; price: string; description: string; note: string }[] = [
  { name: "Mushroom Sourdough", category: "Breakfast", price: "$12.00", description: "The pan we've been waiting for: garlic mushrooms folded through cream, a slow poached egg, chives snipped at the pass.", note: "Till 11:00 am · while the pan holds" },
  { name: "Iced Cardamom Latte", category: "Coffee", price: "$5.00", description: "Green cardamom cracked and steeped overnight, poured over cold brew and clear ice, finished with oat milk.", note: "Two for one · before 9:00 am" },
];
