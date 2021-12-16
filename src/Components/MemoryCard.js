import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Badge, Button } from '@mui/material';
import MemoryCardSettingsButton from './MemoryCardSettingsButton';

export class MemoryCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { memory } = this.props;
        return (
            <Card sx={{ maxWidth: 345 }} style={{  }}>
                <CardHeader
                    avatar={
                        <Avatar alt={memory.author.name} src={memory.author.image ?? '#'} />
                    }
                    action={
                        <MemoryCardSettingsButton />
                    }
                    title={memory.author.name}
                    subheader={memory.createdOn}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={memory.image}
                    alt={memory.personName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {memory.personName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {memory.birthDate + " - " + memory.deathDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {memory.brief}
                    </Typography>
                    <Button size="small">Know more about {memory.personName}</Button>
                </CardContent>
                <CardActions disableSpacing>
                    <Badge color="secondary" badgeContent={memory.numberOfLikes} max={999} showZero
                        overlap="circular" anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </Badge>
                    <Badge color="success" badgeContent={memory.numberOfShares} max={999} showZero
                        overlap="circular" anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </Badge>
                </CardActions>
            </Card>
        );
    }
}

export default MemoryCard