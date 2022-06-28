import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from '../components/CharacterCard'
import Link from '../src/Link'

export default {
    title: 'Comp/Character Card',
    component: Card,
    // argTypes:{
    //     onClick:{action:'clicked'},
    //     handleMouseOver:{action:'mouseover'},
    // }

} as ComponentMeta<typeof Card>

const Template:ComponentStory<typeof Card> = (args)=> <Card {...args} />

export const CharCard = Template.bind({})

CharCard.args={
    image:'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/11-cosas-que-no-sabias-de-rick-y-morty/137666502-1-esl-ES/11-cosas-que-no-sabias-de-Rick-y-Morty.jpg',
    alt:'character',
    name:'character',
    gender:'male',
    status:'dead',
    id:'1',
    species:'human',
}
