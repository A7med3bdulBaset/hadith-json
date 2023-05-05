declare type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

declare interface Hadith {
	id: number;
	arabic: string;
	english: {
		narrator: string;
		text: string;
	};
	chapterId: number;
}

interface Introduction {
	arabic: string;
	english: string;
}

interface Chapter {
	id: number;
	arabic: string;
	english: string;
}

interface BookInfo {
	title: string;
	author: string;
	introduction: string | undefined;
}

declare interface Metadata {
	length: number;
	arabic: Prettify<BookInfo>;
	english: Prettify<BookInfo>;
}

interface BookData {
	id?: number;
	metadata: Prettify<Metadata>;
	hadiths: Hadith[];
	chapter: Chapter | undefined;
}

interface ScrapedBook {
	id: number;
	arabic: {
		title: string;
		author: string;
	};
	english: {
		title: string;
		author: string;
	};
	length?: number;
	path: string[];
	route: {
		base: string;
		chapters: string[];
	};
}
