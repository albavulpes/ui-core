interface ApiModel {
    Id: string;
}

interface Arc extends ApiModel {
    ComicId: string;

    Title: string;
    Number: number;
    CoverImage: Image;
}

declare type Role = 'Administrator' | 'Creator' | 'Member';

interface User extends ApiModel {
    UserName: string;
    Email: string;
    Password: string;

    Roles: Role[];
}

interface LoginRequest {
    Email: string;
    Password: string;
}

interface RegisterRequest {
    UserName: string;
    Email: string;
    Password: string;
}

interface Arc extends ApiModel {
    ComicId: string;

    Title: string;
    Number: number;
    CoverImage: Image;
}

interface Chapter extends ApiModel {
    ArcId: string;

    Title: string;
    ChapterNumber: number;
    CoverImage: Image;
}

interface Comic extends ApiModel {
    Title: string;
    Author: string;
    Description: string;
    ReleaseDate: Date | string;
    CoverImage: Image;
}

interface Page extends ApiModel {
    ChapterId: string;

    PageNumber: number;

    Image: Image;
}

interface Image {
    Thumbnail: string;
    FullSize: string;
}

interface ArcResponse extends Arc {
    ChaptersCount: number;
}

interface ChapterResponse extends Chapter {
    PagesCount: number;
}

interface ComicResponse extends Comic {
    ArcsCount: number;
}

interface StatusResponse {
    UserName: string;
    Email: string;
}