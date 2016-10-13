import { App } from './app.model';

export const APPS: App[] = [
    {
        id: 'org.gnome.gedit',
        name: 'gedit',
        summary: 'Edit text files',
        description: 'gedit is the official text editor of the GNOME desktop environment. While aiming at simplicity and ease of use, gedit is a powerful general purpose text editor.',
        license: 'GPL-2.0+',
        publisherName: 'GNOME',
        homepageUrl: 'http://www.gedit.org',
        storeIconUrl: 'org.gnome.gedit.png',
        flatpakRepoUrl: 'https://sdk.gnome.org/repo-apps/',
        flatpakRepoBranch: 'stable',
        flatpakRefUrl: 'org.gnome.gedit.flatpakref'
    },
    {
        id: 'org.gnome.Builder',
        name: 'Builder',
        summary: 'An IDE for GNOME',
        description: 'Builder is an actively developed Integrated Development Environment for GNOME. It combines integrated support for essential GNOME technologies such as GTK+, GLib, and GNOME APIs with features that any developer will appreciate, like syntax highlighting and snippets.',
        license: 'GPL-3.0+ and GPL-2.0+ and LGPL-3.0+ and LGPL-2.0+ and MIT',
        publisherName: 'GNOME',
        homepageUrl: 'https://wiki.gnome.org/Apps/Builder',
        storeIconUrl: 'org.gnome.Builder.png',
        flatpakRepoUrl: 'https://sdk.gnome.org/repo-apps/',
        flatpakRepoBranch: 'stable',
        flatpakRefUrl: 'org.gnome.Builder.flatpakref'
    }
];