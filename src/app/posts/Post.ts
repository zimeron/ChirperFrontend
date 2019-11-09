// Defines a user post
export class Post {
    // Unique post id, integer
    id: number;
    // Content of the post, max length 280 characters
    content: string;
    // Id of the user who posted.
    userid: number;
    // Username of the user who posted.
    username: string;
    // Timestamp of post creation for sorting, hopefully string works
    created_at: string;
    // Timestamp of post update (created by Rails, unused)
    updated_at: string;
}