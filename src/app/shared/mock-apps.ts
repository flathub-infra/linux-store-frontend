import { App } from './app.model';

export const APPS: App[] = [
     {
        id: 'org.gnome.gedit',
        name: 'gedit',
        summary: 'Edit text files',
        description: `<p>gedit is the official text editor of the GNOME desktop environment. While aiming at simplicity and ease of use, gedit is a powerful general purpose text editor.</p>
                     <p>Whether you are writing the next bestseller, programming an innovative application, or simply taking some quick notes, gedit will be a reliable tool to accomplish your task.</p>
                     <p>Its flexible plugin system allows you to tailor the application to your needs and adapt it to your workflow.</p>`,
        license: 'GPL-2.0+',
        publisherName: 'GNOME',
        homepageUrl: 'http://www.gedit.org',
        storeIconUrl: 'assets/apps/org.gnome.gedit/images/org.gnome.gedit-256x256.png',
        flatpakRepoUrl: 'https://sdk.gnome.org/repo-apps/',
        flatpakRepoBranch: 'stable',
        flatpakRefUrl: 'assets/apps/org.gnome.gedit/org.gnome.gedit.flatpakref'
    },
    {
        id: 'org.gnome.Builder',
        name: 'Builder',
        summary: 'An IDE for GNOME',
        description: `<p>Builder is an actively developed Integrated Development Environment for GNOME. It combines integrated support for essential GNOME technologies such as GTK+, GLib, and GNOME APIs with features that any developer will appreciate, like syntax highlighting and snippets.</p>
                      <p>You can rely on predictable releases of Builder with each new release of GNOME every six months.</p>
                      <p>Features:</p>
                      <ul>
                        <li>Built in syntax highlighting for many languages</li>
                        <li>Side-by-side code editors</li>
                        <li>Integration with Git</li>
                        <li>Integration with Autotools</li>
                        <li>Clang based auto-completion, semantic highlighting, and diagnostics</li>
                        <li>Python based auto-completion, semantic highlighting, and diagnostics</li>
                        <li>Vala based auto-completion and diagnostics</li>
                        <li>Auto indentation support for C, Python, Vala, and XML</li>
                        <li>HTML/Markdown live preview</li>
                        <li>Optional Vim-style editing</li>
                        <li>Preview support for building with Xdg-App runtimes</li>
                      </ul>`,
        license: 'GPL-3.0+ and GPL-2.0+ and LGPL-3.0+ and LGPL-2.0+ and MIT',
        publisherName: 'GNOME',
        homepageUrl: 'https://wiki.gnome.org/Apps/Builder',
        storeIconUrl: 'assets/apps/org.gnome.Builder/images/org.gnome.Builder-256x256.png',
        flatpakRepoUrl: 'https://sdk.gnome.org/repo-apps/',
        flatpakRepoBranch: 'stable',
        flatpakRefUrl: 'assets/apps/org.gnome.Builder/org.gnome.Builder.flatpakref'
    }
];
