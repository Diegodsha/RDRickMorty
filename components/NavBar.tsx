import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Tab,
  Tabs,
  Box,
  Fab,
  Zoom,
  AppBar,
  Toolbar,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import Link from '../src/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Build,
  ContactPage,
  Home,
  Inventory2,
  Person,
  ReadMore,
} from '@mui/icons-material';
import BreadCrumb from './Breadcrumb';

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 10 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const useStyles = makeStyles((theme) => ({
  tab: {
    '&.MuiTab-root': {
      borderRadius: '3px',
    },
  },
  drawerIcon: {
    '&.MuiSvgIcon-root': {
      height: '35px',
      width: '35px',
    },
  },
  drawerIconContainer: {
    '&.MuiButtonBase-root': {
      '&:hover': {},
    },
  },
}));

export default function BackToTopNav(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const mediumSize = useMediaQuery(theme.breakpoints.down('md'));
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
        setValue(0);
        }
        break;
      case '/Characters':
        if (value !== 1) {
        setValue(1);
        }
        break;
      default:
        break;
    }
  }, []);


  const tabs = (
    <>
      <Tabs
        textColor="primary"
        value={value}
        onChange={handleChange}
        role='tablist'
        aria-label="navigation tabs"
        sx={{ marginRight: '10px' }}
      >
        <Tab
          sx={{ borderRadius: '5px' }}
          component={Link}
          href="/"
          label="Inicio"
          role='tab'
        />
        <Tab
          sx={{ borderRadius: '5px' }}
          component={Link}
          href="/characters"
          label="characters"
          role='tab'
        />
      </Tabs>
    </>
  );

  const list = () => (
    <Box
      role="presentation"
      onClick={() => setOpenDrawer(false)}
      onKeyDown={() => setOpenDrawer(false)}
    >
      
      <List>
        {['Inicio', 'characters',].map(
          (text, index) => (
            <ListItem
              divider
              selected={value === index}
              button
              key={text}
              onClick={() => setValue(index)}
              component={Link}
              href={`${text == 'Inicio' ? '/' : '/' + text.toLowerCase()}`}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <Home />
                ) : (
                  <Person />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const drawer = (
    <>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor={'right'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        color="inherit"
        sx={{ paddingBottom: '5px' }}
      >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {mediumSize ? drawer : tabs}
        </Toolbar>
        <BreadCrumb />
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
