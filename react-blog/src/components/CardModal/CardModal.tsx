import { Modal, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearSelectedPost } from "../../store/selectedPostSlice";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CardModal = () => {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.selectedPost.post)

  const onClose = () => {
    dispatch(clearSelectedPost())
  }

  if (!post) {
    return null
  }

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={style}>
        <Card>
          {post.image && (
            <CardMedia
              sx={{ height: 340 }}
              image={post.image}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {post.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  )
}

export default CardModal