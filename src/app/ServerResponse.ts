// Defines structure for a response message from the server.
export class ServerResponse {
    // Status of request
    status: string;
    // Message(s) from server
    message: string[];
    // UserID for session management, if applicable.
    userid: number;
}
