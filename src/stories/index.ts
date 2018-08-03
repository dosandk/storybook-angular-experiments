import { storiesOf } from '@storybook/angular';
import { MyButtonComponent } from '../app/my-button/my-button.component';

storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: MyButtonComponent,
    props: {
      defaultText: 'Awesome button!',
    }
  }))
  .add('with some emoji and action', () => ({
    component: MyButtonComponent,
    props: {
      defaultText: '😀 😎 👍 💯'
    },
  }));

