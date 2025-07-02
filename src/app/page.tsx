import { Droplets, Gem, Palette, Zap } from 'lucide-react';
import { ThemeStatus } from '~/components/theme-status';
import { ThemeToggle } from '~/components/theme-toggle';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

export default function Home() {
    return (
        <div className='min-h-screen bg-background'>
            <div className='container mx-auto px-4 py-8'>
                <div className='max-w-4xl mx-auto space-y-8'>
                    {/* Header with Theme Toggle */}
                    <div className='flex justify-between items-start'>
                        <div className='text-center flex-1 space-y-4'>
                            <h1 className='text-4xl font-bold text-foreground'>
                                Onyx{' '}
                                <span className='text-onyx-amber'>Theme</span>
                            </h1>
                            <p className='text-xl text-muted-foreground'>
                                A sophisticated theme inspired by the elegance
                                of{' '}
                                <span className='font-semibold text-onyx-copper'>
                                    onyx stone
                                </span>
                            </p>
                            <p className='text-sm text-muted-foreground'>
                                Available in both light and dark variants with{' '}
                                <span className='text-onyx-gold'>
                                    complementary accents
                                </span>
                            </p>
                        </div>
                        <ThemeToggle />
                    </div>

                    <div className='flex justify-center gap-4'>
                        <Button>Primary Action</Button>
                        <Button variant='secondary'>Secondary</Button>
                        <Button
                            variant='outline'
                            className='border-onyx-amber text-onyx-amber hover:bg-onyx-amber hover:text-white rounded-full'
                        >
                            Accent Outline
                        </Button>
                    </div>

                    {/* Theme Persistence Status */}
                    <ThemeStatus />

                    <Separator />

                    {/* Accent Colors Showcase */}
                    <div className='space-y-6'>
                        <div className='text-center'>
                            <h2 className='text-2xl font-semibold mb-2'>
                                <Palette className='inline w-6 h-6 mr-2 text-onyx-amber' />
                                Onyx Accent Colors
                            </h2>
                            <p className='text-muted-foreground'>
                                Warm, sophisticated colors that complement the
                                onyx stone aesthetic
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            <Card border={'amber'}>
                                <CardHeader className='pb-3'>
                                    <CardTitle className='text-onyx-amber flex items-center gap-2'>
                                        <Zap className='w-4 h-4' />
                                        Amber
                                    </CardTitle>
                                    <CardDescription>
                                        Warm and energetic
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='space-y-2'>
                                    <div className='h-8 bg-onyx-amber square flex items-center justify-center text-white text-xs font-medium'>
                                        Primary
                                    </div>
                                    <div className='h-6 bg-onyx-amber-80 square flex items-center justify-center text-white text-xs'>
                                        80% Opacity
                                    </div>
                                    <div className='h-6 bg-onyx-amber-60 square flex items-center justify-center text-white text-xs'>
                                        60% Opacity
                                    </div>
                                </CardContent>
                            </Card>

                            <Card border={'copper'}>
                                <CardHeader className='pb-3'>
                                    <CardTitle className='text-onyx-copper flex items-center gap-2'>
                                        <Gem className='w-4 h-4' />
                                        Copper
                                    </CardTitle>
                                    <CardDescription>
                                        Rich and luxurious
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='space-y-2'>
                                    <div className='h-8 bg-onyx-copper square flex items-center justify-center text-white text-xs font-medium'>
                                        Primary
                                    </div>
                                    <div className='h-6 bg-onyx-copper-80 square flex items-center justify-center text-white text-xs'>
                                        80% Opacity
                                    </div>
                                    <div className='h-6 bg-onyx-copper-60 square flex items-center justify-center text-white text-xs'>
                                        60% Opacity
                                    </div>
                                </CardContent>
                            </Card>

                            <Card border={'gold'}>
                                <CardHeader className='pb-3'>
                                    <CardTitle className='text-onyx-gold flex items-center gap-2'>
                                        <div className='w-4 h-4 bg-onyx-gold rounded-full' />
                                        Gold
                                    </CardTitle>
                                    <CardDescription>
                                        Premium and elegant
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='space-y-2'>
                                    <div className='h-8 bg-onyx-gold square flex items-center justify-center text-white text-xs font-medium'>
                                        Primary
                                    </div>
                                    <div className='h-6 bg-onyx-gold-80 square flex items-center justify-center text-white text-xs'>
                                        80% Opacity
                                    </div>
                                    <div className='h-6 bg-onyx-gold-60 square flex items-center justify-center text-white text-xs'>
                                        60% Opacity
                                    </div>
                                </CardContent>
                            </Card>

                            <Card border={'teal'}>
                                <CardHeader className='pb-3'>
                                    <CardTitle className='text-onyx-teal flex items-center gap-2'>
                                        <Droplets className='w-4 h-4' />
                                        Teal
                                    </CardTitle>
                                    <CardDescription>
                                        Cool and sophisticated
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='space-y-2'>
                                    <div className='h-8 bg-onyx-teal square flex items-center justify-center text-white text-xs font-medium'>
                                        Primary
                                    </div>
                                    <div className='h-6 bg-onyx-teal-80 square flex items-center justify-center text-white text-xs'>
                                        80% Opacity
                                    </div>
                                    <div className='h-6 bg-onyx-teal-60 square flex items-center justify-center text-white text-xs'>
                                        60% Opacity
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Opacity Examples */}
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-semibold'>
                            Opacity Variations
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Background Overlays</CardTitle>
                                    <CardDescription>
                                        Perfect for subtle backgrounds and
                                        overlays
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='space-y-3'>
                                    <div className='h-12 bg-onyx-amber-20 square flex items-center justify-center text-foreground text-sm border'>
                                        20% Amber Overlay
                                    </div>
                                    <div className='h-12 bg-onyx-copper-20 square flex items-center justify-center text-foreground text-sm border'>
                                        20% Copper Overlay
                                    </div>
                                    <div className='h-12 bg-onyx-gold-20 square flex items-center justify-center text-foreground text-sm border'>
                                        20% Gold Overlay
                                    </div>
                                    <div className='h-12 bg-onyx-teal-20 square flex items-center justify-center text-foreground text-sm border'>
                                        20% Teal Overlay
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Hover States</CardTitle>
                                    <CardDescription>
                                        Great for interactive elements
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='space-y-3'>
                                    <Button
                                        variant='ghost'
                                        className='w-full justify-start hover:bg-onyx-amber-20 hover:text-onyx-amber'
                                    >
                                        Hover for Amber
                                    </Button>
                                    <Button
                                        variant='ghost'
                                        className='w-full justify-start hover:bg-onyx-copper-20 hover:text-onyx-copper'
                                    >
                                        Hover for Copper
                                    </Button>
                                    <Button
                                        variant='ghost'
                                        className='w-full justify-start hover:bg-onyx-gold-20 hover:text-onyx-gold'
                                    >
                                        Hover for Gold
                                    </Button>
                                    <Button
                                        variant='ghost'
                                        className='w-full justify-start hover:bg-onyx-teal-20 hover:text-onyx-teal'
                                    >
                                        Hover for Teal
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Usage Examples */}
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-semibold'>
                            Usage Examples
                        </h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Card>
                                <CardHeader>
                                    <CardTitle className='text-onyx-amber'>
                                        Featured Article
                                    </CardTitle>
                                    <CardDescription>
                                        How to use accent colors effectively
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='space-y-3'>
                                    <p className='text-sm'>
                                        Use{' '}
                                        <span className='text-onyx-amber font-semibold'>
                                            amber
                                        </span>{' '}
                                        for call-to-action elements,
                                        <span className='text-onyx-copper font-semibold'>
                                            {' '}
                                            copper
                                        </span>{' '}
                                        for premium features, and{' '}
                                        <span className='text-onyx-teal font-semibold'>
                                            teal
                                        </span>{' '}
                                        for success states.
                                    </p>
                                    <div className='flex gap-2'>
                                        <Badge className='bg-onyx-amber text-white'>
                                            Hot
                                        </Badge>
                                        <Badge className='bg-onyx-copper text-white'>
                                            Premium
                                        </Badge>
                                        <Badge className='bg-onyx-teal text-white'>
                                            Success
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        <span className='text-onyx-gold'>
                                            Golden
                                        </span>{' '}
                                        Membership
                                    </CardTitle>
                                    <CardDescription>
                                        Exclusive benefits and features
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='space-y-3'>
                                    <div className='space-y-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-onyx-gold rounded-full' />
                                            <span className='text-sm'>
                                                Priority support
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-onyx-gold rounded-full' />
                                            <span className='text-sm'>
                                                Advanced features
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-onyx-gold rounded-full' />
                                            <span className='text-sm'>
                                                Exclusive content
                                            </span>
                                        </div>
                                    </div>
                                    <Button className='bg-onyx-gold hover:bg-onyx-gold/90 text-white'>
                                        Upgrade Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Text Variations */}
                    <div className='space-y-4'>
                        <h2 className='text-2xl font-semibold'>
                            Text Color Variations
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Headings & Emphasis</CardTitle>
                                </CardHeader>
                                <CardContent className='space-y-3'>
                                    <h3 className='text-xl text-onyx-amber'>
                                        Amber Heading
                                    </h3>
                                    <h3 className='text-xl text-onyx-copper'>
                                        Copper Heading
                                    </h3>
                                    <h3 className='text-xl text-onyx-gold'>
                                        Gold Heading
                                    </h3>
                                    <h3 className='text-xl text-onyx-teal'>
                                        Teal Heading
                                    </h3>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Interactive Elements</CardTitle>
                                </CardHeader>
                                <CardContent className='space-y-3'>
                                    <p className='text-sm'>
                                        <a
                                            // biome-ignore lint/a11y/useValidAnchor: <explanation>
                                            href='#'
                                            className='text-onyx-amber hover:text-onyx-amber-dark underline'
                                        >
                                            Amber Link
                                        </a>
                                    </p>
                                    <p className='text-sm'>
                                        <a
                                            // biome-ignore lint/a11y/useValidAnchor: <explanation>
                                            href='#'
                                            className='text-onyx-copper hover:text-onyx-copper-dark underline'
                                        >
                                            Copper Link
                                        </a>
                                    </p>
                                    <p className='text-sm'>
                                        <a
                                            // biome-ignore lint/a11y/useValidAnchor: <explanation>
                                            href='#'
                                            className='text-onyx-gold hover:text-onyx-gold-dark underline'
                                        >
                                            Gold Link
                                        </a>
                                    </p>
                                    <p className='text-sm'>
                                        <a
                                            // biome-ignore lint/a11y/useValidAnchor: <explanation>
                                            href='#'
                                            className='text-onyx-teal hover:text-onyx-teal-dark underline'
                                        >
                                            Teal Link
                                        </a>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Theme Showcase */}
                    <div className='text-center space-y-4'>
                        <h2 className='text-2xl font-semibold'>
                            Theme Variants
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Card>
                                <CardHeader>
                                    <CardTitle className='flex items-center gap-2'>
                                        <div className='w-4 h-4 bg-background border-2 border-foreground rounded-full' />
                                        Light Onyx
                                    </CardTitle>
                                    <CardDescription>
                                        Clean, sophisticated light theme
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-sm text-muted-foreground'>
                                        Inspired by polished onyx with light
                                        gray tones and{' '}
                                        <span className='text-onyx-amber'>
                                            warm accents
                                        </span>
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className='flex items-center gap-2'>
                                        <div className='w-4 h-4 bg-foreground rounded-full' />
                                        Dark Onyx
                                    </CardTitle>
                                    <CardDescription>
                                        Rich, elegant dark theme
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-sm text-muted-foreground'>
                                        Deep blacks and grays with{' '}
                                        <span className='text-onyx-copper'>
                                            copper veining
                                        </span>
                                        , like natural onyx stone
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className='text-center pt-8 border-t'>
                        <p className='text-muted-foreground'>
                            Built with shadcn/ui and the custom{' '}
                            <span className='text-onyx-gold font-semibold'>
                                Onyx theme
                            </span>{' '}
                            •{' '}
                            <span className='text-onyx-teal'>
                                Toggle between light and dark modes
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
