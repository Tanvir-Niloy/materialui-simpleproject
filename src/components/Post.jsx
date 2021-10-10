import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core'


const useStyles = makeStyles((theme)=>({


     card:{

        marginBottom:"50px"
     },
      media:{
           height:"250px"
      }
}))


function Post() {


  const classes = useStyles();


  return (
    <Card className={classes.card}>
      <CardActionArea>
          <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          title="Fast Food"
          />
          <CardContent>
             <Typography gutterBottom variant='h5'>My First Post</Typography>
             <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea minima aliquam illo dolorum, dolores officiis doloribus. Nulla, natus eaque!</Typography>
          </CardContent>
          <CardActions>
              <Button size='small' color='primary'>Share</Button>
              <Button size='small' color='primary'>Learn More</Button>
          </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default Post;

