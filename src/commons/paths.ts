export const Paths = {
    HomePage: "/",
    AdminPage: "/admin",
    AboutPage: "/about",
    ContactPage: "/contact"
} as const;

export type Paths = typeof Paths[keyof typeof Paths];