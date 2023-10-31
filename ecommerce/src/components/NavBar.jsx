import { cartwidget } from "./CartWidget";

export const Navbar = () => {
    return (<header>
<nav>
    <div>Ecommerce</div>
   <ul>
    <li><a href=""></a>inicio</li>
    <li><a href=""></a>contactos</li>
    <li><a href=""></a>nosotros</li>
   </ul>
   <CartWidget />
</nav>
    </header>
    );
};