import { AppBar, Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router';
import { PATHS } from '../../paths';
import { ThemeToggle } from './ThemeToggle';
import { IsAuthToggle } from './IsAuthToggle';


const links = [
  { to: '/', label: 'Главная' },
  { to: PATHS.posts(), label: 'Посты' },
  // { to: '/about', label: 'О проекте' },
]

export const Header = () => {
  return (
    // фон шапки — на всю ширину экрана
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      sx={{ mb: 5 }}
    >
      {/* а содержимое — внутри контейнера */}
      <Container>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 'unset', '@media (min-width: 600px)': { minHeight: 'unset' } }}>
          
          <Box sx={{ display: 'flex'}}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Box component='nav' sx={{ display: 'flex', gap: 1}}>
              {links.map((link) => {
                return (
                  <Button
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  color="inherit"
                  // NavLink сам добавляет класс .active текущей ссылке
                  sx={{ '&.active': { color: 'red' } }}
                >
                  {link.label}
                </Button>
                )
              })}

            </Box>
          </Box>

          <Box sx={{display: 'flex'}}>
            <Box>
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchOutlinedIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <IsAuthToggle />
            <ThemeToggle />
          </Box>
            
        </Toolbar>
      </Container>
    </AppBar>
  );
};

