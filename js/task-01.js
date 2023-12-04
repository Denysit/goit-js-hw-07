const allCategories = document.getElementById("categories");
const categories = allCategories.children;
console.log(`Number of categories: ${categories.length}`);

Array.from(categories).forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryLength = category.querySelectorAll('ul > li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryLength}`);
});
