import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class', 'class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        '*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground':
                        'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground':
                        'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
                onyx: {
                    amber: {
                        '50': 'hsl(45 100% 97%)',
                        '100': 'hsl(48 96% 89%)',
                        '200': 'hsl(48 97% 77%)',
                        '300': 'hsl(46 97% 65%)',
                        '400': 'hsl(43 96% 56%)',
                        '500': 'hsl(35 85% 42%)',
                        '600': 'hsl(32 95% 38%)',
                        '700': 'hsl(26 90% 32%)',
                        '800': 'hsl(23 83% 28%)',
                        '900': 'hsl(22 78% 24%)',
                    },
                    copper: {
                        '50': 'hsl(24 100% 97%)',
                        '100': 'hsl(24 100% 92%)',
                        '200': 'hsl(24 100% 84%)',
                        '300': 'hsl(24 100% 74%)',
                        '400': 'hsl(24 100% 63%)',
                        '500': 'hsl(18 75% 40%)',
                        '600': 'hsl(16 70% 36%)',
                        '700': 'hsl(14 65% 32%)',
                        '800': 'hsl(12 60% 28%)',
                        '900': 'hsl(10 55% 24%)',
                    },
                    gold: {
                        '50': 'hsl(54 100% 97%)',
                        '100': 'hsl(54 100% 91%)',
                        '200': 'hsl(53 100% 82%)',
                        '300': 'hsl(50 100% 72%)',
                        '400': 'hsl(47 100% 62%)',
                        '500': 'hsl(42 90% 38%)',
                        '600': 'hsl(38 85% 34%)',
                        '700': 'hsl(34 80% 30%)',
                        '800': 'hsl(30 75% 26%)',
                        '900': 'hsl(26 70% 22%)',
                    },
                    teal: {
                        '50': 'hsl(166 76% 97%)',
                        '100': 'hsl(167 85% 89%)',
                        '200': 'hsl(168 84% 78%)',
                        '300': 'hsl(171 77% 64%)',
                        '400': 'hsl(172 66% 50%)',
                        '500': 'hsl(173 58% 39%)',
                        '600': 'hsl(175 60% 32%)',
                        '700': 'hsl(175 64% 26%)',
                        '800': 'hsl(176 61% 21%)',
                        '900': 'hsl(175 55% 18%)',
                    },
                },
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
