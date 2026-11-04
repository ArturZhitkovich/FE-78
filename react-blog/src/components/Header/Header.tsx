import { AppBar, Container, Toolbar, Typography } from "@mui/material"

export const Header = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="h1" color="primary">
            Мой первый проект
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}