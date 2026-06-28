import { Store, ShoppingCart } from 'lucide-react';

const Header = () => {
 return (
  <div>
    <div>
     <Store />
     <span>My Store</span>
    </div>
    <ShoppingCart />
  </div>
 );
}

export default Header;
