export interface Id {
    id: string;
}

export interface Avatar {
    avatar: {
        avatarType: string;
        avatarUuid: null | string;
    };
}

export interface CreatedData {
    dateCreated: string;
}

export interface Slug {
    slug: string,
    name: string,
}

export interface Accsee {
    hasAccess: boolean;
}

export interface IsMember {
    isMember: boolean;
}
export interface Features {
    features: string[];
}

export interface FirstEvent {
    firstEvent: null | string;
}
export interface IsBookmarked {
    isBookmarked: boolean;
}
export interface Platform {
    platform: null | string;
}
