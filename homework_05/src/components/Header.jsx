import { Store, ShoppingCart } from 'lucide-react';

const Header = () => {
 return (
  <header className="header">
      <div className="header__logo">
        <Store size={28} />
        <span>My Store</span>
      </div>

      <button className="header__cart">
        <ShoppingCart size={24} />
      </button>
    </header>
 );
}

export default Header;
