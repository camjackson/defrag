import { render } from '@testing-library/svelte';
import App from '../App.svelte';

describe('App', () => {
  it('renders without error', () => {
    const app = render(App);

    expect(app.getByText('Hello, world!')).toBeInTheDocument();
  });
});
