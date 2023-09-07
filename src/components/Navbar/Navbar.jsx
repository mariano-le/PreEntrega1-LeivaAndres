import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CardWidget';

const Navbar = () => {
    return (<AppBar>
        <Toolbar className='toolbar-navbar' sx={{display: "flex", justifyContent: "space-around"}}>
            <Typography sx={{color: '#EC53B0'}}>
                Simulador 1.0
            </Typography>
            <Button sx={{color: '#9D44C0'}}>
                Home
            </Button>
            <Button sx={{color: '#9D44C0'}}>
                Categorias 
            </Button>
            <Button sx={{color: '#9D44C0'}}>
                Productos
            </Button>
            <CartWidget />
        </Toolbar>
    </AppBar>
    );
}

export default Navbar;