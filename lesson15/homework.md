Test 1 – Product to Cart

Open homepage:
https://enjoythewood.com

Open header menu:
button[aria-controls="header-sidebar-menu"]

Open Bestseller collection:
a[href="/collections/bestseller"]

Open product:
a[href="/products/3d-multilayered-world-map-multicolor"] img.product-card\_\_image--primary

On product page – select attributes:

Select size:
label[for="swatch-template--18454303572120__main-product-form-1244287926316-template--18454303572120__main--option1-l-35x-59"]

Select style:
label[for="swatch-template--18454303572120__main-product-form-1244287926316-template--18454303572120__main--option2-prime-mountains-rivers"]

Select language (example):
label[for="swatch-template--18454303572120__main-product-form-1244287926316-template--18454303572120__main--option3-english"]

Add-ons:
.vertical-product:nth-of-type(1)
.vertical-product:nth-of-type(1) button[type="submit"]

Add main product to cart:
button.wiggle.button.button--xl.button--secondary

Cart drawer:
.cart-drawer.cart-drawer

Line items:
.line-item:nth-of-type(1)
.line-item:nth-of-type(2)

Verify quantity = 2:
.line-item:nth-of-type(1) .h-stack.justify-center.gap-3 input.quantity-input

Remove second item:
.line-item:nth-of-type(2) a.link

Verify only 1 item remains:
.line-item

Test 2 – Checkout

Precondition:
User has 1 item in the cart and the cart drawer is visible.
(Precondition is satisfied after completion of Test 1.)

Proceed to checkout:
button[type="submit"][name="checkout"]

Checkout fields:
input[name="email"]
select[name="countryCode"]
input[name="firstName"]
input[name="lastName"]
input[name="address1"]
input[name="address2"]
input[name="postalCode"]
input[name="city"]
input[name="phone"]

Payment – iDEAL:
input[id="basic-IDEAL"]
input[id="basic-IDEAL"]:checked

Billing address – same as shipping:
input[id="billing_address_selector-shipping_address"]
input[id="billing_address_selector-shipping_address"]:checked

Continue button:
button[type="submit"]#checkout-pay-button
