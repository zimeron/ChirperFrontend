// Data Model describing a Chirper user


export class User {
    // ID in DB is an intenger, primary key
    id: number;
    // Displayed Username, may be email address in future update.
    username: string;
    // This user's current post ids.  Used to query.
    posts: string[];
    // This user's followed user ids.  Used to query.
    following: string[];
    // User's password for authentication.
    password: string;
    // Password confirmation for authentication.
    password_confirmation: string;
}
