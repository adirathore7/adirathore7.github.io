import AccountCard from "./AccountCard";
import {fireEvent, render, screen} from "@testing-library/react";
import { vi } from "vitest";

const mockAccount = {
    id: '1',
    name: 'Checking Acc',
    balance: 25000,
    currency: 'USD'
}

test('renders account name and balance', () => {
    render(
        <AccountCard account={mockAccount} onSelect={() => {}} />
    );

    expect(screen.getByText('Checking Acc')).toBeInTheDocument();
});

test('calls onSelect when clicked', () => {
    const onSelect = vi.fn();
    render(
        <AccountCard account={mockAccount} onSelect={() => {}} />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onSelect).toHaveBeenCalled();
});