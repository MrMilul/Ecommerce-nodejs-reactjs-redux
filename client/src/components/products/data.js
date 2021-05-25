import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';
import sub from '../../images/subcription.jpg'
import ath from '../../images/athlet.jpg'
import org from '../../images/organization.jpg'

export const productData = [
    {
      img: product1,
      alt: 'Pizza',
      name: 'Supreme Pizza',
      desc:
        'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: '$19.99',
      button: 'Add to Cart'
    },
    {
      img: product2,
      alt: 'Pizza',
      name: 'Hawaiian Paradise',
      desc:
        ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: '$16.99',
      button: 'Add to Cart'
    },
    {
      img: product3,
      alt: 'Pizza',
      name: 'Veggie Overload',
      desc:
        ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: '$14.99',
      button: 'Add to Cart'
    }
  ];
  
  export const productDataTwo = [
    {
      img: sweet2,
      alt: 'Donuts',
      name: 'Doughlicious',
      desc:
        'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
      // price: '$0.99/gr',
      button: 'Add to Cart'
    },
    {
      img: sweet3,
      alt: 'Ice Cream',
      name: 'Caramel Wonder',
      desc:
        'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
      // price: '$0.99/gr',
      button: 'Add to Cart'
    },
    {
      img: sweet1,
      alt: 'Brownie',
      name: 'Brownie Bunch',
      desc:
        'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
      // price: '$0.99/gr',
      button: 'Add to Cart'
    }
  ];

  export const productDataThree = [
    {
      img: sub,
      alt: 'Pizza',
      name: 'Subscription',
      desc:
        'In next 22 work days we take care of your diet base on your choice. ',
      price: '$300/month',
      button: 'More Detail'
    },
    {
      img: ath,
      alt: 'Pizza',
      name: 'Athletes',
      desc:
        " Just Think about your gym we take care of your diet!",
      price: '$250/month',
      button: 'More Detail'
    },
    {
      img: org,
      alt: 'Pizza',
      name: 'Organizations',
      desc:
        'With Affordable price make your employees more happy!',
      price: '$150/person',
      button: 'More Detail'
    }
  ];