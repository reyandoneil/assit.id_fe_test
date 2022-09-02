import { CardActions, CardContent } from '@mui/material';
import Card from '@mui/material/Card';

function index({nama}) {
  return (
    <>
      <Card sx={{ maxWidth: 250}}>
        <CardActions>
          <CardContent>
            <span>{nama}</span>
          </CardContent>
        </CardActions>
      </Card>
    </>
  );
}

export default index;
