import Button from '../utils/Form/Button/Button.jsx';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Текст кнопки',
};

export const Inverted = Template.bind({});
Inverted.args = {
  text: 'Текст кнопки',
  inverted: true,
};

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
  text: 'Текст кнопки',
  isLoading: true,
};

export const InvertedLoading = Template.bind({});
InvertedLoading.args = {
  text: 'Текст кнопки',
  inverted: true,
  isLoading: true,
};
