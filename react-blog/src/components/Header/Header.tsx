import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router"
import { PATHS } from "../../paths"

const links = [
  { to: '/', label: 'Главная'},
  { to: PATHS.posts(), label: 'Посты'},
  { to: PATHS.about(), label: 'О проекте'},
]


export const Header = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
          <Typography variant="h6" component="h1" color="primary">
            Мой первый проект
          </Typography>

        <Box component='nav' sx={{ display: 'flex', gap: 1}}>
          {links.map((link) => {
            return (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                color="inherit"
                // NavLink сам добавляет класс .active текущей ссылке
                sx={{ '&.active': { color: 'primary.main' } }}
              >
                {link.label}
              </Button>
            )
          })}
        </Box>


        </Toolbar>
      </Container>
    </AppBar>
  )
}