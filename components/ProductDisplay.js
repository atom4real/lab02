app.component ('product-display',{
    template:
    `<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :src="image" :class="{disabledButton: !inStock}" alt="img">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <h2>{{ onSale }}</h2>

            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div v-for="(variant, index) in variants "
             :key="variant.id"
              @mouseover="updateVariant(index)"
               class="color-circle"
               :style="{backgroundColor: variant.color}">
               </div>
            <button
             class=" button " 
             :disabled="!inStock" 
             :class="{disabledButton: !inStock}" 
             @click="addToCart ">
             Add to Cart
             </button>
        </div>
    </div>
</div>`
})
