import {useState} from 'react'
import {Avatar,alpha, AppBar, Badge, InputBase, makeStyles, Toolbar, Typography} from '@material-ui/core'
import { Cancel, Mail, Notifications, Search} from '@material-ui/icons';


const useStyles = makeStyles((theme)=>({

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "50%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}))


function Navbar() {


  const [open,setOpen] = useState(false)

  const classes = useStyles({open});


  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar} >
          <Typography variant="h6">
            Codeing Bucket
          </Typography>
          <div className={classes.search}>
           <Search/>
           <InputBase placeholder="search...." className={classes.input}/>
           <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
          </div>
          <div className={classes.icons}>
              <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
             <Badge badgeContent={4} color="secondary" className={classes.badge}>
                 <Mail/>
             </Badge>
             <Badge badgeContent={2} color="secondary" className={classes.badge}>
                 <Notifications/>
             </Badge>
             <Avatar alt='Jhon Doe' src="https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg"/>
           </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
