import type { Meta, StoryObj } from '@storybook/react';
import  Button  from './Button';

const meta: Meta<typeof Button> = {
  title: 'My Library/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
