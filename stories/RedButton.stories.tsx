import { ComponentStory, ComponentMeta } from '@storybook/react';
import {RedButton} from '../pages/RedButton'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Comp/redbutton',
    component: RedButton,
    argTypes:{
        onClick:{action:'clicked'},
        handleMouseOver:{action:'mouseover'},
    }

} as ComponentMeta<typeof RedButton>

const Template:ComponentStory<typeof RedButton> = (args)=> <RedButton {...args} />

export const Primary = Template.bind({})

Primary.args={
    main:'primary',
    // onClick: action('primary')
}


export const Secondary = Template.bind({})

Secondary.args={
    main:'secondary',
    variant:'outlined'
    // onClick: action('primary')
}