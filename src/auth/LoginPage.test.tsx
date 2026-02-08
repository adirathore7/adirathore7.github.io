import {fireEvent, render, screen} from "@testing-library/react";
import LoginPage from "./LoginPage";

test('toggles password visibility', () => {
    render(<LoginPage />);

    const toggleBtn = screen.getByRole('button', {name: /show password/i});
    const input = screen.getByLabelText(/password/i);

    expect(input).toHaveAttribute('type', 'password');
    
    fireEvent.click(toggleBtn);
    expect(input).toHaveAttribute('type', 'text');
});
