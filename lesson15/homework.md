# Test Case 1 – Add Product to Cart and Verify Cart Items

## Precondition

User opens https://enjoythewood.com

## Step 1 – Open header menu

CSS: button[aria-controls="header-sidebar-menu"]
XPath: //button[@aria-controls="header-sidebar-menu"]

## Step 2 – Click “Bestsellers”

CSS: a[href="/collections/bestseller"]
XPath: //a[@href="/collections/bestseller"]

## Step 3 – Open product card

CSS: a[href="/products/3d-multilayered-world-map-multicolor"] img.product-card**image--primary
XPath: //a[@href="/products/3d-multilayered-world-map-multicolor"]//img[contains(@class,'product-card**image--primary')]

# On Product Page

## Step 4 – Select size L (35×59)

CSS: label[for="swatch-template--18454303572120__main-product-form-1244287926316-template--18454303572120__main--option1-l-35x-59"]
XPath: //label[contains(@for,'option1-l-35x-59')]

## Step 5 – Select style Prime Mountains & Rivers

CSS: label[for="swatch-template--18454303572120__main-product-form-1244287926316-template--18454303572120__main--option2-prime-mountains-rivers"]
XPath: //label[contains(@for,'option2-prime-mountains-rivers')]

## Step 6 – Select language (example: English)

CSS: label[for="swatch-template-...option3-english"]
XPath: //label[contains(@for,'option3-english')]

# Add-ons

## Step 7 – Open first add-on item

CSS: .vertical-product:nth-of-type(1)
XPath: (//div[contains(@class,'vertical-product')])[1]

## Step 8 – Click “Add” on first add-on

CSS: .vertical-product:nth-of-type(1) button[type="submit"]
XPath: (//div[contains(@class,'vertical-product')])[1]//button[@type="submit"]

# Add Main Product to Cart

## Step 9 – Click “Add to cart”

CSS: button.wiggle.button.button--xl.button--secondary
XPath: //button[contains(@class,'button--xl') and contains(@class,'button--secondary')]

# Cart Drawer

## Step 10 – Verify cart drawer is visible

CSS: .cart-drawer.cart-drawer
XPath: //cart-drawer[contains(@class,'cart-drawer')]

## Step 11 – Identify two line items

CSS first item: .line-item:nth-of-type(1)
CSS second item: .line-item:nth-of-type(2)

XPath first item: (//line-item)[1]
XPath second item: (//line-item)[2]

# Quantity Check

## Step 12 – Verify quantity = 2 for first item

CSS: .line-item:nth-of-type(1) .h-stack.justify-center.gap-3 input.quantity-input
XPath: (//line-item)[1]//input[contains(@class,'quantity-input')]

# Remove Add-on Item

## Step 13 – Remove second item

CSS: .line-item:nth-of-type(2) a.link
XPath: (//line-item)[2]//a[text()='Remove']

# Remaining Items

## Step 14 – Verify only one item left

CSS: .line-item
XPath: //line-item

Expected count: 1

# Test Case 2 – Checkout Flow

## Precondition

User has 1 item in the cart and cart drawer is open.

## Step 1 – Proceed to checkout

CSS: button[type="submit"][name="checkout"]
XPath: //button[@type='submit' and @name='checkout']

# Checkout Fields

## Step 2 – Email

CSS: input[name="email"]
XPath: //input[@name='email']

## Step 3 – Country/Region

CSS: select[name="countryCode"]
XPath: //select[@name='countryCode']

## Step 4 – First name

CSS: input[name="firstName"]
XPath: //input[@name='firstName']

## Step 5 – Last name

CSS: input[name="lastName"]
XPath: //input[@name='lastName']

## Step 6 – Address

CSS: input[name="address1"]
XPath: //input[@name='address1']

## Step 7 – Apartment

CSS: input[name="address2"]
XPath: //input[@name='address2']

## Step 8 – Postal code

CSS: input[name="postalCode"]
XPath: //input[@name='postalCode']

## Step 9 – City

CSS: input[name="city"]
XPath: //input[@name='city']

## Step 10 – Phone number

CSS: input[name="phone"]
XPath: //input[@name='phone']

# Payment Section

## Step 11 – Verify iDEAL is selected

CSS: input[id="basic-IDEAL"]
CSS checked: input[id="basic-IDEAL"]:checked

XPath: //input[@id='basic-IDEAL']
XPath checked: //input[@id='basic-IDEAL' and @checked]

# Billing Address

## Step 12 – Same as shipping address

CSS: input[id="billing_address_selector-shipping_address"]
CSS checked: input[id="billing_address_selector-shipping_address"]:checked

XPath: //input[@id='billing_address_selector-shipping_address']
XPath checked: //input[@id='billing_address_selector-shipping_address' and @checked]

# Continue Button

## Step 13 – Continue to payment

CSS: button#checkout-pay-button
XPath: //button[@id='checkout-pay-button']
