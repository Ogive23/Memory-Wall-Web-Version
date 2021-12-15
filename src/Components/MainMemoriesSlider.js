import React, { Component } from 'react'
import {Carousel , Item} from 'react-material-ui-carousel';
const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]
export class MainMemoriesSlider extends Component {
    
    render() {
        
        return (
            <Carousel
                NextIcon={<img src="http://random.com/next" />}
                PrevIcon={<img src="http://random.com/prev" />}
                    next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                    prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        )
    }
}

export default MainMemoriesSlider
