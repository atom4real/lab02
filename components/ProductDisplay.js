app.component("product-display", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

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
            <p>Shipping: {{ shipping }}</p>
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
</div>`,
    data() {
        return {
            product: 'Shoes',
            brand: 'SE 331',
            // image: './assets/images/socks_green.jpg',
            // inStock: false,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                // { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                // { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            activeClass: true,
            selectedVariant: 0
        }
    },
    method: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            return this.brand + ' ' + this.product + ' is on sale' 
        },
        shipping() {
            if(this.premium) {
                return 'Free'
            }
            return 30
        }
    }
})
