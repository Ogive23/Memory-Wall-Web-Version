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
import dateFormat from 'dateformat';
export class MemoryCard extends Component {
    render() {
        const { memory } = this.props;
        const imageUrl = `http://127.0.0.1:8000${memory.image}`;
        return (
            <>
                <Card >
                    <CardHeader
                        avatar={
                            <Avatar alt={memory.name} src={memory.image ?? '#'} />
                        }
                        action={
                            <MemoryCardSettingsButton />
                        }
                        title={memory.personName}
                        subheader={dateFormat(memory.created_at, "d-mm-yyyy")}

                    />
                    <CardMedia
                        component="img"
                        height="194"
                        src={imageUrl}
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
                            {memory.lifeStory}
                        </Typography>
                        <Button size="small">Know more about {memory.personName}</Button>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Badge color="secondary" badgeContent={memory.likes_count} max={999} showZero
                            overlap="circular" anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </Badge>
                        <Badge color="success" badgeContent={memory.likes_count} max={999} showZero
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
            </>
        );
    }
}

export default MemoryCard