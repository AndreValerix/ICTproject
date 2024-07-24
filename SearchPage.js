// SearchPage.js

document.addEventListener('DOMContentLoaded', function() {
    var filters = document.querySelectorAll('.filter-group input[type="checkbox"]');
    filters.forEach(function(filter) {
        filter.addEventListener('change', filterProducts);
    });

    function filterProducts() {
        var selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
        var selectedPrices = Array.from(document.querySelectorAll('.price-filter:checked')).map(cb => cb.value);
        var selectedBrands = Array.from(document.querySelectorAll('.brand-filter:checked')).map(cb => cb.value);
        var selectedColors = Array.from(document.querySelectorAll('.color-filter:checked')).map(cb => cb.value);

        var products = document.querySelectorAll('.product-list .card');
        products.forEach(function(product) {
            var productCategory = product.getAttribute('data-category');
            var productPrice = parseFloat(product.getAttribute('data-price'));
            var productBrand = product.getAttribute('data-brand');
            var productColor = product.getAttribute('data-color');

            var categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(productCategory);
            var priceMatch = selectedPrices.length === 0 || selectedPrices.some(function(priceRange) {
                if (priceRange === 'under20') return productPrice < 20;
                if (priceRange === '20to50') return productPrice >= 20 && productPrice <= 50;
                if (priceRange === '50to100') return productPrice > 50 && productPrice <= 100;
                if (priceRange === 'over100') return productPrice > 100;
                return false;
            });
            var brandMatch = selectedBrands.length === 0 || selectedBrands.includes(productBrand);
            var colorMatch = selectedColors.length === 0 || selectedColors.includes(productColor);

            if (categoryMatch && priceMatch && brandMatch && colorMatch) {
                product.parentElement.style.display = 'block';
            } else {
                product.parentElement.style.display = 'none';
            }
        });
    }
});
