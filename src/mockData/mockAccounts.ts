import type { Account } from "../types/banking";

export const mockAccounts: Account[] = Array.from(
    { length: 14 },
    (_, index) => ({
        id: `ACC-${1000 + index}`,
        name: generateRandomName(),
        balance: parseFloat((Math.random() * 1000000).toFixed(2)),
        currency: index % 2 === 0 ? "USD" : "CAD",
    })
);

function generateRandomName(): string {
    const adjectives = ["Global", "Dynamic", "Innovative", "Prime", "NextGen", "Pioneer", "Visionary", "Synergy", "Quantum", "Nexus", "Vertex", "Summit", "Apex", "Zenith", "Momentum", "Catalyst", "Elevate", "Ascend", "Vanguard"];
    const nouns = ["Solutions", "Enterprises", "Holdings", "Group", "Partners", "Ventures", "Capital", "Investments", "Financial", "Wealth", "Advisors", "Management", "Services", "Consulting", "Dynamics"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adjective} ${noun}`;
}