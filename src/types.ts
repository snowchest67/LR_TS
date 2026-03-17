export interface Source {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface Article {
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export type Callback<T> = (data: T) => void;

export interface GetRespOptions {
    endpoint: 'sources' | 'everything';
    options?: Record<string, string>;
}

export interface LoaderOptions extends Record<string, string> {
    apiKey: string;
}