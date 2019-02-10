interface ApiModel {
    Id: string;
}

declare type Role = 'Administrator' | 'Creator' | 'Member';

interface User extends ApiModel {
    UserName: string;
    Email: string;
    Password: string;

    Roles: Role[];
}

interface MediaContent extends ApiModel {
    CoverImage: Image;
}

interface MediaContentCollection extends MediaContent {
    Title: string;
    Description: string;
    Author: string;

    CreatedDate: Date;
    PublishDate: Date;
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

interface Comic extends MediaContentCollection {
}

interface Arc extends MediaContentCollection {
    ComicId: string;

    ArcNumber: number;
}

interface Chapter extends MediaContentCollection {
    ArcId: string;

    ChapterNumber: number;
}

interface Page extends MediaContent {
    ChapterId: string;

    PageNumber: number;
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

interface ChapterGroupResponse {
    Arc: Arc;
    Chapters: ChapterResponse[];
}

interface ComicResponse extends Comic {
    ArcsCount: number;
}

interface StatusResponse {
    UserName: string;
    Email: string;
}

interface ImageResponse {
    ImagePath: string;
    ThumbnailPath: string;
}