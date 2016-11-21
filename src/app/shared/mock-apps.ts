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
    storeIconUrl: 'assets/apps/org.gnome.gedit/images/org.gnome.gedit-128x128.png',
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
    storeIconUrl: 'assets/apps/org.gnome.Builder/images/org.gnome.Builder-128x128.png',
    flatpakRepoUrl: 'https://sdk.gnome.org/repo-apps/',
    flatpakRepoBranch: 'stable',
    flatpakRefUrl: 'assets/apps/org.gnome.Builder/org.gnome.Builder.flatpakref'
  },
  {
    id: 'org.gnome.Epiphany',
    name: 'GNOME Web',
    summary: 'Web browser for GNOME',
    description: `<p>The web browser for GNOME, featuring tight integration with the desktop and a simple and intuitive user interface
                       that allows you to focus on your web pages. If you’re looking for a simple, clean, beautiful view of the web,
                       this is the browser for you.</p>
                      <p>GNOME Web is often referred to by its code name, Epiphany.</p>`,
    license: 'GPL-2.0+',
    publisherName: 'GNOME',
    homepageUrl: 'https://wiki.gnome.org/Apps/Web',
    storeIconUrl: 'assets/apps/org.gnome.Epiphany/images/org.gnome.Epiphany-128x128.png',
    flatpakRepoUrl: 'https://sdk.gnome.org/repo-apps/',
    flatpakRepoBranch: 'stable',
    flatpakRefUrl: 'assets/apps/org.gnome.Epiphany/org.gnome.Epiphany.flatpakref'
  },
  {
    id: 'org.gnome.Maps',
    name: 'GNOME Maps',
    summary: 'Find places around the world',
    description: `<p>Maps gives you quick access to maps all across the world. It allows you to quickly find the place you’re looking
                      for by searching for a city or street, or locate a place to meet a friend.</p>
                      <p>Maps uses the collaborative OpenStreetMap database, made by hundreds of thousands of people across the globe.</p>
                      <p>You can even search for specific types of locations, such as “Pubs near Main Street, Boston” or
                      “Hotels near Alexanderplatz, Berlin”.</p>`,
    license: 'GPL-2.0+',
    publisherName: 'GNOME',
    homepageUrl: 'https://wiki.gnome.org/Apps/Maps',
    storeIconUrl: 'assets/apps/org.gnome.Maps/images/org.gnome.Maps-128x128.png',
    flatpakRepoUrl: 'https://sdk.gnome.org/repo-apps/',
    flatpakRepoBranch: 'stable',
    flatpakRefUrl: 'assets/apps/org.gnome.Maps/org.gnome.Maps.flatpakref'
  }
  ,
  {
    id: 'org.gnome.Polari',
    name: 'Polari',
    summary: 'An Internet Relay Chat Client for GNOME',
    description: `<p>A simple Internet Relay Chat (IRC) client that is designed to integrate seamlessly with GNOME; it features a simple and beautiful
                interface which allows you to focus on your conversations.</p>`,
    license: 'GPL-2.0+ and LGPL-2.1+',
    publisherName: 'GNOME',
    homepageUrl: 'https://wiki.gnome.org/Apps/Polari',
    storeIconUrl: 'assets/apps/org.gnome.Polari/images/org.gnome.Polari-128x128.png',
    flatpakRepoUrl: 'https://sdk.gnome.org/repo-apps/',
    flatpakRepoBranch: 'stable',
    flatpakRefUrl: 'assets/apps/org.gnome.Maps/org.gnome.Polari.flatpakref'
  },
  {
    id: 'org.gnome.Geary',
    name: 'Geary',
    summary: 'Lightweight mail client',
    description: `<p>Geary is a mail application for GNOME designed to let you manage your email
                quickly and effortlessly. Its interface is based on conversations, so you can
                read an entire discussion without having to click from message to message.
                Geary is still in development and has a limited but growing set of features.
                </p>
                <p>
                Geary is designed to integrate with the GNOME desktop and is completely free.
                </p>
                <ul><li>Lightweight mail client with full IMAP support</li><li>Mail grouped into conversations, not a tree of threads</li><li>As-you-type searching</li><li>Desktop notifications</li><li>Multiple account support</li><li>Inline HTML composer that saves drafts to the server</li><li>Works with Gmail, Yahoo! Mail, Outlook.com (experimental), and other popular IMAP servers</li></ul>`,
    license: 'GPL-2.0+ and LGPL-2.1+',
    publisherName: 'GNOME',
    homepageUrl: 'https://wiki.gnome.org/Apps/Geary',
    storeIconUrl: 'assets/apps/org.gnome.Geary/images/org.gnome.Geary-128x128.png',
    flatpakRepoUrl: 'https://sdk.gnome.org/repo-apps/',
    flatpakRepoBranch: 'stable',
    flatpakRefUrl: 'assets/apps/org.gnome.Maps/org.gnome.Geary.flatpakref'
  },
  {
    id: 'org.libreoffice.LibreOffice',
    name: 'LibreOffice',
    summary: 'The LibreOffice productivity suite',
    description: `<p>LibreOffice is a powerful office suite.  Its clean interface and feature-rich tools help you unleash your creativity and enhance
                  your productivity.  LibreOffice includes several applications that make it the most powerful Free and Open Source office suite
                  on the market: Writer (word processing), Calc (spreadsheets), Impress (presentations), Draw (vector graphics and flowcharts),
                  Base (databases), and Math (formula editing).</p>
                  <p>LibreOffice supports opening and saving into a wide variety of formats, so you can easily share documents with users
                  of other popular office suites without worrying about compatibility.</p>`,
    license: 'MPL-2.0',
    publisherName: 'The Document Foundation',
    homepageUrl: 'http://www.libreoffice.org/discover/libreoffice/',
    storeIconUrl: 'assets/apps/org.libreoffice.LibreOffice/images/org.libreoffice.LibreOffice-128x128.png',
    flatpakRepoUrl: '',
    flatpakRepoBranch: '',
    flatpakRefUrl: 'assets/apps/org.libreoffice.LibreOffice/org.libreoffice.LibreOffice.flatpakref'
  }
];
