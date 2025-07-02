'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { useThemePersistence } from '~/hooks/use-theme-persistence';
import { Clock, Trash2, Monitor, Sun, Moon } from 'lucide-react';

export function ThemeStatus() {
    const {
        theme,
        systemTheme,
        resolvedTheme,
        themeHistory,
        getThemeStats,
        clearThemeHistory,
        mounted,
    } = useThemePersistence();

    if (!mounted) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                        <Clock className='w-5 h-5' />
                        Theme Status
                    </CardTitle>
                    <CardDescription>
                        Loading theme information...
                    </CardDescription>
                </CardHeader>
            </Card>
        );
    }

    const stats = getThemeStats();
    const getThemeIcon = (themeName: string) => {
        switch (themeName) {
            case 'light':
                return <Sun className='w-4 h-4' />;
            case 'dark':
                return <Moon className='w-4 h-4' />;
            case 'system':
                return <Monitor className='w-4 h-4' />;
            default:
                return <Monitor className='w-4 h-4' />;
        }
    };

    const getThemeLabel = (themeName: string) => {
        switch (themeName) {
            case 'light':
                return 'Light Onyx';
            case 'dark':
                return 'Dark Onyx';
            case 'system':
                return 'System';
            default:
                return themeName;
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <Clock className='w-5 h-5 text-onyx-amber' />
                    Theme Persistence Status
                </CardTitle>
                <CardDescription>
                    Your theme preferences are automatically saved
                </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
                {/* Current Theme Info */}
                <div className='space-y-2'>
                    <h4 className='font-medium'>Current Settings</h4>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                        <div className='flex items-center gap-2 p-2 bg-muted square'>
                            {getThemeIcon(theme || 'system')}
                            <span className='text-sm'>
                                Selected:{' '}
                                <span className='font-medium'>
                                    {getThemeLabel(theme || 'system')}
                                </span>
                            </span>
                        </div>
                        <div className='flex items-center gap-2 p-2 bg-muted square'>
                            {getThemeIcon(systemTheme || 'light')}
                            <span className='text-sm'>
                                System:{' '}
                                <span className='font-medium'>
                                    {getThemeLabel(systemTheme || 'light')}
                                </span>
                            </span>
                        </div>
                        <div className='flex items-center gap-2 p-2 bg-muted square'>
                            {getThemeIcon(resolvedTheme || 'light')}
                            <span className='text-sm'>
                                Active:{' '}
                                <span className='font-medium'>
                                    {getThemeLabel(resolvedTheme || 'light')}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Theme History */}
                {themeHistory.length > 0 && (
                    <div className='space-y-2'>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-medium'>Recent Themes</h4>
                            <Button
                                variant='ghost'
                                size='sm'
                                onClick={clearThemeHistory}
                                className='text-destructive hover:text-destructive'
                            >
                                <Trash2 className='w-4 h-4 mr-1' />
                                Clear
                            </Button>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {themeHistory.map((historyTheme, index) => (
                                <Badge
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    key={index}
                                    variant={
                                        historyTheme === theme
                                            ? 'default'
                                            : 'secondary'
                                    }
                                    className='flex items-center gap-1'
                                >
                                    {getThemeIcon(historyTheme)}
                                    {getThemeLabel(historyTheme)}
                                    {index === 0 && (
                                        <span className='text-xs opacity-70'>
                                            (current)
                                        </span>
                                    )}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Last Updated */}
                {stats && (
                    <div className='text-xs text-muted-foreground pt-2 border-t'>
                        Last updated:{' '}
                        {new Date(stats.timestamp).toLocaleString()}
                    </div>
                )}

                {/* Persistence Info */}
                <div className='bg-onyx-amber-20 p-3 square'>
                    <p className='text-sm'>
                        <span className='font-medium text-onyx-amber'>
                            ✓ Persistence Active:
                        </span>{' '}
                        Your theme choice is automatically saved to your browser
                        and will be restored when you return.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
